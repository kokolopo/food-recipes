import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FiEdit3 } from "react-icons/fi";
import Footers from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteRecipe, fetchMyRecipes } from '../slices/myRecipesSlice';
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const ProfileUser = () => {
    const [user] = useState(localStorage.getItem('token'))
    const decodedToken = JSON.parse(atob(user.split('.')[1]));
    const username = decodedToken.name;

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.myrecipes)
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
        dispatch(fetchMyRecipes({ jwtToken: token }))
    }, [dispatch])

    console.log(data);

    // const deleteHandle = async (id) => {
    //     const config = {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}` // Ganti dengan token Anda
    //         },
    //         withCredentials: true
    //     };

    //     try {
    //         await axios.delete(`http://localhost:4000/recipes/${id}`, config)
    //         alert('ok berhasil apus')
    //     } catch (err) {
    //         console.log(err.response);

    //     }
    // }

    return (
        <>
            <div className='w-screen h-screen pt-5'>
                {/* navabar */}
                <div className='mx-10'>
                    <Navbar />
                </div>

                <div className='flex flex-col items-center justify-center mt-10 space-y-5'>
                    <div
                        className="w-44 h-44 bg-[url('/src/assets/images/profile_user.png')] bg-auto bg-center bg-no-repeat
                        flex justify-end items-end text-primary text-2xl hover:cursor-pointer"
                    >
                        <FiEdit3 />
                    </div>
                    <h1 className='font-semibold text-black'>{username}</h1>
                </div>

                <div className='pb-2 mt-20 border-b-2 border-white px-14'>
                    <ul className="border-slate-800 flex flex-row justify-start font-medium space-x-7 sm:space-x-16 text-xs sm:text-sm text-[#707070]">
                        <li className='hover:text-black hover:font-semibold'><a href='/'>My Recipe</a></li>
                        <li className='hover:text-black hover:font-semibold'><a href='/'>Saved Recipe</a></li>
                        <li className='hover:text-black hover:font-semibold'><a href='/'>Liked Recipe</a></li>
                    </ul>
                </div>

                <div className='flex flex-wrap w-full px-12 py-3 sm:gap-5'>
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    <div
                                        style={{ backgroundImage: `url('${item.image_url}')` }}
                                        className="bg-cover text-black bg-no-repeat w-32 h-[86px] sm:w-52
                                        bg-slate-300 sm:h-[120px] flex items-end pb-2 justify-between"
                                    >

                                        <div className='w-20 ml-2'>
                                            {item.title}
                                        </div>
                                        <div className="flex gap-1 hover:cursor-pointer">
                                            <Link to={`/edit/${item.id}`} className="p-1 text-2xl bg-white rounded-md">
                                                <FiEdit2 color='yellow' />
                                            </Link>
                                            <div
                                                className="p-1 text-2xl bg-white rounded-md"
                                                onClick={() => dispatch(deleteRecipe({ jwtToken: token, recipeId: item.id }))}
                                            >
                                                <MdDelete color='orange' />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    {/* <div bg-[url('/src/assets/images/my_recipe2.png')]
                        className="bg-[url('/src/assets/images/my_recipe1.png')]
                        bg-contain bg-no-repeat w-32 h-[86px] sm:w-44 sm:h-[120px] flex justify-start items-end
                        text-white"
                    >
                        <div className='w-20 ml-2'>
                            Bomb Chicken
                        </div>
                    </div>
                    <div
                        className="bg-[url('/src/assets/images/my_recipe2.png')]
                        bg-contain bg-no-repeat w-32 h-[86px] sm:w-44 sm:h-[120px] flex justify-start items-end
                        text-white "
                    >
                        <div className='w-20 ml-2'>
                            Bananas Pancake
                        </div>
                    </div> */}
                </div>

                <div className=''>

                    <Footers />
                </div>
            </div>

            <div className='w-screen h-[27vh]'></div>
        </>
    )
}

export default ProfileUser