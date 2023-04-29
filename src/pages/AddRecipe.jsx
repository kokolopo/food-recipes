import Navbar from '../components/Navbar'
import { CiImageOn } from "react-icons/ci";
import { AiFillCloseSquare } from "react-icons/ai";
import Footers from '../components/Footer';
import React, { useRef, useState } from 'react';

const AddRecipe = () => {
    const fileInputRef = useRef(null);
    const [hidden, setHidden] = useState("");
    const [image, setImage] = useState('');
    // const [imageSrc, setImageSrc] = useState(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
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
                    action="/" method="post"
                    className='px-10 sm:px-44 mt-10 flex flex-col space-y-7 sm:w-full mb-10 '
                >

                    <div className='rounded-md sm:w-full h-[50vh] bg-[#F6F5F4] flex flex-col justify-center items-center hover:cursor-pointer'>
                        {
                            image &&
                            <div className="bg-cover bg-no-repeat h-full w-full flex items-center justify-center rounded-md"
                                style={{ backgroundImage: image }}
                            >
                                <div className='bg-red-400 px-2 py-2 w-fit rounded-md'>
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
                    />

                    <textarea placeholder="Ingredients" className="textarea textarea-bordered h-[40vh] max-w-full bg-[#F6F5F4]" ></textarea>

                    <input type="text" placeholder="Video"
                        className="input input-bordered input-sm  max-w-full bg-[#F6F5F4]"
                    />

                    <div className='items-center justify-center flex'>
                        <button className='btn btn-sm bg-primary border-primary text-white px-32 font-medium normal-case'>Post</button>
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