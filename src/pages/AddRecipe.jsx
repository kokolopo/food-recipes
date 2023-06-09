import Navbar from '../components/Navbar'
import { CiImageOn } from "react-icons/ci";
import { AiFillCloseSquare } from "react-icons/ai";
import Footers from '../components/Footer';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AddRecipe = () => {
    const fileInputRef = useRef(null);
    const [hidden, setHidden] = useState("");
    const [image, setImage] = useState('');

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null)
    const [ingredients, setIngredients] = useState(null)
    const [video, setVideo] = useState(null)

    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])


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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('video_url', video);
        formData.append('category_id', 1);

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Ganti dengan token Anda
            },
            withCredentials: true
        };
        console.log(localStorage.getItem('token'));

        axios.post('http://localhost:4000/recipes', formData, config)
            .then(response => {
                console.log(response);
                alert("Berhasil Tambah Data")
                navigate("/profile")
            })
            .catch(error => {
                console.log(error);
            });
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
                    onSubmit={e => handleSubmit(e)}
                    className='flex flex-col px-10 mt-10 mb-10 sm:px-44 space-y-7 sm:w-full '
                >

                    <div className='rounded-md sm:w-full h-[50vh] bg-[#F6F5F4] flex flex-col justify-center items-center hover:cursor-pointer'>
                        {
                            image &&
                            <div className="flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-md"
                                style={{ backgroundImage: image }}
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
                    />

                    <textarea
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Ingredients"
                        className="textarea textarea-bordered h-[40vh] max-w-full bg-[#F6F5F4]" ></textarea>

                    <input
                        onChange={(e) => setVideo(e.target.value)}
                        type="text"
                        placeholder="Video"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"

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

export default AddRecipe