import React from 'react'
import gambar1 from '../assets/images/populer1.png'

const ListRecipes = () => {
    return (
        <>
            <div className=" grid grid-cols-2 sm:grid-cols-3 sm:px-0 px-5 gap-y-5 mt-3 pb-12">
                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

                <div className='relative sm:w-[265px] w-40 rounded-md'>
                    <img src={gambar1} alt="gambar" />
                    <div className='absolute inset-y-[80%] inset-x-3'>
                        <p className='text-black font-semibold'>Pizza Lamoa</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ListRecipes