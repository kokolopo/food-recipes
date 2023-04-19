import React from 'react'
import { FiUser } from 'react-icons/fi'
import { BiBookAdd, BiHomeAlt } from "react-icons/bi";

const BottomNav = () => {
    return (
        <>
            <div className="sm:hidden btm-nav bg-primary text-white">
                <button className='hover:bg-amber-500'>
                    <BiHomeAlt size={20} />
                </button>
                <button className="hover:bg-amber-500">
                    <BiBookAdd size={20} />
                </button>
                <button className="hover:bg-amber-500">
                    <FiUser size={20} />
                </button>

            </div>
        </>
    )
}

export default BottomNav