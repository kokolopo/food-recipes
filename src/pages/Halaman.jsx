import React from 'react'
import { ReactComponent as Mama } from '../assets/images/logo.svg';

const Halaman = () => {
    return (
        <div className='w-screen, h-screen bg-backgroundColor'>
            <div className='absolute bg-primary sm:h-screen sm:w-full sm:bg-opacity-70 flex flex-col justify-center items-center'>
                <Mama alt="Logo" width={55} />
                <span className='absolute text-white text-[14px] font-medium inset-y-[55%]'>Mama Recipe.</span>
            </div>
        </div>
    )
}

export default Halaman