import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slices/recipesSlice';

const ListRecipes = ({ sort }) => {
    const dispatch = useDispatch()
    const { data, loading, error, currentPage, keyword } = useSelector(state => state.recipes)

    useEffect(() => {
        dispatch(fetchData({ page: currentPage, title: keyword }))
        console.log(data);
    }, [currentPage, dispatch, keyword])


    if (loading) {
        return <div className='flex items-center justify-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {/* <div className="grid grid-cols-2 px-5 pb-12 mt-3 sm:grid-cols-3 sm:px-0 gap-y-5">
                {data.map(recipe => (
                    <Link to={`/detail/${recipe.id}`} className='relative sm:w-[265px] w-40 rounded-md' key={recipe.id}>
                        <img src={recipe.image_url} alt="gambar" />
                        <div className='absolute inset-y-[80%] inset-x-3'>
                            <p className='font-semibold text-black'>{recipe.title}</p>
                        </div>
                    </Link>
                ))}
            </div> */}

            <div className={`flex ${sort} gap-5 justify-evenly`}>
                {data.map(recipe => (
                    <Link to={`/detail/${recipe.id}`} className='relative sm:w-[265px] w-40 rounded-md' key={recipe.id}>
                        <img src={recipe.image_url} alt="gambar" />
                        <div className='absolute inset-y-[80%] inset-x-3'>
                            <p className='font-semibold text-black'>{recipe.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ListRecipes