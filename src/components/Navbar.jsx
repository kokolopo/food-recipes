import React from 'react'

const Navbar = () => {
    return (
        <>
            <ul className="menu menu-horizontal font-semibold space-x-8 text-sm text-[#2E266F]">
                <li><a href='/landing'>Home</a></li>
                <li><a href='/add'>Add Recipe</a></li>
                <li><a href='/profile'>Profile</a></li>
            </ul>
        </>
    )
}

export default Navbar