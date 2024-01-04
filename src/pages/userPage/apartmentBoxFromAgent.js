import React, { useState, useEffect } from "react";
import CurrencyButton from "../../components/general/buttons/CurrencyButton";
import PhoneCallOrange from "../../components/icons/PhoneCallOrange.svg"
import ThreePoints from "../../components/icons/ThreePoints.svg"
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import ApartmentEdit from "./apartmentEdit";
import { useNavigate, useLocation } from 'react-router-dom';
import PropertyAddInfoSaver from "../PropertyAddition/propertyAddInfoSaver";


import "./apartmentBoxFromAgent.css";

import axios from 'axios';


function ApartmentBoxFromAgent({ apartmentInfo, onClickHistoryBtn , onClickDeleteBtn}) {
    var textFolder = LanguageSwitcher().UserPage.apartmentBox;
    apartmentInfo = apartmentInfo

    var inputInfo = PropertyAddInfoSaver()

    const navigate = useNavigate();
    const location = useLocation();
    
    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const togglePopup = () => {

        var overlay = document.getElementById('overlay' + apartmentInfo.id);
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }

    return (
        <div className="Apartment-box-from-agent-page-full-div">
            <div className="Apartment-box-from-agent-page-div">
                <div className="Apartment-box-from-agent-apartment-info-full-div">
                    <div className="Apartment-box-from-agent-apartment-info-image-div">
                        <img className="Apartment-box-from-agent-apartment-info-image" src={`https://api.myflats.ge/api/image/get-main-image/${apartmentInfo.mainImage}`} />

                    </div>
                    <div className="Apartment-box-from-agent-apartment-info-div">
                        <div className="Apartment-box-from-agent-apartment-info-first">
                            <p className="Apartment-box-from-agent-apartment-info-first-title">{apartmentInfo.addedDate}</p>
                            <div className="Apartment-box-from-agent-apartment-info-first-main-info-box">
                                <div className="Apartment-box-from-agent-main-title-div">
                                    <p className="Apartment-box-from-agent-main-title-text">{apartmentInfo.titleBox}</p>
                                    <div className="Apartment-box-from-agent-main-price-text-div">
                                        {/* <p className="Apartment-box-from-agent-main-price-text">{apartmentInfo.price}</p> */}
                                        <CurrencyButton textId={"edit"} priceArr={apartmentInfo.price} widthFullBox = "286px" />

                                    </div>
                                    <div className="Apartment-box-from-agent-floor-bedroom-bathroom-text-div">
                                        <div className="Apartment-box-from-agent-floor-text-div">
                                            <p className="Apartment-box-from-agent-floor-text-title">{textFolder.floor}</p>
                                            <p className="Apartment-box-from-agent-floor-text">{apartmentInfo.floor}</p>
                                        </div>
                                        <div className="Apartment-box-from-agent-floor-text-div">
                                            <p className="Apartment-box-from-agent-floor-text-title">{textFolder.bedrooms}</p>
                                            <p className="Apartment-box-from-agent-floor-text">{apartmentInfo.floor}</p>
                                        </div>
                                        <div className="Apartment-box-from-agent-floor-text-div">
                                            <p className="Apartment-box-from-agent-floor-text-title">{textFolder.bathroom}</p>
                                            <p className="Apartment-box-from-agent-floor-text">{apartmentInfo.bathroom}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="Apartment-box-from-agent-agent-info-full-div">
                                    <img className='Apartment-box-from-agent-agent-info-image' src={`https://api.myflats.ge/api/image/upload/${apartmentInfo.agentImage}`} />
                                    <div className="Apartment-box-from-agent-agent-info-text-div">
                                        <p className="Apartment-box-from-agent-agent-info-name-text">{apartmentInfo.agentName}</p>
                                        <p className="Apartment-box-from-agent-agent-info-office-text">{apartmentInfo.office}</p>
                                        <div className="Apartment-box-from-agent-agent-info-phone-div">
                                            <img className="Apartment-box-from-agent-agent-info-phone-icon" src={PhoneCallOrange} />
                                            <p className="Apartment-box-from-agent-agent-info-phone-text">{apartmentInfo.phone}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="Apartment-box-from-agent-apartment-info-secend">
                            <p className="Apartment-box-from-agent-apartment-info-first-title">{textFolder.generalInfo}</p>
                            <div className="Apartment-box-from-agent-apartment-info-secend-text-full-div">
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.id}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.itemCode}</p>
                                    </div>
                                </div>
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.fullSpace}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.fullSpace}</p>
                                    </div>
                                </div>
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.dealType}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.dealType}</p>
                                    </div>
                                </div>
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.category}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.category}</p>
                                    </div>
                                </div>
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.address}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.address}</p>
                                    </div>
                                </div>
                                <div className="Apartment-box-from-agent-apartment-info-secend-text-div">
                                    <p className="Apartment-box-from-agent-apartment-info-secend-text-title">{textFolder.city}</p>
                                    <div className="Apartment-box-from-agent-apartment-info-secend-text-box">
                                        <p className="Apartment-box-from-agent-apartment-info-secend-text">{apartmentInfo.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="Apartment-box-from-agent-three-point-button" onClick={togglePopup}>
                            <img className="Apartment-box-from-agent-three-point-button-icon" src={ThreePoints} />
                        </button>
                    </div>
                </div>
                <button className="Apartment-box-from-agent-apartment-open-btn" onClick={() => { setTab(`open_property/${apartmentInfo.id}/${1}`)}}>
                    <p className="Apartment-box-from-agent-apartment-open-btn-text">{textFolder.open}</p>
                </button>
            </div>
            <div className="Apartment-box-from-agent-change-apartment-pop" id={'overlay' + apartmentInfo.id}>
                <div className="Apartment-box-from-agent-change-apartment-pop-button-div">
                    <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => onClickHistoryBtn(true, apartmentInfo.apartmentHistory)}>
                        <p className="Apartment-box-from-agent-apartment-pop-btn-text">{textFolder.history}</p>
                    </button>
                    <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => { setEditProperty( apartmentInfo.id) }}>
                        <p className="Apartment-box-from-agent-apartment-pop-btn-text">{textFolder.edit}</p>
                    </button>
                    <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => onClickDeleteBtn(true, apartmentInfo.id)}>
                        <p className="Apartment-box-from-agent-apartment-pop-btn-text" >{textFolder.delete}</p>
                    </button>
                </div>

            </div>
        </div>


    );
    
        async function setEditProperty(itemId){
            var input = await ApartmentEdit(itemId)
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
            inputInfo.editStatus = true;
            inputInfo.appartmentId = itemId
            inputInfo.property.checkBoxs = input.property.checkBoxs
            setTab(`post_property/general_info`)
            
        }
}

export default ApartmentBoxFromAgent;