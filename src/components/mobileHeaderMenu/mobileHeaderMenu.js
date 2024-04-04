import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../secondary/localization/LanguageSwitcher'; 
import './mobile-header-style.css';
import PhoneCall from '../icons/PhoneCall.svg';
import EnvelopeSimple from '../icons/EnvelopeSimple.svg';
import Clock from '../icons/Clock.svg';
import Buildings from '../icons/Buildings.svg';
import SocialMedia from '../secondary/social-media/SocialMedia';
import { useEffect, useRef } from 'react';

const MobileHeaderMenu = ({handleMenuClose}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const textFolder = LanguageSwitcher().HomePage.Footer;
    const textFolderInfo = LanguageSwitcher().HomePage.Header;
    const backgroundRef = useRef(null);

    useEffect(() => {
        if(backgroundRef.current) {
            backgroundRef.current.style.height = `${document.body.scrollHeight}px`
        }
    }, []);


    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    return (
        <div className='background' onClick={handleMenuClose} ref={backgroundRef}>
            <div className="main-mobile-menu-box">
                <img src={process.env.PUBLIC_URL + '/mobile-menu-x.png'} className='x-position' onClick={handleMenuClose}/>
                <div className='contents-box'>
                    <button className={location.pathname === "/" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("") }}>{textFolder.home}</button>
                    <button className={location.pathname === "/about_us" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("about_us") }}>{textFolder.aboutUs}</button>
                    <button className={location.pathname === "/our_team" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("our_team") }}>{textFolder.ourTeam}</button>
                    <a className="menu-btn black-font" href="https://myvacancy.ge/" target="_blank">{textFolder.becomeAgent}</a>
                    {/* <button className={location.pathname === "/franchise" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("franchise") }}>{textFolder.Franchise}</button> */}
                    <button className={location.pathname === "/contact" ? "menu-btn menu-btn-active" : "menu-btn"} onClick={() => { setTab("contact") }}>{textFolder.Contact}</button>
                    <button className='orange-font' onClick={() => { setTab("post_property/general_info") }}>{textFolder.postProperty}<span className="orange-font "> +</span></button>
                    <a className='d-flex flex-row align-items-center gap-3' href='tel:+995322422093'>
                        <img src={PhoneCall} />
                        +995 577 374 230
                    </a>
                    <a className='d-flex flex-row align-items-center gap-3' href='mailto:info@batumi-realtor.com'>
                        <img src={EnvelopeSimple} />
                        info@batumi-realtor.com
                    </a>
                    <div className='d-flex flex-row align-items-center gap-3 white-font'>
                        <img src={Clock} />
                        10:00 at 18:00
                    </div>

                    <a className='d-flex flex-row align-items-center gap-3' href='/contact'>
                        <img src={Buildings} />
                        <span >{textFolderInfo.officeAddresses}</span>
                    </a>

                    <SocialMedia />

                </div>
            </div>
        </div>
        
    )
}

export default MobileHeaderMenu;