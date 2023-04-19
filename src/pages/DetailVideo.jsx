import React from 'react'
import Navbar from '../components/Navbar'
import { BsFillPlayFill } from "react-icons/bs";


const DetailVideo = () => {
    return (
        <>
            <div className='w-screen h-screen flex flex-col sm:flex-row'>
                <div className='hidden sm:block w-10 h-screen bg-primary'> </div>

                {/* Contains */}
                <div className='sm:w-2/3 sm:flex-col'>
                    {/* navabar */}
                    <div className='mx-5 mt-5'>
                        <Navbar />
                    </div>

                    <div className='sm:ml-24 mt-10 w-screen sm:w-[85%] flex flex-col 
                    justify-center px-5 sm:px-0 space-y-3'>
                        <div
                            className="bg-[url('/src/assets/images/video1.png')]
                        bg-no-repeat bg-contain h-[200px] sm:h-[330px] text-white text-5xl
                        flex justify-center items-center"
                        >
                            <BsFillPlayFill />
                        </div>
                        <div className='text-black font-semibold w-72'>
                            Beef Steak with Curry Sauce - [Step 4]
                            Cut the condiment and then mix it
                        </div>
                        <div className='text-sm'>
                            <p>3 month ago</p>
                        </div>
                    </div>
                </div>

                {/* Next video */}
                <div className=' px-5 sm:w-1/3 h-screen'>
                    <div className='mt-5 sm:mt-24 flex flex-col space-y-3'>
                        <p className='text-black font-semibold'>Next</p>

                        <div>
                            <div
                                className="bg-[url('/src/assets/images/video1.png')]
                            bg-contain bg-no-repeat w-56 h-[125px] text-white text-sm pl-2"
                            >
                                [Step 5]
                            </div>
                            <div className='text-black font-semibold w-60 text-xs'>
                                Beef Steak with Curry Sauce - [Step 5]
                                Cut the condiment and then mix it
                            </div>
                            <div className='text-xs'>
                                <p>3 month ago</p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="bg-[url('/src/assets/images/video1.png')]
                            bg-contain bg-no-repeat w-56 h-[125px] text-white text-sm pl-2"
                            >
                                [Step 5]
                            </div>
                            <div className='text-black font-semibold w-60 text-xs'>
                                Beef Steak with Curry Sauce - [Step 5]
                                Cut the condiment and then mix it
                            </div>
                            <div className='text-xs'>
                                <p>3 month ago</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='sm:hidden h-[30vh]'></div>
        </>
    )
}

export default DetailVideo