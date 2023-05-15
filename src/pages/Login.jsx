// import React, { useState } from 'react'
// import { ReactComponent as Mama } from '../assets/images/logo.svg';
// import { FiUser } from "react-icons/fi";
// import Textinput from '../components/Textinput';
import Auth from '../components/Layouts/Auth';
import FormLogin from '../components/Fragments/FormLogin';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Auth title={"login"}>
                <FormLogin />
            </Auth>
        </>
    )
}

export default Login



