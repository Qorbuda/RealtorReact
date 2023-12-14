import React, { useEffect, useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import EditIcon from "../../components/icons/editIcon.svg"
import CheckBoxIcon from "../../components/icons/checkBoxIcon.svg"

import { useNavigate, useLocation } from 'react-router-dom';
import PropertyAddInfoSaver from './propertyAddInfoSaver';
import axios from 'axios';
import LanguageSwitcher from '../../components/secondary/localization/LanguageSwitcher';


import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';
import BaseSelect from '../../components/general/forms/BaseSelect';
import { SelectController } from "../../components/general/forms/controllers";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';



function Confirm() {
    var inputInfo = PropertyAddInfoSaver()
    var textFolder = LanguageSwitcher().PostPropertyPage;
    const [reason, setReason] = useState(null);
    
    var editReasons = new SelectController(reason, setReason, [{ name: "Reload", index: 1 }, { name: "Updating incorrect information", index: 2 }, 
            { name: "The owner has changed the information", index: 3 }])
            
    if (reason){
        inputInfo.editReason = editReasons.options.find(o => o.index == reason).name
    }
    const navigate = useNavigate();
    const location = useLocation();
    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
  
        }
    }, []);
    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>
                <PostPropertyPage currTab='6' />
            </div>
            <div className='Post-property-confirm-full-div'>
                <div className='Post-property-confirm-box-line'>
                    <div className='Post-property-confirm-general-information-box'>
                        <div className='Post-property-confirm-general-information-box-title-div'>
                            <p className='Post-property-confirm-general-information-box-title-text'>
                                {textFolder.Confirm.GeneralInformation}
                            </p >
                            <button className='Post-property-confirm-general-information-box-title-icon' onClick={() => { setTab("post_property/general_info") }} >
                                <img className='Post-property-general-info-input-icon' src={EditIcon} />
                            </button>
                        </div >
                        <div className='Post-property-confirm-general-information-box-info-div'>
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'generalInformation', "city", "name")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'generalInformation', "street", "name")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'generalInformation', "district")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'generalInformation', "building")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'generalInformation', "number")}</p >
                        </div >

                    </div>
                    <div className='Post-property-confirm-general-information-box'>
                        <div className='Post-property-confirm-general-information-box-title-div'>
                            <p className='Post-property-confirm-general-information-box-title-text'>

                                {textFolder.Confirm.Owner}

                            </p >
                            <button className='Post-property-confirm-general-information-box-title-icon' onClick={() => { setTab("post_property/owner") }} >
                                <img className='Post-property-general-info-input-icon' src={EditIcon} />
                            </button>
                        </div >
                        <p className='Post-property-confirm-general-information-box-personal-id'>

                            {geavText(inputInfo, 'owner', "personalId")}
                        </p >
                        <div className='Post-property-confirm-general-information-box-info-doble-div'>
                            <div className='Post-property-confirm-general-information-box-info-doble'>
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "name")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "surname")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "email")}</p >
                            </div>
                            <div className='Post-property-confirm-general-information-box-info-doble'>
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "phone")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "agent", "name")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'owner', "office", "name")}</p >
                            </div>

                        </div >

                    </div>
                    <div className='Post-property-confirm-general-information-box'>
                        <div className='Post-property-confirm-general-information-box-title-div'>
                            <p className='Post-property-confirm-general-information-box-title-text'>

                                {textFolder.Confirm.Description}

                            </p >
                            <button className='Post-property-confirm-general-information-box-title-icon' onClick={() => { setTab("post_property/description") }} >
                                <img className='Post-property-general-info-input-icon' src={EditIcon} />
                            </button>
                        </div >
                        <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'description', "description")}</p >

                    </div>
                </div>
                <div className='Post-property-confirm-box-line'>
                    <div className='Post-property-confirm-general-information-box'>
                        <div className='Post-property-confirm-general-information-box-title-div'>
                            <p className='Post-property-confirm-general-information-box-title-text'>
                                {textFolder.Confirm.Property}
                            </p >
                            <button className='Post-property-confirm-general-information-box-title-icon' onClick={() => { setTab("post_property/property") }} >
                                <img className='Post-property-general-info-input-icon' src={EditIcon} />
                            </button>
                        </div >

                        <div className='Post-property-confirm-general-information-property-box'>
                            <div className='Post-property-confirm-general-information-property-info'>
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "category", "name")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "space")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "bedrooms")}</p >
                                {createcheckBoxTextBars(0, inputInfo.property.checkBoxs)}
                            </div>
                            <div className='Post-property-confirm-general-information-property-info'>
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "deal", "name")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "floor")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "bathrooms")}</p >
                                {createcheckBoxTextBars(1, inputInfo.property.checkBoxs)}
                            </div>
                            <div className='Post-property-confirm-general-information-property-info-check-box'>
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "repair", "name")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "rooms")}</p >
                                <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'property', "price")}</p >
                                {createcheckBoxTextBars(2, inputInfo.property.checkBoxs)}
                            </div>
                        </div >

                    </div>
                    <div className='Post-property-confirm-general-information-box'>
                        <div className='Post-property-confirm-general-information-box-title-div'>
                            <p className='Post-property-confirm-general-information-box-title-text'>
                                {textFolder.Confirm.PhotosAndDocs}
                            </p >
                            <button className='Post-property-confirm-general-information-box-title-icon' onClick={() => { setTab("post_property/photos_and_docs") }} >
                                <img className='Post-property-general-info-input-icon' src={EditIcon} />
                            </button>
                        </div >
                        <div className='Post-property-confirm-general-information-box-info-div'>
                            <p className='Post-property-confirm-general-information-box-info'>{geavImageText(inputInfo, 'photosAndDocs', "mainImage", "imageName")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'photosAndDocs', "docs", "docsName")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'photosAndDocs', "agreement", "docsName")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'photosAndDocs', "firstLink")}</p >
                            <p className='Post-property-confirm-general-information-box-info'>{geavText(inputInfo, 'photosAndDocs', "secendLink")}</p >
                        </div >
                    </div>
                </div>
                <div className='Post-property-confirm-Reason-Selector'>
                    {showSelector(inputInfo.editStatus)}
                </div>
            </div>
            <button className='Post-property-confirm-finish-button' onClick={() => { PostAppartment(inputInfo, user?.id) }}>
                <p className='Post-property-confirm-finish-button-text' >{textFolder.Confirm.Confirm}</p>
            </button>
        </div>
    );

    function showSelector(status){
        if (status){

            
            return <BaseSelect placeholder={"Reason for change"} controller={editReasons} />
        }
    }
    function PostAppartment(inputInfo, userId) {
        PropertyAddInfoSaver("clear")
        const formData = new FormData();
    
        if (inputInfo.photosAndDocs.mainImage.image) {
            formData.append('mainImage', inputInfo.photosAndDocs.mainImage.image);
        }
        if (inputInfo.photosAndDocs.images.image) {
            inputInfo.photosAndDocs.images.image.forEach((file, index) => {
                formData.append(`images`, file);
            });
            //formData.append('images', inputInfo.PhotosAndDocs.Images);
        }
        if (inputInfo.photosAndDocs.docs.docs) {
            formData.append('docs', inputInfo.photosAndDocs.docs.docs);
        }
        if (inputInfo.photosAndDocs.agreement.docs) {
            formData.append('agreement', inputInfo.photosAndDocs.agreement.docs);
        }
    
    
        formData.append('inputInfo', JSON.stringify(inputInfo));
        axios.post('http://167.86.75.34/api/Appartments/post-appartments', formData, {
            params:{agentId: userId},
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        },)
            .then(response => {
                const data = response.data;
            })
            .catch(error => {
                console.log(error);
            });
            setTab(""); 
            window.location.reload();
    }
}

