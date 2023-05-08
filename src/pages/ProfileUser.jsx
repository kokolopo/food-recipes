import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FiEdit3 } from "react-icons/fi";
import Footers from '../components/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileUser = () => {
    const [user] = useState(localStorage.getItem('token'))
    const decodedToken = JSON.parse(atob(user.split('.')[1]));
    const username = decodedToken.name;

    return (
        <>
            <div className='w-screen h-screen pt-5'>
                {/* navabar */}
                <div className='mx-10'>
                    <Navbar />
                </div>

                <div className='flex flex-col justify-center items-center space-y-5 mt-10'>
                    <div
                        className="w-44 h-44 bg-[url('/src/assets/images/profile_user.png')] bg-auto bg-center bg-no-repeat
                        flex justify-end items-end text-primary text-2xl hover:cursor-pointer"
                    >
                        <FiEdit3 />
                    </div>
                    <h1 className='text-black font-semibold'>{username}</h1>
                </div>

                <div className='px-14 border-b-2 border-white pb-2 mt-20'>
                    <ul className="border-slate-800 flex flex-row justify-start font-medium space-x-7 sm:space-x-16 text-xs sm:text-sm text-[#707070]">
                        <li className='hover:text-black hover:font-semibold'><a href='/'>My Recipe</a></li>
                        <li className='hover:text-black hover:font-semibold'><a href='/'>Saved Recipe</a></li>
                        <li className='hover:text-black hover:font-semibold'><a href='/'>Liked Recipe</a></li>
                    </ul>
                </div>

                <div className='mt-5 px-14 grid grid-flow-col auto-cols-max gap-3 sm:gap-5 mb-24'>
                    <div
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
                    </div>
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