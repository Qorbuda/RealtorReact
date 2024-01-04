import LanguageSwitcher from '../../components/secondary/localization/LanguageSwitcher';
import './loginPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState } from "react";

import BaseButton from '../../components/general/buttons/BaseButton';
import axios from 'axios';
import { useAuth } from './AuthContext';



function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    var textFolder = LanguageSwitcher().LoginPage;
    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: textFolder.WrongUser,
        pass: textFolder.WrongPassword
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];
        const dataToSend = {
            UserName: uname.value,
            Password: pass.value,
        };
        axios.post('https://api.myflats.ge/api/Authorization/authenticate', dataToSend)
        .then(response => {
            if (response.data.token){
                setIsSubmitted(true);
                login(response.data.token);

            }
        })
        .catch(error => {
            setErrorMessages("incorrect email or password")
            console.log(error);
        });
    };

    // Generate JSX code for error message
    // const renderErrorMessage = () =>
    //     errorMessages != "" && (
    //         <div className="error-text-login-page">{errorMessages.message}</div>
    //     );
    // JSX code for login form
    const renderForm = (
        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <div >
                    <input className="input-from-login-page" id='input-from-login-uname' type="text" name="uname" placeholder='Email' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div >
                    <input className="input-from-login-page" id='input-from-login-pass' type="password" name="pass" placeholder='Password' required />
                    {errorMessages != "" && 
            <div className="error-text-login-page">{errorMessages}</div>}
                </div>
                <div>
                    <div className='forget-password-link'>
                        <a className='forgot-password' href='/forgotPass'>{textFolder.ForgotYourPassword}</a>
                    </div>
                </div>
                <div className="button-container">
                    <BaseButton text={textFolder.Login} call_method={() => { }} />

                </div>
            </form>
        </div>
    );

    return (
        <div className="login-page">
            <div className="login-form">
                <div id="login-text">{textFolder.LogInToYourAccount}</div>
                {isSubmitted ? setTab("user_property") : renderForm}
                {isSubmitted ? window.location.reload(true) : ""}
            </div>
        </div>
    );
}


export default LoginPage;