import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ListRecipes from '../components/ListRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage, search } from '../slices/recipesSlice';

const Recipes = () => {
    const { currentPage, keyword } = useSelector(state => state.recipes)
    const [sort, setSort] = useState('flex-wrap')
    const dispatch = useDispatch()
    const [key, setKey] = useState('')

    useEffect(() => {
        console.log(keyword);
    }, [keyword, currentPage])

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(search(key))
    }

    return (
        <div className='pb-10'>
            <div
                className="px-12 py-3 text-2xl font-semibold text-white bg-primary">
                All Recipe
            </div>

            <form className='px-12' onSubmit={e => handleSearch(e)}>
                <div className="mt-6 flex w-full items-center bg-white shadow-md py-[6px] rounded-lg">
                    <input type="text" name="search"
                        className="py-3 w-3/4 text-base
                            placeholder:text-[#9EA0A5] rounded-[6px] 
                            pl-5 focus:outline-none bg-white"
                        placeholder="Search by name"
                        autocomplete="off"
                        onChange={(e) => { setKey(e.target.value) }}

                    />
                    <div className="mr-3 text-2xl">
                        <CiSearch color="gray" />
                    </div>
                    <div className="">
                        <div className="dropdown border-l border-[#9EA0A5] mr-2 rounded-sm">
                            <label tabIndex={0} className="text-base btn btn-ghost rounded-none text-[#9EA0A5] normal-case">
                                Sort
                            </label>
                            <ul tabIndex={0} className="p-2 mt-3 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                <li onClick={() => setSort('flex-wrap')} className='hover:cursor-pointer'>Terbaru</li>
                                <li onClick={() => setSort('flex-wrap-reverse')} className='hover:cursor-pointer'>Terlama</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="normal-case btn btn-active bg-primary border-primary text-white px-[34px] rounded-md text-base">
                            Search
                        </button>
                    </div>
                </div>
            </form>

            <div className="mt-10">
                <ListRecipes sort={sort} />
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex space-x-4">
                    <div
                        className="text-[#DDDDDE] text-lg p-4 bg-white w-fit font-semibold rounded shadow-md  hover:bg-primary hover:text-white"
                        onClick={() => dispatch(prevPage())}
                    >
                        <IoIosArrowBack size={22} strokeWidth={2} />
                    </div>

                    <div className="px-6 py-4 text-lg font-semibold text-white rounded shadow-md w-fit bg-primary">
                        1
                    </div>
                    <div onClick={() => dispatch(nextPage())} className="text-[#DDDDDE] text-lg px-6 py-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white">
                        2
                    </div>
                    <div className="text-[#DDDDDE] text-lg px-6 py-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white">
                        3
                    </div>
                    <div className="text-[#DDDDDE] text-lg px-6 py-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white">
                        4
                    </div>
                    <div className="text-[#DDDDDE] text-lg px-6 py-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white">
                        5
                    </div>
                    <div className="text-[#DDDDDE] text-lg px-6 py-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white">
                        6
                    </div>

                    <div
                        className="text-[#DDDDDE] text-lg p-4 bg-white w-fit font-semibold rounded shadow-md hover:bg-primary hover:text-white"
                        onClick={() => dispatch(nextPage())}
                    >
                        <IoIosArrowForward size={22} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes