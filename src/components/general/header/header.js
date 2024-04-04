import React, { useState, useEffect } from "react";

import SocialMedia from '../../secondary/social-media/SocialMedia';
import Menu from '../menu/Menu';
import { InvalidTokenError, jwtDecode } from 'jwt-decode'; 

import './header.css';

import PhoneCall from '../../icons/PhoneCall.svg';
import Account from '../../icons/Account.svg';
import Buildings from '../../icons/Buildings.svg';
import Clock from '../../icons/Clock.svg';

import EnvelopeSimple from '../../icons/EnvelopeSimple.svg';
import LanguageSwitcher from '../../secondary/localization/LanguageSwitcher';
import { height, width } from "@mui/system";
import MobileHeaderMenu from "../../mobileHeaderMenu/mobileHeaderMenu";

function Header() {
    const [user, setUser] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    }
    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    }


    const textFolder = LanguageSwitcher().HomePage.Header;

    return (
        <div className='ts-header'>
            {mobileMenuOpen && <MobileHeaderMenu handleMenuClose={handleMobileMenuClose}/>}
            <div className='d-flex flex-column justify-content-center align-items-center w-100 ts-header-wrapper orange-background'>
                <div className='d-flex flex-row justify-content-between align-items-start ts-header-menu-wrapper'>
                    <div className="ts-mobile-email">
                        <a className='d-flex flex-row align-items-center gap-3' href='tel:+995322422093'>
                            <img src={PhoneCall} />
                            +995 577 374 230
                        </a>

                        <a className='d-flex flex-row align-items-center gap-3' href='mailto:info@batumi-realtor.com'>
                            <img src={EnvelopeSimple} />
                            info@batumi-realtor.com
                        </a>
                    </div>
                    

                    <div className='d-flex flex-row align-items-center gap-3 white-font header-desktop-info'>
                        <img src={Clock} />
                        10:00 at 18:00
                    </div>

                    <a className='d-flex flex-row align-items-center gap-3 header-desktop-info' href='/contact'>
                        <img src={Buildings} />
                        {textFolder.officeAddresses}
                    </a>

                    <div className="header-desktop-info">
                        <SocialMedia />
                    </div>
                    
                    {
                    user == null ?
                        <a className='d-flex flex-row align-items-center gap-3 white-font login-btn' href='/logIn'>
                            <img src={Account} />
                            <div className="header-desktop-info">
                                {textFolder.logIn}
                            </div>
                            
                        </a> : 

                        <a className='d-flex flex-row align-items-center gap-3 white-font login-btn' href='/user_property'>
                            <img src={`https://api.myflats.ge/api/image/${user.img}`} style = {{width: "50px", height: "50px", borderRadius: "50%"}}/>
                            {user.fullname}
                        </a>
                    }
                    
                    {/* <button className={location.pathname === "/contact" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => {setTab("login")}}>Contact</button> */}

                    <div className="mobile-content">
                        <img src={process.env.PUBLIC_URL + '/header-burger.png'} onClick={handleMobileMenuOpen}/>
                    </div>

                </div>

            </div>
            <div >

            </div>
            <Menu/>

        </div>

    );
}

export default Header;