import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [user] = useState(localStorage.getItem('token'))

    return (
        <><div>
            {/* screen 1 */}
            <div className='hidden w-screen relative sm:h-screen sm:flex'>
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
                        <div className="relative sm:mt-3 sm:w-auto text-secondaryText focus-within:text-primary">
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
                            />
                        </div>

                    </div>

                </div>

                {/* Kiri */}
                <div className="hidden sm:w-1/4 sm:h-screen sm:bg-primary sm:block">
                    {/* Avatar  */}
                    <div className='relative'>
                        {user ?
                            <div className="avatar online w-10 my-5 ml-36">
                                <div className="w-28 bg-white pl-[10px] py-2 rounded-full">
                                    <FiUser size={20} stroke='gray' />
                                </div>
                            </div> :
                            <p className='my-5 ml-36 text-white hover:cursor-pointer font-semibold'><Link to={'/login'}>Login</Link></p>
                        }
                    </div>


                </div>
            </div>

            {/* screen 2 */}
            <div className='w-screen h-screen bg-[#FFF5EC] pt-1 sm:pt-5'>
                {/* navbar */}
                <div className='sm:hidden flex justify-center'>
                    <Navbar />
                </div>
                {/* Input Search */}
                <div className="sm:hidden mb-5 relative px-5 sm:mt-3 sm:w-auto text-secondaryText focus-within:text-primary">
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
                    />
                </div>
                {/* Heading */}
                <div className='w-52 h-8 flex flex-row items-center sm:ml-28 ml-5'>
                    <div className='h-8 w-2 bg-primary'> </div>
                    <div className='ml-3 text-[#2E266F] font-semibold'>
                        <p>Popular For You</p>
                    </div>
                </div>

                {/* Popular For You */}
                <div className='sm:relative mt-5 sm:mt-10'>
                    <div className='w-40 sm:relative sm:block hidden'>
                        <img src={vektor} alt="vektor" />
                    </div>
                    <div className='mt-3 ml-3 mb-3 z-0 sm:mt-0 sm:absolute top-7'>
                        <Carousel />
                    </div>
                </div>

                {/* New Recipe */}
                <p className='sm:hidden text-lg text-black font-semibold mx-5'>
                    New Recipe
                </p>
                <div className="my-3 sm:hidden ">
                    <CardRecipe />
                </div>


                {/* Popular Recipe */}
                <p className='sm:hidden text-lg text-black font-semibold mx-5 mt-2'>
                    Popular Recipe
                </p>
                <div className='sm:hidden '>
                    <ListRecipes />


                </div>

            </div>

            {/* screen 3 */}
            <div className="w-screen h-screen bg-[#FFF5EC] pt-5">
                {/* Heading */}
                <div className='w-52 h-8 flex flex-row items-center sm:ml-28 ml-5'>
                    <div className='h-8 w-2 bg-primary'> </div>
                    <div className='ml-3 text-[#2E266F] font-semibold'>
                        <p>New Recipe</p>
                    </div>
                </div>

                <div className='hidden sm:block h-2/3 w-1/4 bg-primary relative mt-10'>
                    <div className='w-auto flex absolute top-10 left-10'>
                        <div className='w-[380px]'>
                            <img src={newRecipe} alt="gambar" />
                        </div>
                        <div className=' ml-44 flex flex-col items-start justify-center'>
                            <div className='w-[350px] text-[#3F3A3A] mb-5'>
                                <p className='text-3xl '>Healthy Bone Broth Ramen (Quick & Easy)</p>
                                <div className='w-[100px] bg-[#6F6A40] h-[1px] my-5'> </div>
                                <p className=''>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                            </div>
                            <button className=" btn normal-case font-thin text-sm btn-warning text-white btn-md px-8">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* screen 4 */}
            <div className="hidden sm:block w-screen h-screen bg-[#FFF5EC] pt-5 px-28">
                {/* Heading */}
                <div className='w-52 h-8 flex flex-row items-center sm:ml-0 ml-5'>
                    <div className='h-8 w-2 bg-primary'> </div>
                    <div className='ml-3 text-[#2E266F] font-semibold'>
                        <p>Popular Recipe</p>
                    </div>
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