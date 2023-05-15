import React, { useState } from 'react'
import { FiSearch, FiUser } from "react-icons/fi";
import Carousel from '../components/Carousel';
import CardRecipe from '../components/CardRecipe'
import ListRecipes from '../components/ListRecipes';
import image1 from '../assets/images/image1.svg'
import image1_1 from '../assets/images/image1-1.svg'
import vektor from '../assets/images/bg_vector.png'
import newRecipe from '../assets/images/newRecipe1.png'
import Footers from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../slices/recipesSlice';

const LandingPage = () => {
    const [user, setUser] = useState(localStorage.getItem('token'))
    const [key, setKey] = useState('')
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(key);
        navigate('/recipes');
        dispatch(search(key)) // Ganti '/next-page' dengan rute yang sesuai
    };

    return (
        <><div>
            {/* screen 1 */}
            <div className='relative hidden w-screen sm:h-screen sm:flex'>
                {/* Hero Images */}
                <div className='hidden sm:block absolute right-36 w-[470px] top-28'>
                    <div className='absolute w-60 left-30 top-2'>
                        <img src={vektor} alt="" />
                        <img src={vektor} alt="" />

                    </div>
                    <div className='absolute top-[-75px] w-60 left-40'>
                        <img src={image1_1} alt="seledri" />
                    </div>

                    <div className='absolute top-[-6px]'>
                        <img src={image1} alt="piring" />
                    </div>
                </div>

                {/* Kanan */}
                <div className='w-screen h-screen sm:w-3/4 bg-[#FFF5EC] flex flex-col sm:justify-center'>
                    <div className="absolute top-4 left-10">
                        {/* Navbar */}
                        <Navbar />

                    </div>

                    {/* Banner */}
                    <div className='sm:ml-28 sm:w-[380px] sm:h-[170px] mx-5 my-5'>
                        <p className='hidden sm:block sm:text-5xl sm:font-bold sm:text-[#2E266F] sm:mb-7'>Discover Recipe & Delicious Food</p>

                        {/* Input Search */}
                        <form
                            onSubmit={handleSubmit}
                            className="relative sm:mt-3 sm:w-auto text-secondaryText focus-within:text-primary"
                        >
                            <span className="absolute inset-y-0 left-[3px] flex items-center pl-[10px]">
                                <FiSearch size={15} />
                            </span>
                            <input type="text" name="search"
                                className="shadow-md py-[10px] min-w-full text-[12px]
                                        bg-white placeholder:text-secondaryText 
                                        rounded-[10px] pl-10 focus:outline-primary
                                        focus:text-primary focus:outline-none"
                                placeholder="Search Recipe"
                                autocomplete="off"
                                onChange={(e) => {
                                    setKey(e.target.value)
                                    console.log(key);
                                }}
                            />
                        </form>

                    </div>

                </div>

                {/* Kiri */}
                <div className="hidden sm:w-1/4 sm:h-screen sm:bg-primary sm:block">
                    {/* Avatar  */}
                    <div className='relative'>
                        {user ?
                            <div className="w-10 my-5 avatar online ml-36 group">
                                <div className="w-28 bg-white pl-[10px] py-2 rounded-full">
                                    <FiUser size={20} stroke='gray' />
                                </div>
                                <ul class="hidden group-hover:block absolute top-0 left-10 bg-white p-2">
                                    <Link to={'/'} onClick={() => {
                                        setUser(null)
                                        localStorage.clear()
                                    }}>Logout</Link>
                                </ul>
                            </div> :
                            <p className='my-5 font-semibold text-white ml-36 hover:cursor-pointer'><Link to={'/login'}>Login</Link></p>
                        }
                    </div>


                </div>
            </div>

            {/* screen 2 */}
            <div className='w-screen h-screen bg-[#FFF5EC] pt-1 sm:pt-5'>
                {/* navbar */}
                <div className='flex justify-center sm:hidden'>
                    <Navbar />
                </div>
                {/* Input Search */}
                <form
                    onSubmit={handleSubmit}
                    className="relative px-5 mb-5 sm:hidden sm:mt-3 sm:w-auto text-secondaryText focus-within:text-primary"
                >
                    <span className="absolute inset-y-0 left-[25px] flex items-center pl-[10px]">
                        <FiSearch size={15} />
                    </span>
                    <input type="text" name="search"
                        className="shadow-md py-[10px] min-w-full text-[12px]
                        bg-white placeholder:text-secondaryText 
                        rounded-[10px] pl-10 focus:outline-primary
                        focus:text-primary focus:outline-none"
                        placeholder="Search Recipe"
                        autocomplete="off"
                        onChange={(e) => {
                            setKey(e.target.value)
                            console.log(key);
                        }}
                    />
                </form>

                {/* Heading */}
                <div className='flex flex-row items-center h-8 ml-5 w-52 sm:ml-28'>
                    <div className='w-2 h-8 bg-primary'> </div>
                    <div className='ml-3 text-[#2E266F] font-semibold'>
                        <p>Popular For You</p>
                    </div>
                </div>

                {/* Popular For You */}
                <div className='mt-5 sm:relative sm:mt-10'>
                    <div className='hidden w-40 sm:relative sm:block'>
                        <img src={vektor} alt="vektor" />
                    </div>
                    <div className='z-0 mt-3 mb-3 ml-3 sm:mt-0 sm:absolute top-7'>
                        <Carousel />
                    </div>
                </div>

                {/* New Recipe */}
                <p className='mx-5 text-lg font-semibold text-black sm:hidden'>
                    New Recipe
                </p>
                <div className="my-3 sm:hidden ">
                    <CardRecipe />
                </div>


                {/* Popular Recipe */}
                <p className='mx-5 mt-2 text-lg font-semibold text-black sm:hidden'>
                    Popular Recipe
                </p>
                <div className='sm:hidden '>
                    <ListRecipes />


                </div>

            </div>

            {/* screen 3 */}
            <div className="w-screen h-screen bg-[#FFF5EC] pt-5">
                {/* Heading */}
                <div className='flex flex-row items-center h-8 ml-5 w-52 sm:ml-28'>
                    <div className='w-2 h-8 bg-primary'> </div>
                    <div className='ml-3 text-[#2E266F] font-semibold'>
                        <p>New Recipe</p>
                    </div>
                </div>

                <div className='relative hidden w-1/4 mt-10 sm:block h-2/3 bg-primary'>
                    <div className='absolute flex w-auto top-10 left-10'>
                        <div className='w-[380px]'>
                            <img src={newRecipe} alt="gambar" />
                        </div>
                        <div className='flex flex-col items-start justify-center ml-44'>
                            <div className='w-[350px] text-[#3F3A3A] mb-5'>
                                <p className='text-3xl '>Healthy Bone Broth Ramen (Quick & Easy)</p>
                                <div className='w-[100px] bg-[#6F6A40] h-[1px] my-5'> </div>
                                <p className=''>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                            </div>
                            <button className="px-8 text-sm font-thin text-white normal-case btn btn-warning btn-md">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* screen 4 */}
            <div className="hidden sm:block w-screen h-screen bg-[#FFF5EC] pt-5 px-28">
                {/* Heading */}
                <div className='flex flex-row items-center justify-between w-full h-8 ml-5 sm:ml-0'>
                    <div className='flex items-center justify-center'>
                        <div className='w-2 h-8 bg-primary'> </div>
                        <div className='ml-3 text-[#2E266F] font-semibold'>
                            <p>Popular Recipe</p>
                        </div>
                    </div>

                    <Link to={"/recipes"} className="font-semibold text-primary">
                        See all
                    </Link>
                </div>

                <div className='hidden sm:block'>
                    <ListRecipes />
                </div>

            </div>


            {/* screen 5 */}
            <div className='w-screen h-auto sm:h-screen bg-[#FFF5EC] flex justify-end items-end'>
                <Footers />
            </div>
        </div>
        </>
    )
}

export default LandingPage