import React, { useState, useEffect } from 'react'
import Share from "../../icons/Share.svg"
import ShareDun from "../../icons/ShareDun.svg"
import Contract from "../../icons/Contract.svg"
import Download from "../../icons/Download.svg"
import Copy from "../../icons/Copy.svg"
import EditAgent from "../../icons/EditAgent.svg"
import Edit from "../../icons/Edit.svg"
import Delete from "../../icons/Delete.svg"
import CallPhoneIcon from "../../icons/CallPhoneIcon.svg"
import ImageDownloadButton from "./imageDownloadButton"
import LanguageSwitcher from "../../secondary/localization/LanguageSwitcher"
import ApartmentEdit from "../../../pages/userPage/apartmentEdit";
import PropertyAddInfoSaver from "../../../pages/PropertyAddition/propertyAddInfoSaver";
import { useNavigate, useLocation } from 'react-router-dom';
import PopapEditDocument from '../../../pages/userPage/popapEditDocument'
import PopapShowPhonNumber from '../../../pages/userPage/popapShowPhonNumber'
import PopapEditAgent from '../../../pages/userPage/popapEditAgent'
import PopapDeleteButton from "../../../pages/userPage/popapDeleteButton";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';


import './headerStyle.css';

const OpenHomePageHeaderComponentAgents = (titleInfo) => {
    let imageLinksData = getImageLink(titleInfo.titleInfo.imageInfo.allImage)
    const [photoData, setPhotoData] = useState(imageLinksData);
    const [popupAddDocsOpen, setPopupAddDocsOpen] = useState(false);
    const [PopupShowNumber, setPopupShowNumber] = useState(false);
    const [popupChangeAgent, setPopupChangeAgent] = useState(false);
    const [popupDeleteOpen, setPopupDeleteOpen] = useState(false);
    const [popupDeleteInfo, setPopupDeleteInfo] = useState("");
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);
    let titleText = titleInfo.titleInfo.realtorInfo.dealType + titleInfo.titleInfo.realtorInfo.category + titleInfo.titleInfo.realtorInfo.city + titleInfo.titleInfo.realtorInfo.street


    console.log("titleInfo")
    console.log(titleInfo)
    console.log(titleInfo?.titleInfo?.realtorInfo?.ownerTel)
    var ownerNum = titleInfo?.titleInfo?.realtorInfo?.ownerTel
    titleInfo = titleInfo.titleInfo.headerInfo

    const [buttonText, setButtonText] = useState('Click me');

    const handleMouseEnter = () => {
        setButtonText('Button hovered'); // Set text to display when hovered
    };

    // Event handler for when the mouse leaves the button
    const handleMouseLeave = () => {
        setButtonText('Click me'); // Set back to initial text
    };

    var inputInfo = PropertyAddInfoSaver()
    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    var textFolder = LanguageSwitcher().openApartmentPage;

    function getImageLink(data) {
        let finallyData = []
        for (let i = 0; i < data.length; i++) {
            finallyData.push("https://api.myflats.ge/api/image/" + data[i])
        }
        return (finallyData)
    }

    const handleDownload = async () => {
        const downloadPromises = photoData.map(async (photoUrl, index) => {
            const response = await fetch(photoUrl);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `photo_${index + 1}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
        await Promise.all(downloadPromises);
    };



    const [currentLink, setCurrentLink] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const copyLink = async () => {
        try {
            const url = window.location.href;

            await navigator.clipboard.writeText(url);

            setCurrentLink(url);
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 250);
        } catch (error) {
            console.error('Error copying link to clipboard:', error);
        }
    };
    async function setEditProperty(isedit) {
        var input = await ApartmentEdit(titleInfo.id)
        Object.keys(inputInfo).forEach(key1 => {
            if (input[key1]) {
                Object.keys(inputInfo[key1]).forEach(key2 => {
                    if (input[key1][key2]) {
                        if (typeof input[key1][key2] === 'object' && input[key1][key2] !== null) {
                            Object.keys(inputInfo[key1][key2]).forEach(key3 => {
                                inputInfo[key1][key2][key3] = input[key1][key2][key3] !== null ? input[key1][key2][key3] : inputInfo[key1][key2][key3];
                            });
                        } else {
                            inputInfo[key1][key2] = input[key1][key2];
                        }
                    }
                });
            }
        });
        inputInfo.editStatus = isedit ? true : false;
        inputInfo.appartmentId = isedit ? titleInfo.id : null;
        inputInfo.property.checkBoxs = input.property.checkBoxs
        setTab(`post_property/general_info`)
        
    }
    return (
        <div className="header_container">
            <PopapEditDocument open={popupAddDocsOpen} onClose={() => setPopupAddDocsOpen(false)} itemId={titleInfo.id} />
            <PopapShowPhonNumber
                open={PopupShowNumber}
                onClose={() => setPopupShowNumber(false)}
                itemId={titleInfo.id}
                phoneNum={ownerNum}
            />
           <PopapEditAgent open={popupChangeAgent} onClose={() => setPopupChangeAgent(false)} itemId={titleInfo.id} />
            <PopapDeleteButton open={popupDeleteOpen} onClose={() => setPopupDeleteOpen(false)} historyFullInffoArr={popupDeleteInfo} />

            <div className='header-title'>
                <span >{titleInfo.title}</span>
                <small>ID: {titleInfo.itemCode}</small>
            </div>
            <div className="open-Home-page-header-agent-info-div">
                <div className="open-Home-page-header-agent-btn-div-text-div" > <span> {textFolder.plagiarism} 0</span></div>
                <div className="open-Home-page-header-agent-button-div">
                    <button className="open-Home-page-header-agent-shear-btn">
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={CallPhoneIcon} onClick={() => showOwnerPhoneNumber(true)} />
                    </button>
                    <button className="open-Home-page-header-agent-shear-btn">
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={Share} onClick={copyLink} />

                        {showNotification && <img className="hover-notification" src={ShareDun} />}
                        {/* <img className="hover-notification" src={ShareDun} /> */}
                    </button>

                    <button className="open-Home-page-header-agent-shear-btn"  >
                        <img className="open-Home-page-header-agent-shear-btn-icon" onClick={() => { showAddDocsPopap(true) }} src={Contract} />
                    </button>
                    <button className="open-Home-page-header-agent-shear-btn" onClick={() => handleDownload()}>
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={Download} />
                    </button>
                    <button className="open-Home-page-header-agent-shear-btn">
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={Copy} onClick={() => setEditProperty(false)} />
                    </button>
                    {user?.id == 62 ? (<button className="open-Home-page-header-agent-shear-btn" onClick={() => { showChangeAgent(true) }} >
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={EditAgent} />
                    </button>) : ""}
                    <button className="open-Home-page-header-agent-shear-btn">
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={Edit} onClick={() => setEditProperty(true)} />
                    </button>
                    <button className="open-Home-page-header-agent-shear-btn">
                        <img className="open-Home-page-header-agent-shear-btn-icon" src={Delete} onClick={() => deleteProperty()} />
                    </button>

                </div>

            </div>

            {/* <button>MESSAGE TO AGENT</button> */}
        </div>
    );

    function showAddDocsPopap(status) {
        setPopupAddDocsOpen(status)
    }

    function showChangeAgent(status) {
        setPopupChangeAgent(status)
    }
    function showOwnerPhoneNumber(status) {
        setPopupShowNumber(status)
    }

    function deleteProperty() {
        setPopupDeleteInfo(titleInfo.id)
        setPopupDeleteOpen(true)
    }

}

export default OpenHomePageHeaderComponentAgents;

