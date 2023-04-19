import React from 'react'
import gambar from '../assets/images/newRecipe1.png'

const CardRecipe = () => {
    return (
        <>
            <div className='px-5'>
                <div className="w-full flex bg-white shadow-md rounded-md
                hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className='w-1/2 flex flex-col'>
                        <img src={gambar} alt="gambar" />
                    </div>
                    <div className='mx-5 mt-2 flex flex-col space-y-10 '>
                        <p className='text-black text-sm font-semibold'>
                            Healthy Bone Broth Ramen (Quick & Easy)
                        </p>

                        <div className="flex flex-row-reverse">
                            <button className=" btn normal-case font-thin text-xs btn-warning text-white btn-sm">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardRecipe