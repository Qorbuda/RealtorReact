import React from 'react';

import { Link } from 'react-router-dom';

import SocialMedia from '../../secondary/social-media/SocialMedia';
import LanguageSwitcher from '../../secondary/localization/LanguageSwitcher';

import './Footer.css';

function Footer() {
    var textFolder = LanguageSwitcher().HomePage.footerText;

    return (
        <div className='d-flex flex-column align-items-center ts-footer-wrapper orange-background'>
            <div className='footer-menu-box'>

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>{textFolder.aboutUs}</div>
                    <Link className='ts-footer-items white-font ts-footer-link' to='/our_team'>{textFolder.ourTeam}</Link>
                    <div className='ts-footer-items white-font'>{textFolder.batumiRealtor}</div>
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>{textFolder.socialMedia}</div>
                    <div className='ts-footer-items white-font'>{textFolder.followUs}</div>
                    <SocialMedia />
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>{textFolder.contact}</div>
                    <a className='ts-footer-items white-font ts-footer-link' href='https://goo.gl/maps/suxKciwfmetysGth6' target='_blank'>
                        {textFolder.batumiLTD}<br /> {textFolder.batumiSTR}
                    </a>
                    <a className='ts-footer-items white-font ts-footer-link' href='tel:+995322422093' target='_blank'>(+995) 322 42 20 93</a>
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>

                    <div className='ts-footer-items ts-footer-head-item white-font'>{textFolder.joinUs}</div>
                    <a className='ts-footer-items white-font ts-footer-link' href='https://myvacancy.ge/' target='_blank'>{textFolder.becomeAgent}</a>
                    <a className='ts-footer-items white-font ts-footer-link' href='/' target='_blank'>{textFolder.franchise}</a>
                    <Link className='ts-footer-items white-font ts-footer-link' to='/post_property'>{textFolder.postProperty}</Link>
                </div>

            </div>
            <div className='white-font ts-copyright'>Copyright © 2017 Batumi-Realtor ltd</div>
        </div>
    );
};

export default Footer;