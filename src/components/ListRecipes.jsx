import React, { useEffect, useState } from 'react'
import gambar1 from '../assets/images/populer1.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ListRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        axios.get(`http://localhost:4000/recipes?perPage=6&page=1`, { headers })
            .then(response => setRecipes(response.data.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className=" grid grid-cols-2 sm:grid-cols-3 sm:px-0 px-5 gap-y-5 mt-3 pb-12">
                {recipes.map(recipe => (
                    <Link to={`/detail/${recipe.id}`} className='relative sm:w-[265px] w-40 rounded-md' key={recipe.id}>
                        <img src={gambar1} alt="gambar" />
                        <div className='absolute inset-y-[80%] inset-x-3'>
                            <p className='text-black font-semibold'>{recipe.title}</p>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default ListRecipes