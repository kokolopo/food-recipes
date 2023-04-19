import React from 'react'
import Navbar from '../components/Navbar'
import ListRecipes from '../components/ListRecipes'
import BottomNav from '../components/BottomNav'

const Halaman = () => {
    return (
        <div className='w-screen, h-screen bg-backgroundColor'>
            <div className='mx-7 mb-7'>
                <Navbar />
            </div>

            <div className='mx-12'>
                <ListRecipes />
            </div>

            <BottomNav />
        </div>
    )
}

export default Halaman