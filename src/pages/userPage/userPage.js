import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import GreenActivIcon from "../../components/icons/GreenActivIcon.svg"
import LogOutBtnIcon from "../../components/icons/logOutBtnIcon.svg"
import AddAgent from "../../components/icons/AddAgent.svg"
import subtractAgent from "../../components/icons/subtractAgent.svg"
import BtnPlusIcon from "../../components/icons/BtnPlusIcon.svg"
import ArrowDown from "../../components/icons/ArrowDown.svg"
import SearchBarHome from "../../components/homePage/searchBarHome";
import ApartmentBoxFromAgent from "./apartmentBoxFromAgent";
import sendMessageLoginUsers from "../../contactMessage/sendMessageLoginUsers";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import SearchFullInfo from "../../components/homePage/searchFullInfo";
import PropertyCardAgents from "../../components/homePage/propertyCardAgents";

// or
import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import PopapHistoryButton from "./PopapHistoryButton";
import PopapDeleteButton from "./popapDeleteButton";
import PopupRestoreButton from "./popapRestoreButton";



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


    const [isActiveDeleted, setIsActiveDeleted] = useState(false);
    const [isActiveAll, setIsActiveAll] = useState(true);
    const [isActiveMy, setIsActiveMy] = useState(false);
    const [isActiveAgents, setIsActiveAgents] = useState(false);

    useEffect(() => {
        showAllItems()
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
    
    const [popupRestoreOpen, setPopupRestoreOpen] = useState(false);
    const [popupRestoreInfo, setPopupRestoreInfo] = useState("");



    return (
        user != null ? <div className="User-page-full-div align-items-center" >
            <PopapHistoryButton open={popupHistoriOpen} onClose={() => setPopupHistoriOpen(false)} historyFullInffoArr={popupHistoryInfo} />
            <PopapDeleteButton open={popupDeleteOpen} onClose={() => setPopupDeleteOpen(false)} historyFullInffoArr={popupDeleteInfo} />
            <PopupRestoreButton open={popupRestoreOpen} onClose={() => setPopupRestoreOpen(false)} historyFullInffoArr={popupRestoreInfo} />

            <div className="User-page-agent-info">
                <div className="User-page-agent-title-and-image">
                    <img className='User-page-agent-image' src={`https://api.myflats.ge/api/image/${user.img}`} alt="Image" />
                    <div className="User-page-agent-title-div">
                        <div className="User-page-agent-title">
                            <p className="User-page-agent-name">{user.fullname}</p>
                            <div className="User-page-agent-name-icon-div">
                                <img className='User-page-agent-name-icon' src={GreenActivIcon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="User-page-agent-info-burron-div">
                    {user?.id == 62 ? <button className="User-page-log-out-buttton-full-div" onClick={() => { setTab("add_agent"); }}>
                        <img className='User-page-log-out-buttton-icon' src={AddAgent} />
                        <p className="User-page-log-out-button-text">{textFolder.addAgent}</p>
                    </button> : ''}
                    
                    {user?.id == 62 ? <button className="User-page-log-out-buttton-full-div" onClick={() => { setTab("delete_agent"); }}>
                        <img className='User-page-log-out-buttton-icon' src={subtractAgent} />
                        <p className="User-page-log-out-button-text">{textFolder.deleteAgent}</p>
                    </button> : ''}

                    <button className="User-page-log-out-buttton-full-div" onClick={() => { logout(); setTab(""); window.location.reload(); }}>
                        <img className='User-page-log-out-buttton-icon' src={LogOutBtnIcon} />
                        <p className="User-page-log-out-button-text">{textFolder.logOut}</p>
                    </button>

                </div>
            </div>
            <div className="User-page-search-sistem-full-div">
                <div className="User-page-search-sistem-properti-status-div">
                    <div className="User-page-search-sistem-properti-all-or-my">
                        <button className={`${isActiveAll ? 'active_tab_button' : 'not_active_tab_button'}`} onClick={showAllItems}>
                            <p className={`${isActiveAll ? 'active_tab_text' : 'not_active_tab_text'}`}>{textFolder.allProperties}</p>
                        </button>
                        <button className={`${isActiveMy ? 'active_tab_button' : 'not_active_tab_button'}`} onClick={showMyItems}>
                            <p className={`${isActiveMy ? 'active_tab_text' : 'not_active_tab_text'}`}>{textFolder.myProperties}</p>
                        </button>

                        <button className={`${isActiveDeleted ? 'active_tab_button' : 'not_active_tab_button'}`} onClick={ShowDeletedItems}>
                            <p className={`${isActiveDeleted ? 'active_tab_text' : 'not_active_tab_text'}`}>{textFolder.deletedProperties}</p>
                        </button>

                        {/* <button className={`${isActiveAgents ? 'active_tab_button' : 'not_active_tab_button'}`} onClick={showAgentList}>
                            <p className={`${isActiveAgents ? 'active_tab_text' : 'not_active_tab_text'}`}>{textFolder.agentList}</p>
                        </button> */}

                    </div>
                    <button className="User-page-search-sistem-add-new-btn" onClick={() => { setTab("post_property/general_info") }}>
                        <div className="User-page-search-sistem-add-new-info">
                            <p className="User-page-search-sistem-add-new-info-title">{textFolder.addNew}</p>
                            <img className="User-page-search-sistem-add-new-info-icon" src={BtnPlusIcon}></img>
                        </div>
                    </button>
                </div>
                {isActiveAgents==false ? <SearchBarHome fromHome={false} setItems={setpropertiesFromUser} clickCount={setClickCount} /> : ""}
            </div>

            {isActiveAgents==false ? <div className='ts-properties-section d-flex flex-row flex-wrap align-items-start' style={{ gap: "24px", marginBottom: "48px" }}>
                {propertiesFromUser.map((property, index) => (
                    // <ApartmentBoxFromAgent apartmentInfo={property} key={index} onClickHistoryBtn={showHistoryPopap} onClickDeleteBtn={showDeletePopap} />
                    <PropertyCardAgents apartmentInfo={property} key={index} onClickHistoryBtn={showHistoryPopap} onClickDeleteBtn={showDeletePopap}  deletedItems={isActiveDeleted} onCklickRestore={showRestorePopap}/>
                ))}
            </div> : ""}

            {isActiveAgents==false ? <button className="User-pahe-show-mor-button" onClick={userPageShowMorBtnClick} >
                <p className='User-pahe-show-mor-button-text'> {textFolder.showMore}</p>
                <img className='User-pahe-show-mor-button-Arrow' src={ArrowDown} />
            </button> : 
            ("jemaaaaaaaaal am frchxilshi unda iyos agentebis sia")
            
            }
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
    function showRestorePopap(status, info){
        setPopupRestoreInfo(info)
        setPopupRestoreOpen(status)
    }


    async function ShowDeletedItems() {
        changePageShowStatus();
        setIsActiveDeleted(true);
        var filter = SearchFullInfo()
        filter.isNotActive = true;
        filter.myItems = false;
        filter.userId = user?.id;
        var props = await sendMessageLoginUsers(1, filter);
        setpropertiesFromUser([]);
        setpropertiesFromUser(props);
        setClickCount(2);
    }

    async function showMyItems() {
        changePageShowStatus();

        setIsActiveMy(true);
        var filter = SearchFullInfo()
        filter.myItems = true;
        filter.userId = user?.id;
        filter.isNotActive = false;
        setClickCount(1);
        var props = await sendMessageLoginUsers(1, filter);
        setpropertiesFromUser([]);
        setpropertiesFromUser(props);
        setClickCount(2);
    }

    async function showAllItems() {
        changePageShowStatus();
        setIsActiveAll(true);


        var filter = SearchFullInfo()
        filter.myItems = false;
        filter.isNotActive = false;
        var props = await sendMessageLoginUsers(1, filter);
        setpropertiesFromUser([]);
        setpropertiesFromUser(props);
        setClickCount(2);
    }


    async function showAgentList() {
        changePageShowStatus();
        setIsActiveAgents(true);

        var filter = SearchFullInfo()
        filter.myItems = false;
        filter.isNotActive = false;
        var props = await sendMessageLoginUsers(clickCount, filter);
        setpropertiesFromUser([]);
        setpropertiesFromUser(props);
        setClickCount(2);
    }

    async function userPageShowMorBtnClick() {
        var filter = SearchFullInfo()
        
        var props = await sendMessageLoginUsers(clickCount != 1 ? clickCount : 2, filter);
        setClickCount(prevCount => prevCount + 1);
        const result = propertiesFromUser.concat(props);
        setpropertiesFromUser(result);
    }
    
    function logout() {
        localStorage.removeItem('token');
    }

    function changePageShowStatus() {
        setIsActiveAll(false);
        setIsActiveMy(false);
        setIsActiveDeleted(false);
        setIsActiveAgents(false);
    }
}


export default UserPage;
