import React from 'react';
import Carousel from '../general/carousel/Сarousel';
import CurrencyButton from '../general/buttons/CurrencyButton';
import GetApartmentId from '../../pages/openPage/getApartmentId';
import { useNavigate, useLocation } from 'react-router-dom';


import "./homePage.css"


function PropertyCard(apartmentInfo) {
    apartmentInfo = apartmentInfo.apartmentInfo

    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName, itemId, langId) {
        GetApartmentId(apartmentInfo.id)
        const newTab = window.open(`/${tabName}/${itemId}/${langId}`);
        // newTab.onload = () => {
        //     navigate(`/${tabName}/${itemId}/${langId}`);
        // };
    };

    return (
        <div className='ts-property-card d-flex flex-column align-items-start'>

            <button className='ts-property-card-open-apartment-main-button' onClick={() => { setTab("open_property", apartmentInfo.id, 1);  }}>
            </button>

            <div className='total-test'  >
                <Carousel imagePath={apartmentInfo.mainImagePath} />
                <button className='ts-property-card-open-apartment-image-button' onClick={() => { setTab("open_property", apartmentInfo.id, 1); window.location.reload(); }}>
                </button>
            </div>
            <div className='ts-property-card-info'>
                <div className='ts-property-card-info-head-container'>
                    <p className='ts-property-card-info-head-info-text'>{apartmentInfo.cityName}</p>
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
                            <span className='ts-property-card-info-secondary-items grey-font'>{apartmentInfo.bedroom}</span>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default PropertyCard;