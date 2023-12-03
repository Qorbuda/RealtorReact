import LanguageSwitcher from '../../components/secondary/localization/LanguageSwitcher';
import './loginPage.css';

import React, { useState } from "react";

import BaseButton from '../../components/general/buttons/BaseButton';
// import ArrowLeft from '../../icons/ArrowLeft.svg';
import ArrowLeft from '../../components/icons/ArrowLeft.svg'





function FinishForgotPass() {

    var textFolder = LanguageSwitcher().LoginPage.finishForogotPassword;

    return (
        <div className="finish-forgot-bar">
            <div className='check-email-text-bar'>
                <div className='check-email'>{textFolder.CheckYourEmail}</div>
                <div className='send-password-reset'> total test</div>

            </div>

        </div>
    );
}


export default FinishForgotPass;