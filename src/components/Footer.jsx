import React from 'react'

const Footers = () => {
    return (
        <>
            <footer
                className="sm:footer sm:w-screen sm:footer-center 
                    sm:p-10 h-[350px] w-screen bg-primary text-white flex flex-col justify-center 
                    items-center space-y-10">
                <div></div>
                <div>
                    <div className="text-4xl text-[#2E266F]">
                        <p className='font-semibold'>Eat, Cook, Repeat</p>
                    </div>
                    <p className='font-medium text-[#707070] text-base'>Share your best recipe by uploading here !</p>
                </div>
                <div className='w-full'>
                    <ul className="flex sm:flex-row justify-center font-medium space-x-6 text-xs text-[#707070]">
                        <li><a href='/'>Product</a></li>
                        <li><a href='/'>Company</a></li>
                        <li><a href='/'>Learn more</a></li>
                        <li><a href='/'>Get in touch</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footers