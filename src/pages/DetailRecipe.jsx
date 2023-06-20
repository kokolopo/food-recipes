import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ayudia from '../assets/images/ayudia.png'
import { BiLike } from "react-icons/bi";
import { BsBookmark, BsFillPlayFill } from "react-icons/bs";
import Footers from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../slices/detailRecipeSlice';
import useComments from '../slices/useComments';

const DetailRecipe = () => {
    const { id } = useParams();
    // const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const headers = { Authorization: `Bearer ${token}` };

    //     axios.get(`http://localhost:4000/recipes/${id}`, { headers })
    //         .then((response) => {

    //             setRecipes(response.data.data)

    //         })
    //         .catch((error) => console.error(error))
    // }, [])
    // console.log(recipes.ingredients[0]);

    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.detail)

    const addComment = useComments(state => state.addComment)
    const comments = useComments(state => state.comments)
    const fetchComments = useComments(state => state.fetchComments)

    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(fetchDetail({ recipeId: id, jwtToken: token }))
        fetchComments(token)
    }, [dispatch, comments])


    const handleOnSubmit = (e) => {
        e.preventDefault()

        addComment(localStorage.getItem("token"), comment)
    }



    return (
        <>
            <div>
                {/* screeen 1 */}
                <div className='w-screen h-auto pt-5 sm:h-screen'>
                    {/* navabar */}
                    <div className='mx-10 '>
                        <Navbar />
                    </div>

                    {/* Recipe Photo */}
                    <div className='flex flex-col items-center justify-center gap-5 mt-16 '>
                        <div className='text-[#2E266F] text-3xl font-semibold'>
                            <h4>{data.title}</h4>

                        </div>
                        <div
                            className="bg-no-repeat w-[330px] h-[224px] sm:w-[460px] sm:h-[300px] bg-contain bg-center
                        flex items-end justify-end"
                            style={{ backgroundImage: `url("${data.image_url}")` }}
                        >
                            <div className='flex gap-3 mb-3 mr-3 sm:flex-row sm:mb-5 sm:mr-5'>
                                <div className='px-1 py-1 text-white rounded-md bg-primary hover:cursor-pointer'>
                                    <BsBookmark />
                                </div>
                                <div className='px-1 py-1 bg-white border rounded-md text-primary border-primary hover:cursor-pointer'>
                                    <BiLike />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* screeen 2 */}
                <div className='w-screen h-auto sm:h-screen sm:px-24'>
                    <div className='flex flex-col px-5 mb-5 space-y-5 sm:space-y-0 sm:space-x-32 sm:px-0 sm:py-5 sm:flex-row'>
                        {/* ingredients */}
                        <div className='w-64 text-black sm:w-1/2'>
                            <p className='mb-3 text-lg font-semibold'>Ingredients</p>
                            <ul className="list-disc list-inside">
                                {
                                    // data.ingredients.map((item, index) => (<li key={index}>{item}</li>))
                                }

                            </ul>
                        </div>

                        {/* steps */}
                        <div className='flex flex-col space-y-5 text-black sm:w-2/3'>
                            <p className='text-lg font-semibold'>Video Step</p>

                            {/* <div>
                                <button className='px-16 text-white btn btn-sm bg-primary border-primary'>
                                    <BsFillPlayFill />
                                </button>
                            </div>
                            <div>
                                <button className='px-16 text-white btn btn-sm bg-primary border-primary'>
                                    <BsFillPlayFill />
                                </button>
                            </div>
                            <div>
                                <button className='px-16 text-white btn btn-sm bg-primary border-primary'>
                                    <BsFillPlayFill />
                                </button>
                            </div>
                            <div>
                                <button className='px-16 text-white btn btn-sm bg-primary border-primary'>
                                    <BsFillPlayFill />
                                </button>
                            </div> */}
                            <div>
                                <iframe src={`${data.video_url}`} frameborder="0">

                                </iframe>
                            </div>
                        </div>
                    </div>
                    {/* commenet */}
                    <form onSubmit={handleOnSubmit} className='flex-col items-center justify-center hidden gap-3 px-5 sm:flex'>
                        <textarea className="textarea textarea-warning bg-white  sm:w-full h-[38vh]" placeholder="Comment :"
                            onChange={e => setComment(e.target.value)} value={comment} />
                        <button className='px-32 font-medium text-white normal-case btn btn-sm bg-primary border-primary'>Send</button>
                    </form>
                </div>

                {/* screeen 3 */}
                <div className='w-screen h-screen px-5 mb-32 sm:h-auto sm:px-24' >
                    <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center gap-3 sm:hidden'>
                        <textarea className="textarea textarea-warning bg-white w-full sm:w-full h-[38vh]" placeholder="Comment :"
                            onChange={e => setComment(e.target.value)} value={comment} />
                        <button className='px-32 font-medium text-white normal-case btn btn-sm bg-primary border-primary'>Send</button>
                    </form>

                    <div className='mt-10 text-black sm:mt-0'>
                        <p className='mb-3 text-lg font-semibold'>Comment</p>
                    </div>

                    {
                        comments.map((v, i) => (

                            <>
                                <div className='flex flex-row mb-3 space-x-3'>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full sm:w-12">
                                            <img src={ayudia} alt='gambar' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col font-semibold text-black'>
                                        <div className='text-sm'>{v.name}</div>
                                        <div>{v.comment}</div>
                                    </div>
                                </div>
                            </>

                        ))
                    }


                </div>
                <Footers />
            </div>
        </>
    )
}

export default DetailRecipe