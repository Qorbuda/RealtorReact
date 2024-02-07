import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LocaleSelection from '../../secondary/localization/LocaleSelector';
import axios from 'axios';

import Logo from '../../secondary/logo/Logo';

import './menu.css';
import LanguageSwitcher from '../../secondary/localization/LanguageSwitcher';
import { InvalidTokenError, jwtDecode } from 'jwt-decode';

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);
    var textFolder = LanguageSwitcher().HomePage.Footer;


    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const [currency, setCurrency] = useState("1 $ = 2.672 GEL");
    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-currency`)
            .then(response => {
                const data = response.data;
                setCurrency(`1 $ = ${data}`);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div className='d-flex flex-row justify-content-between align-items-center gap-3 menu-wrapper menu-main'>
            <button  onClick={() => {user?.id ? setTab("user_property") :  setTab("")}}>
                <Logo />
            </button>
            <div className='d-flex flex-row align-items-start gap-3'>
                <button className={location.pathname === "/" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { user?.id ? setTab("user_property") :  setTab("") }}>{textFolder.home}</button>
                <button className={location.pathname === "/about_us" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("about_us") }}>{textFolder.aboutUs}</button>
                <button className={location.pathname === "/our_team" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("our_team") }}>{textFolder.ourTeam}</button>
                <a className="menu-btn black-font" href="https://myvacancy.ge/" target="_blank">{textFolder.becomeAgent}</a>
                {/* <button className={location.pathname === "/franchise" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("franchise") }}>{textFolder.Franchise}</button> */}
                <button className={location.pathname === "/contact" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("contact") }}>{textFolder.Contact}</button>
                <button className='orange-font' onClick={() => { setTab("post_property/general_info") }}>{textFolder.postProperty}<span className="orange-font "> +</span></button>
            </div>
            <div className='manu-class-valut-and-language-full-div'>
                <p className='manu-class-valut-and-language-text'>{currency}</p>
                <LocaleSelection />
            </div>
        </div>
    );
}




export default Menu;