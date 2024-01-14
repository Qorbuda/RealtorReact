import React from 'react';

import { Link } from 'react-router-dom';

import SocialMedia from '../../secondary/social-media/SocialMedia';

import './Footer.css';

function Footer() {
    return (
        <div className='d-flex flex-column align-items-center ts-footer-wrapper orange-background'>
            <div className='footer-menu-box'> 

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>About us</div>
                    <Link className='ts-footer-items white-font ts-footer-link' to='/our_team'>Our team</Link>
                    <div className='ts-footer-items white-font'>Real estate agency network "batumi-realtor"</div>
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>Social Media</div>
                    <div className='ts-footer-items white-font'>Follow us!</div>
                    <SocialMedia />
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>
                    <div className='ts-footer-items ts-footer-head-item white-font'>Contact</div>
                    <a className='ts-footer-items white-font ts-footer-link' href='https://goo.gl/maps/suxKciwfmetysGth6' target='_blank'>
                        Batumi Realtor LTD Batumi,<br /> str.26 of May, #68
                    </a>
                    <a className='ts-footer-items white-font ts-footer-link' href='tel:+995322422093' target='_blank'>(+995) 322 42 20 93</a>
                </div>

                <div className='d-flex flex-column align-items-start ts-footer-row'>

                    <div className='ts-footer-items ts-footer-head-item white-font'>Join us</div>
                    <a className='ts-footer-items white-font ts-footer-link' href='https://myvacancy.ge/' target='_blank'>Become agent</a>
                    <a className='ts-footer-items white-font ts-footer-link' href='/' target='_blank'>Franchise</a>
                    <Link className='ts-footer-items white-font ts-footer-link' to='/post_property'>Post property</Link>
                </div>

            </div>
            <div className='white-font ts-copyright'>Copyright © 2017 Batumi-Realtor ltd</div>
        </div>
    );
};

export default Footer;