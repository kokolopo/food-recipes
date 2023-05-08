import { Link } from 'react-router-dom';
import { ReactComponent as Mama } from '../../assets/images/logo.svg';
import { FiUser } from "react-icons/fi";

const Auth = ({ title, children }) => {
    return (
        <>
            <div className=" sm:w-screen h-screen sm:flex">
                {/* HERO */}
                <div className='hidden sm:relative sm:w-1/2 sm:block sm:bg-login sm:bg-cover sm:bg-center'>
                    <div className='absolute bg-primary sm:h-screen sm:w-full sm:bg-opacity-70 flex flex-col justify-center items-center'>
                        <Mama alt="Logo" width={55} className=' ' />
                        <span className='absolute text-white text-[14px] font-medium inset-y-[55%]'>Mama Recipe.</span>
                    </div>
                </div>

                {/* form input */}
                <div className="flex flex-col items-center sm:w-1/2 sm:justify-center">
                    {/* logo */}
                    <div className='relative sm:hidden w-28 h-28 mt-10 flex items-center justify-center bg-[#C4C4C4] rounded-full'>
                        <FiUser color='white' size={75} strokeWidth={1} />
                    </div>

                    {/* heading  */}
                    <div className='text-center mt-5'>
                        <p className='text-lg text-primary font-semibold leading-3 sm:leading-7'>Welcome !</p>
                        <span className='text-secondaryText font-medium text-[12px]'>Log in to your exiting account.</span>
                    </div>

                    {children}

                    <div className='mt-3 w-[300px] text-right px-[28px]'>
                        <p className='font-medium text-[8px] text-secondaryText2 hover:cursor-pointer'>Forgot Password ?</p>
                    </div>

                    <div className='mt-3'>
                        <p className='font-medium text-[10px] text-secondaryText2'>Don't have an account? <Link to='/register' className='text-primary hover:cursor-pointer'>Sign Up</Link></p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Auth