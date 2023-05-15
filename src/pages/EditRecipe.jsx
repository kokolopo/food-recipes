import Navbar from '../components/Navbar'
import { CiImageOn } from "react-icons/ci";
import { AiFillCloseSquare } from "react-icons/ai";
import Footers from '../components/Footer';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail, updateRecipe } from '../slices/detailRecipeSlice';

const EditRecipe = () => {
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.detail)

    const fileInputRef = useRef(null);
    const [hidden, setHidden] = useState("");
    const [image, setImage] = useState(data.image_url);

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(data.title)
    const [ingredients, setIngredients] = useState(data.ingredients)
    const [video, setVideo] = useState(data.video_url)
    const navigate = useNavigate()

    console.log(data);

    useEffect(() => {
        dispatch(fetchDetail({ recipeId: id, jwtToken: token }))
        setHidden('')
        console.log(id);
    }, [dispatch])

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file)

        if (file && file.type.startsWith('image/')) {
            // Lakukan sesuatu dengan file gambar
            const reader = new FileReader();
            reader.onload = (e) => {
                // setImageSrc(e.target.result);
                setHidden("hidden")
                setImage(`url(${reader.result})`)
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const formData = new FormData();
        // formData.append('image', file);
        // formData.append('title', title);
        // formData.append('ingredients', ingredients);
        // formData.append('video_url', video);
        // formData.append('category_id', 1);

        dispatch(updateRecipe({
            recipeId: id, jwtToken: token, formData: {
                title: title,
                ingredients: ingredients,
                category_id: 1,
                image_url: data.image_url,
                video_url: video
            }
        }));
        alert('Berhasil Update Recipe')
        navigate('/profile')
    };

    if (loading) {
        return <div className='flex items-center justify-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            {/* screeen 1 */}
            <div className='w-screen h-screen pt-5'>
                {/* navabar */}
                <div className='mx-10'>
                    <Navbar />
                </div>

                {/* Form Input */}
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col px-10 mt-10 mb-10 sm:px-44 space-y-7 sm:w-full '
                >

                    <div className='rounded-md sm:w-full h-[50vh] bg-[#F6F5F4] flex flex-col justify-center items-center hover:cursor-pointer'>
                        {
                            image &&
                            <div className="flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-md"
                                style={{ backgroundImage: `url('${image}')` }}
                            >
                                <div className='px-2 py-2 bg-red-400 rounded-md w-fit'>
                                    <AiFillCloseSquare className='text-white' onClick={() => {
                                        setImage(null)
                                        setHidden("")
                                    }} />
                                </div>
                            </div>
                        }
                        <div className={hidden + " text-3xl flex flex-col justify-center items-center"}>
                            <CiImageOn onClick={handleImageClick} />
                            <span className='text-sm'>Add Photo</span>
                        </div>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <input type="text" placeholder="Title"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <textarea
                        onChange={(e) => setIngredients(e.target.value)}
                        value={ingredients}
                        placeholder="Ingredients"
                        className="textarea textarea-bordered h-[40vh] max-w-full bg-[#F6F5F4]" ></textarea>

                    <input
                        onChange={(e) => setVideo(e.target.value)}
                        type="text"
                        placeholder="Video"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"
                        value={video}
                    />

                    <div className='flex items-center justify-center'>
                        <button className='px-32 font-medium text-white normal-case btn btn-sm bg-primary border-primary'>Post</button>
                    </div>

                </form>

                <Footers />
            </div>

            {/* screen 2 */}
            <div className='w-screen h-[60vh] '>

            </div>
        </>
    )
}

export default EditRecipe