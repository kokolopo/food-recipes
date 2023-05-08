import React from 'react'
import { ReactComponent as Mama } from '../assets/images/logo.svg';
import FormRegister from '../components/Fragments/FormRegister';
import { Link } from 'react-router-dom';


const Register = () => {
    // return (
    //     <>

    //         <div className=" sm:w-screen h-screen sm:flex">
    //             {/* HERO */}
    //             <div className='hidden sm:relative sm:w-1/2 sm:block sm:bg-login sm:bg-cover sm:bg-center'>
    //                 <div className='absolute bg-primary sm:h-screen sm:w-full sm:bg-opacity-70 flex flex-col justify-center items-center'>
    //                     <Mama alt="Logo" width={55} />
    //                     <span className='absolute text-white text-[14px] font-medium inset-y-[55%]'>Mama Recipe.</span>
    //                 </div>
    //             </div>

    //             {/* form input */}
    //             <div className="flex flex-col items-center justify-center sm:w-1/2">

    //                 <div className='text-center mt-10 sm:mt-1'>
    //                     <p className='text-lg text-primary font-semibold leading-3 sm:leading-7'>Let’s Get Started !</p>
    //                     <span className='text-secondaryText font-medium text-[12px]'>Create new account to access all features</span>
    //                 </div>

    //                 <form className='w-[300px]' action="" method="post">
    //                     <div className="relative mt-3 w-auto px-[28px] text-secondaryText focus-within:text-primary">
    //                         <label className="text-xs text-[#696F79] font-medium">Name
    //                             <input type="text" name="name" className="shadow-md py-[10px] min-w-full mt-1 text-[12px] bg-secondary placeholder:text-secondaryText rounded-[6px] pl-5 focus:outline-primary" placeholder="Name" autocomplete="off" />
    //                         </label>
    //                     </div>

    //                     <div className="relative mt-1 w-auto px-[28px] text-secondaryText focus-within:text-primary">
    //                         <label className="text-xs text-[#696F79] font-medium">Email address*
    //                             <input type="text" name="email" className="shadow-md py-[10px] min-w-full mt-1 text-[12px] bg-secondary placeholder:text-secondaryText rounded-[6px] pl-5 focus:outline-primary" placeholder="Email Address" autocomplete="off" />
    //                         </label>
    //                     </div>

    //                     <div className="relative mt-1 w-auto px-[28px] text-secondaryText focus-within:text-primary">
    //                         <label className="text-xs text-[#696F79] font-medium">Phone Number
    //                             <input type="text" name="phone" className="shadow-md py-[10px] min-w-full mt-1 text-[12px] bg-secondary placeholder:text-secondaryText rounded-[6px] pl-5 focus:outline-primary" placeholder="Phone Number" autocomplete="off" />
    //                         </label>
    //                     </div>

    //                     <div className="relative mt-1 w-auto px-[28px] text-secondaryText focus-within:text-primary">
    //                         <label className="text-xs text-[#696F79] font-medium">Password
    //                             <input type="text" name="password" className="shadow-md py-[10px] min-w-full mt-1 text-[12px] bg-secondary placeholder:text-secondaryText rounded-[6px] pl-5 focus:outline-primary" placeholder="Password" autocomplete="off" />
    //                         </label>
    //                     </div>

    //                     <div className="relative mt-1 w-auto px-[28px] text-secondaryText focus-within:text-primary">
    //                         <label className="text-xs text-[#696F79] font-medium">Confirm Password
    //                             <input type="text" name="confPassword" className="shadow-md py-[10px] min-w-full mt-1 text-[12px] bg-secondary placeholder:text-secondaryText rounded-[6px] pl-5 focus:outline-primary" placeholder="Confirm Password" autocomplete="off" />
    //                         </label>
    //                     </div>

    //                     <div className="flex mt-3 px-7 text-[#696F79] font-custom text-[10px]">
    //                         <input type="checkbox" className="mr-1 outline-none accent-primary" />
    //                         <label className='font-medium'>I agree to terms & conditions</label>
    //                     </div>

    //                     <div className='mt-3 px-[28px]'>
    //                         <button className='group relative 
    //                         flex w-full 
    //                         justify-center
    //                         rounded-[10px] bg-primary
    //                         py-[10px] text-white text-[12px] font-custom' type="submit">Register Account</button>
    //                     </div>

    //                 </form>

    //                 <div className='mt-3'>
    //                     <p className='font-medium text-[10px] text-secondaryText2'>Already have account? <span className='text-primary hover:cursor-pointer'>Log in Here</span></p>
    //                 </div>

    //             </div>
    //         </div >


    //     </>
    // )

    return (
        <>

            <div className=" sm:w-screen h-screen sm:flex">
                {/* HERO */}
                <div className='hidden sm:relative sm:w-1/2 sm:block sm:bg-login sm:bg-cover sm:bg-center'>
                    <div className='absolute bg-primary sm:h-screen sm:w-full sm:bg-opacity-70 flex flex-col justify-center items-center'>
                        <Mama alt="Logo" width={55} />
                        <span className='absolute text-white text-[14px] font-medium inset-y-[55%]'>Mama Recipe.</span>
                    </div>
                </div>

                {/* form input */}
                <div className="flex flex-col items-center justify-center sm:w-1/2">

                    <div className='text-center mt-10 sm:mt-1'>
                        <p className='text-lg text-primary font-semibold leading-3 sm:leading-7'>Let’s Get Started !</p>
                        <span className='text-secondaryText font-medium text-[12px]'>Create new account to access all features</span>
                    </div>

                    <FormRegister />

                    <div className='mt-3'>
                        <p className='font-medium text-[10px] text-secondaryText2'>Already have account? <Link to={'/login'} className='text-primary hover:cursor-pointer'>Log in Here</Link></p>
                    </div>

                </div>
            </div >


        </>
    )
}

export default Register