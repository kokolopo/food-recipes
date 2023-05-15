import { useState } from "react"
import PrimaryButton from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"
import InputField from "../Elements/Input"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const FormLogin = () => {
    // const [form, setForm] = useState({
    //     email: '',
    //     password: '',
    // })//e => setForm({ ...form, email: e.target.value })
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, serErrors] = useState(null)
    const [hidden, setHidden] = useState('')


    const onSubmitHandle = async (e) => {
        e.preventDefault()

        console.log(`email: ${email}, password: ${password}`);
        setHidden('')
        try {
            const response = await axios.post('http://localhost:4000/login', {
                email: email,
                password: password,
            }, { withCredentials: true })
            console.log(response);
            setHidden('hidden')
            localStorage.setItem('token', response.data.data.accessToken)
            // document.cookie = `refreshToken=${response.data.data.accessToken}`

            alert('registration successfull')
            navigate('/')
        } catch (error) {
            if (email == '' || password == '') {
                serErrors(error.response.data.error)
            }
            console.log(error.response.data);
        }

    }

    const onClickAlert = () => {
        setHidden('hidden')
        serErrors(null)
    }

    return (
        <>
            {
                errors !== null ?
                    <div className={`alert alert-error shadow-lg absolute top-2 w-auto ${hidden}`} onClick={onClickAlert}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{errors}</span>
                        </div>
                    </div> : ''
            }

            <form className='w-[300px] flex flex-col gap-4' onSubmit={e => onSubmitHandle(e)}>
                <InputField
                    title={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"example@mail.com"}
                    value={email}
                    setter={setEmail}
                />

                <InputField
                    title={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"******"}
                    value={password}
                    setter={setPassword}
                />

                <Checkbox>I agree to terms & conditions</Checkbox>

                <PrimaryButton classname={"w-full"}>Log In</PrimaryButton>
            </form>

        </>
    )
}

export default FormLogin