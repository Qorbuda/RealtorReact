import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from '../general/carousel/Сarousel';
import CurrencyButton from '../general/buttons/CurrencyButton';
import GetApartmentId from '../../pages/openPage/getApartmentId';
import ThreePoints from "../icons/ThreePoints.svg"
import ApartmentEdit from '../../pages/userPage/apartmentEdit';
import PropertyAddInfoSaver from '../../pages/PropertyAddition/propertyAddInfoSaver';


import "./homePage.css"


function PropertyCardAgents({ apartmentInfo, onClickHistoryBtn, onClickDeleteBtn, deletedItems, onCklickRestore }) {
    apartmentInfo = apartmentInfo

    const navigate = useNavigate();
    const location = useLocation();

    var inputInfo = PropertyAddInfoSaver()

    function setTab(tabName, itemId, langId) {
        GetApartmentId(apartmentInfo.id)
        const newTab = window.open(`/${tabName}/${itemId}/${langId}`);
        // newTab.onload = () => {
        //     navigate(`/${tabName}/${itemId}/${langId}`);
        // };
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
        <div className='ts-property-card d-flex flex-column align-items-start'>

            <button className='ts-property-card-open-apartment-main-button' onClick={() => { setTab("open_property", apartmentInfo.id, 1);  }}>
            </button>

            <div className='total-test'>
                <Carousel imagePath={apartmentInfo.mainImage} />
                <button className='ts-property-card-open-apartment-image-button' onClick={() => { setTab("open_property", apartmentInfo.id, 1); window.location.reload(); }}>
                </button>
                <div>
                    <button className="Apartment-box-agent-three-point-button" onClick={togglePopup}>
                        <img className="Apartment-box-agent-three-point-button-icon" src={ThreePoints} />
                    </button>
                </div>
            </div>
            <div className='ts-property-card-info'>
                <div className='ts-property-card-info-head-container'>
                    <p className='ts-property-card-info-head-info-text'>{apartmentInfo.city}</p>
                    <div className='ts-property-card-info-head-price-div'>
                        <CurrencyButton textId={apartmentInfo.id} priceArr={apartmentInfo.price} />
                    </div>
                </div>
                <div className='ts-property-card-info-content-container flex-wrap' onClick={() => { setTab("open_property", apartmentInfo.id, 1); window.location.reload(); }}>
                    <div>
                        <span className='ts-property-card-info-primary-items orange-font' style={{ marginRight: "8px" }}>id</span>
                        <span className='ts-property-card-info-primary-items '>{apartmentInfo.itemCode}</span>
                    </div>

                    <div>
                        <span className='ts-property-card-info-primary-items orange-font' style={{ marginRight: "8px" }}>space</span>
                        <span className='ts-property-card-info-primary-items '>{apartmentInfo.areaSizeFull} M<sup>2</sup></span>
                    </div>

                    <div>
                        <span className='ts-property-card-info-primary-items orange-font' style={{ marginRight: "8px" }}>1M<sup>2</sup></span>
                        <span className='ts-property-card-info-primary-items '>{Math.floor(apartmentInfo.price.usd / apartmentInfo.areaSizeFull)}$</span>
                    </div>

                    <div className='ts-property-card-info-secondary-items-div'>
                        <div>
                            <span className='ts-property-card-info-secondary-items grey-font'>Floor: </span>
                            <span className='ts-property-card-info-secondary-items grey-font'>{apartmentInfo.floor}</span>
                        </div>

                        <div>
                            <span className='ts-property-card-info-secondary-items grey-font'>Rooms: </span>
                            <span className='ts-property-card-info-secondary-items grey-font'>{apartmentInfo.room}</span>
                        </div>

                        <div>
                            <span className='ts-property-card-info-secondary-items grey-font'>Bedrooms: </span>
                            <span className='ts-property-card-info-secondary-items grey-font'>{apartmentInfo.bedrooms}</span>
                        </div>
                    </div>

                </div>



            </div>

            <div className="Apartment-box-from-agent-change-apartment" id={'overlay' + apartmentInfo.id}>
                <div className="Apartment-box-from-agent-change-apartment-button-div">
                    {deletedItems ? 
                        <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => onCklickRestore(true, apartmentInfo.id)}>
                            <p className="Apartment-box-from-agent-apartment-pop-btn-text">{"restore"}</p>
                        </button>
                        : 
                    
                        <>
                            <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => onClickHistoryBtn(true, apartmentInfo.apartmentHistory)}>
                                <p className="Apartment-box-from-agent-apartment-pop-btn-text">{"history"}</p>
                            </button>
                            <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => { setEditProperty(apartmentInfo.id) }} >
                                <p className="Apartment-box-from-agent-apartment-pop-btn-text">{"edit"}</p>
                            </button>
                            <button className="Apartment-box-from-agent-apartment-pop-btn" onClick={() => onClickDeleteBtn(true, apartmentInfo.id)}>
                                <p className="Apartment-box-from-agent-apartment-pop-btn-text" >{"delete"}</p>
                            </button>
                        </>
                    }
                </div>

            </div>
        </div>
    );

    async function setEditProperty(itemId) {
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

        navigate(`/post_property/general_info`);


    }

}

export default PropertyCardAgents;