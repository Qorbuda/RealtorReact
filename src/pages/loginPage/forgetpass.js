import LanguageSwitcher from '../../components/secondary/localization/LanguageSwitcher';
import './loginPage.css';

import React, { useState } from "react";

import BaseButton from '../../components/general/buttons/BaseButton';
// import ArrowLeft from '../../icons/ArrowLeft.svg';
import ArrowLeft from '../../components/icons/ArrowLeft.svg'




function ForgetPass() {

    var textFolder = LanguageSwitcher().LoginPage;

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: textFolder.WrongUser,
        pass: textFolder.WrongPassword
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
                setIsSubmitted(true);
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
            document.getElementById("input-from-forgot-uname").style.borderColor = "#FF6174"

        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error-text-login-page">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <div >
                    <input className="input-from-forgot-page" id='input-from-forgot-uname' type="text" name="uname" placeholder='Email' required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="send-button-container">
                    <BaseButton text={textFolder.ForgotPassword.Send} call_method={() => { console.log("input, inputController") }} />

                </div>
            </form>
        </div>
    );

    return (
        <div className="login-page">
            <div className="login-form">
                <div id='forgot-text-bar'>
                    <div id="forgot-text">{textFolder.ForgotPassword.ForgotPassText}</div>
                    <div id="enter-email-text">{textFolder.ForgotPassword.EnterEmailText}</div>
                </div>
                {isSubmitted ? <div className='finish-forgot-password-text'>{textFolder.finishForogotPassword.CheckYourEmail}</div> : renderForm}
                <div id='back-to-login'>
                    <a id='icon-back-log' href='/logIn'>
                            <img  src={ArrowLeft} /> 
                            {textFolder.ForgotPassword.BackLog}
                    </a>
                </div>
            </div>
        </div>
    );
}


export default ForgetPass;