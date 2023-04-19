import React from 'react'
import Navbar from '../components/Navbar'
import { CiImageOn } from "react-icons/ci";
import Footers from '../components/Footer';

const AddRecipe = () => {
    return (
        <>
            {/* screeen 1 */}
            <div className='w-screen h-screen pt-5'>
                {/* navabar */}
                <div className='mx-10'>
                    <Navbar />
                </div>

                {/* Form Input */}
                <form
                    action="/" method="post"
                    className='px-10 sm:px-44 mt-10 flex flex-col space-y-7 sm:w-full mb-10 '
                >

                    <div className='rounded-md sm:w-full h-[50vh] bg-[#F6F5F4] flex flex-col justify-center items-center hover:cursor-pointer'>
                        <div className='text-3xl'>
                            <CiImageOn />
                        </div>
                        <span className='text-sm'>Add Photo</span>
                        {/* <input type="file" className="file-input file-input-ghost w-full max-w-xs" /> */}
                    </div>

                    <input type="text" placeholder="Title"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"
                    />

                    <textarea placeholder="Ingredients" className="textarea textarea-bordered h-[40vh] max-w-full bg-[#F6F5F4]" ></textarea>

                    <input type="text" placeholder="Video"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"
                    />

                    <div className='items-center justify-center flex'>
                        <button className='btn btn-sm bg-primary border-primary text-white px-32 font-medium normal-case'>Post</button>
                    </div>

                </form>

                <Footers />
            </div>

            {/* screen 2 */}
            <div className='w-screen h-[60vh] '>

            </div>
        </>
    )
}

export default AddRecipe