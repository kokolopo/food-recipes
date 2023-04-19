import React from 'react'
import Navbar from '../components/Navbar'
import ayudia from '../assets/images/ayudia.png'
import { BiLike } from "react-icons/bi";
import { BsBookmark, BsFillPlayFill } from "react-icons/bs";
import Footers from '../components/Footer';

const DetailRecipe = () => {
    return (
        <>
            {/* screeen 1 */}
            <div className='w-screen h-auto sm:h-screen pt-5'>
                {/* navabar */}
                <div className='mx-10 '>
                    <Navbar />
                </div>

                {/* Recipe Photo */}
                <div className='flex flex-col mt-16 gap-5 justify-center items-center '>
                    <div className='text-[#2E266F] text-3xl font-semibold'>
                        <h4>Loream Sandwich</h4>
                    </div>
                    <div
                        className="bg-[url('/src/assets/images/detail_image.png')]
                        bg-no-repeat w-[330px] h-[224px] sm:w-[460px] sm:h-[300px] bg-contain bg-center
                        flex items-end justify-end"
                    >
                        <div className='flex sm:flex-row mb-3 sm:mb-5 mr-3 sm:mr-5 gap-3'>
                            <div className='bg-primary px-1 py-1 rounded-md text-white hover:cursor-pointer'>
                                <BsBookmark />
                            </div>
                            <div className='text-primary bg-white px-1 py-1 rounded-md border-primary border hover:cursor-pointer'>
                                <BiLike />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* screeen 2 */}
            <div className=' w-screen h-auto sm:h-screen sm:px-24 '>
                <div className='mb-5 space-y-5 sm:space-y-0 sm:space-x-32 px-5 sm:px-0 sm:py-5 flex flex-col sm:flex-row'>
                    {/* ingredients */}
                    <div className='text-black w-64 sm:w-1/2'>
                        <p className='text-lg font-semibold mb-3'>Ingredients</p>
                        <ul className="list-disc list-inside">
                            <li>2 eggs</li>
                            <li>2 tbsp mayonnaise</li>
                            <li>3 slices bread</li>
                            <li>a little butter</li>
                            <li>⅓ carton of cress</li>
                            <li>2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
                            <li>crisps , to serve</li>
                        </ul>
                    </div>

                    {/* steps */}
                    <div className='sm:w-2/3 flex flex-col text-black space-y-5'>
                        <p className='text-lg font-semibold'>Video Step</p>

                        <div>
                            <button className='btn btn-sm bg-primary text-white border-primary px-16'>
                                <BsFillPlayFill />
                            </button>
                        </div>
                        <div>
                            <button className='btn btn-sm bg-primary text-white border-primary px-16'>
                                <BsFillPlayFill />
                            </button>
                        </div>
                        <div>
                            <button className='btn btn-sm bg-primary text-white border-primary px-16'>
                                <BsFillPlayFill />
                            </button>
                        </div>
                        <div>
                            <button className='btn btn-sm bg-primary text-white border-primary px-16'>
                                <BsFillPlayFill />
                            </button>
                        </div>
                    </div>
                </div>
                {/* commenet */}
                <div className='hidden px-5 sm:flex flex-col justify-center items-center gap-3'>
                    <textarea className="textarea textarea-warning bg-white  sm:w-full h-[38vh]" placeholder="Comment :"></textarea>
                    <button className='btn btn-sm bg-primary border-primary text-white px-32 font-medium normal-case'>Send</button>
                </div>
            </div>

            {/* screeen 3 */}
            <div className=' w-screen h-screen sm:h-auto px-5 sm:px-24 mb-32' >
                <div className='sm:hidden flex flex-col justify-center items-center gap-3'>
                    <textarea className="textarea textarea-warning bg-white w-full sm:w-full h-[38vh]" placeholder="Comment :"></textarea>
                    <button className='btn btn-sm bg-primary border-primary text-white px-32 font-medium normal-case'>Send</button>
                </div>

                <div className='text-black mt-10 sm:mt-0'>
                    <p className='text-lg font-semibold mb-3'>Comment</p>
                </div>

                <div className=' flex flex-row space-x-3'>
                    <div className="avatar">
                        <div className="w-10 sm:w-12 rounded-full">
                            <img src={ayudia} alt='gambar' />
                        </div>
                    </div>

                    <div className='flex flex-col text-black font-semibold'>
                        <div className='text-sm'>Ayudia</div>
                        <div>Nice recipe. simple and delicious, thankyou</div>
                    </div>
                </div>

            </div>
            <Footers />
        </>
    )
}

export default DetailRecipe