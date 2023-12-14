import React, { useState, useEffect } from "react";

import GreenActivIcon from "../../components/icons/GreenActivIcon.svg"
import LogOutBtnIcon from "../../components/icons/logOutBtnIcon.svg"
import BtnPlusIcon from "../../components/icons/BtnPlusIcon.svg"
import ArrowDown from "../../components/icons/ArrowDown.svg"
import SearchBarHome from "../../components/homePage/searchBarHome";
import ApartmentBoxFromAgent from "./apartmentBoxFromAgent";
import sendMessageLoginUsers from "../../contactMessage/sendMessageLoginUsers";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import { useNavigate, useLocation } from 'react-router-dom';
import SearchFullInfo from "../../components/homePage/searchFullInfo";

// or
import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import PopapHistoryButton from "./PopapHistoryButton";
import PopapDeleteButton from "./popapDeleteButton";


import "./userPage.css";

var testIndo = {
    "agentName": 'Tamunda Tonayan',
    "agentimage": ''
}

function UserPage() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);

        }
    }, []);
    var textFolder = LanguageSwitcher().UserPage;


    const [propertiesFromUser, setpropertiesFromUser] = useState([]);
    const [clickCount, setClickCount] = useState(1);



    useEffect(() => {
        userPageShowMorBtnClick()
    }, [])

    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };


    const [popupHistoriOpen, setPopupHistoriOpen] = useState(false);
    const [popupHistoryInfo, setPopupHistoryInfo] = useState("");

    const [popupDeleteOpen, setPopupDeleteOpen] = useState(false);
    const [popupDeleteInfo, setPopupDeleteInfo] = useState("");



    return (
        user != null ? <div className="User-page-full-div align-items-center" >
            <PopapHistoryButton open={popupHistoriOpen} onClose={() => setPopupHistoriOpen(false)} historyFullInffoArr={popupHistoryInfo} />
            <PopapDeleteButton open={popupDeleteOpen} onClose={() => setPopupDeleteOpen(false)} historyFullInffoArr={popupDeleteInfo} />

            <div className="User-page-agent-info">
                <div className="User-page-agent-title-and-image">
                    <img className='User-page-agent-image' src={`http://167.86.75.34/api/image/${user.img}`} alt="Image"/>
                    <div className="User-page-agent-title-div">
                        <div className="User-page-agent-title">
                            <p className="User-page-agent-name">{user.fullname}</p>
                            <div className="User-page-agent-name-icon-div">
                                <img className='User-page-agent-name-icon' src={GreenActivIcon} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="User-page-log-out-buttton-full-div" onClick={() => { logout(); setTab(""); window.location.reload(); }}>
                    <img className='User-page-log-out-buttton-icon' src={LogOutBtnIcon} />
                    <p className="User-page-log-out-button-text">{textFolder.logOut}</p>
                </button>
            </div>
            <div className="User-page-search-sistem-full-div">
                <div className="User-page-search-sistem-properti-status-div">
                    <div className="User-page-search-sistem-properti-all-or-my">
                        <button className="User-page-search-sistem-properti-all-button">
                            <p className="User-page-search-sistem-properti-all-btn-text">{textFolder.allProperties}</p>
                        </button>
                        <button className="User-page-search-sistem-properti-my-button">
                            <p className="User-page-search-sistem-properti-my-btn-text">{textFolder.myProperties}</p>
                        </button>
                    </div>
                    <button className="User-page-search-sistem-add-new-btn" onClick={() => { setTab("post_property/general_info") }}>
                        <div className="User-page-search-sistem-add-new-info">
                            <p className="User-page-search-sistem-add-new-info-title">{textFolder.addNew}</p>
                            <img className="User-page-search-sistem-add-new-info-icon" src={BtnPlusIcon}></img>
                        </div>
                    </button>
                </div>
                <SearchBarHome fromHome={false} setItems={setpropertiesFromUser} clickCount={setClickCount} />
            </div>

            <div className="User-page-apartment-boxs">
                {propertiesFromUser.map((property, index) => (
                    <ApartmentBoxFromAgent apartmentInfo={property} key={index} onClickHistoryBtn={showHistoryPopap} onClickDeleteBtn={showDeletePopap} />
                ))}
            </div>

            <button className="User-pahe-show-mor-button" onClick={userPageShowMorBtnClick} >
                <p className='User-pahe-show-mor-button-text'> {textFolder.showMore}</p>
                <img className='User-pahe-show-mor-button-Arrow' src={ArrowDown} />
            </button>
        </div> : null

    );

    function showHistoryPopap(status, info) {
        setPopupHistoryInfo(info)
        setPopupHistoriOpen(status)
    }

    function showDeletePopap(status, info) {
        setPopupDeleteInfo(info)
        setPopupDeleteOpen(status)
    }



    async function userPageShowMorBtnClick() {
        var filter = SearchFullInfo()
        var props = await sendMessageLoginUsers(clickCount, filter);
        setClickCount(prevCount => prevCount + 1);
        const result = propertiesFromUser.concat(props);
        setpropertiesFromUser(result);
    }
    function logout() {
        localStorage.removeItem('token');
    }
}


export default UserPage;