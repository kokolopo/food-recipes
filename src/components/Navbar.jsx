import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [user] = useState(localStorage.getItem('token'))
    const [style, setStyle] = useState('')

    useEffect(() => {
        if (!user) {
            setStyle('hidden')
        }
    }, [])
    return (
        <>
            <ul className="menu menu-horizontal font-semibold space-x-8 text-sm text-[#2E266F]">
                <li><Link to='/'>Home</Link></li>
                <li className={`${style}`}><Link to='/add'>Add Recipe</Link></li>
                <li className={`${style}`}><Link to='/profile'>Profile</Link></li>
            </ul >
        </>
    )
}

export default Navbar