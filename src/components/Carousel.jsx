import React from 'react'
import gambar1 from "../assets/images/populer1.png";
import gambar2 from "../assets/images/populer2.png";

const Carousel = () => {

    return (
        <>
            <div className="flex overflow-x-scroll pb-3 hide-scroll-bar">
                <div className="flex flex-nowrap sm:ml-0">
                    <div className="inline-block px-2 sm:px-0">
                        <div className="relative sm:w-80 sm:h-80 w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src={gambar1} alt="gambar1" />
                            <div className='absolute inset-y-[80%] inset-x-3'>
                                <p className='text-[#FFF5EC] font-semibold'>Pizza Lamoa</p>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-2 ">
                        <div className="relative sm:w-80 sm:h-80 w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src={gambar2} alt="gambar1" />
                            <div className='absolute inset-y-[80%] inset-x-3'>
                                <p className='text-[#FFF5EC] font-semibold'>King Burger</p>
                            </div>
                        </div>
                    </div>

                    <div className="inline-block sm:hidden px-2">
                        <div className="relative w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src={gambar1} alt="gambar1" />
                            <div className='absolute inset-y-[80%] inset-x-3'>
                                <p className='text-[#FFF5EC] font-semibold'>Pizza Lamoa</p>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block sm:hidden px-2 ">
                        <div className="relative w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src={gambar2} alt="gambar1" />
                            <div className='absolute inset-y-[80%] inset-x-3'>
                                <p className='text-[#FFF5EC] font-semibold'>King Burger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel