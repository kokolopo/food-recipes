import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputField from "../Elements/Input"
import PrimaryButton from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"

const FormRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // const [errors, serErrors] = useState('')
    // const [hidden, setHidden] = useState('')

    const navigate = useNavigate()

    const onSubmitHandle = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:4000/users', {
                name: name,
                email: email,
                phone: phone,
                password: password,
                confPassword: confirmPassword
            })
            console.log(response);

            navigate('/login')
        } catch (error) {
            // serErrors(error.response.data)
            console.log(error);
        }

    }

    return (
        <>
            {/* <div className={`alert alert-error shadow-lg absolute top-2 w-auto ${hidden}`} onClick={() => setHidden('hidden')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errors}</span>
                </div>
            </div> */}

            <form className='w-[300px] flex flex-col gap-4' onSubmit={e => onSubmitHandle(e)}>
                <InputField
                    title={"Name"}
                    type={"text"}
                    name={"text"}
                    placeholder={"Your name"}
                    value={name}
                    setter={setName}
                />

                <InputField
                    title={"Email Address"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter email address"}
                    value={email}
                    setter={setEmail}
                />

                <InputField
                    title={"Phone Number"}
                    type={"text"}
                    name={"phone"}
                    placeholder={"08xxxxxxxxx"}
                    value={phone}
                    setter={setPhone}
                />

                <InputField
                    title={"Create Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"********"}
                    value={password}
                    setter={setPassword}
                />

                <InputField
                    title={"Confirm Password"}
                    type={"password"}
                    name={"confirmPassword"}
                    placeholder={"********"}
                    value={confirmPassword}
                    setter={setConfirmPassword}
                />

                <Checkbox>I agree to terms & conditions</Checkbox>

                <PrimaryButton classname={"w-full"}>Log In</PrimaryButton>
            </form>
        </>
    )
}
export default FormRegister