function geavText(inputInfoFolder, pageKey = "", textKey = "", idKey = "") {
    let finText = ""

    if (pageKey != '' && textKey != '' && inputInfoFolder != undefined) {
        if (idKey != '') {
            finText = inputInfoFolder[pageKey][textKey][idKey];
        } else {
            finText = inputInfoFolder[pageKey][textKey];
        }
    }

    if (finText == "" && textKey) {
        finText = textKey + " is non"
    }

    return (finText);

}

function geavImageText(inputInfoFolder, pageKey = "", textKey = "", idKey = "") {
    let finText = "image is non"

    if (inputInfoFolder[pageKey][textKey][idKey] != "") {
        if (inputInfoFolder.photosAndDocs.images.image.length == 0) {
            finText = inputInfoFolder[pageKey][textKey][idKey];
        } else {
            finText = inputInfoFolder[pageKey][textKey][idKey] + " and " + inputInfoFolder.photosAndDocs.images.image.length + " more files";
        }
    } else if (inputInfoFolder.photosAndDocs.images.image.length > 0) {
        if (inputInfoFolder.photosAndDocs.images.image.length - 1 == 0) {
            finText = inputInfoFolder.photosAndDocs.images.image[0].name;
        } else {
            finText = inputInfoFolder.photosAndDocs.images.image[0].name + " and " + (inputInfoFolder.photosAndDocs.images.image.length - 1) + " more files";
        }
    }
    return (finText);
}

function getInfoCeckbox(CheckBoxText, indexkey) {
    return (
        <div key={indexkey} className='Post-property-confirm-general-information-check-box-div'>
            <div className='Post-property-confirm-general-information-check-box-icon-div'>
                <img className='Post-property-confirm-general-information-check-box-icon' src={CheckBoxIcon} />
            </div>
            <p className='Post-property-confirm-general-information-check-box-text'>{CheckBoxText}</p>
        </div>

    );
}

function createcheckBoxTextBars(lineIndex, checkBoxArr) {
    let checkBoxDivArr = []
    let indexOfActiv = 0


    if (checkBoxArr == "empty") {
        return;
    }

    for (const [key, value] of Object.entries(checkBoxArr)) {
        if (value) {
            if (indexOfActiv % 3 == lineIndex) {
                checkBoxDivArr.push(getInfoCeckbox(key, indexOfActiv))
            }
            indexOfActiv = indexOfActiv + 1
        }
    };
    return (checkBoxDivArr)
}





export default Confirm;