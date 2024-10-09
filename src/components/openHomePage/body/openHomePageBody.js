import OpenHomePageMapComponent from "../map/openHomePageMap";
import OpenHomePageRealtorComponent from "../realtor/openHomePageRealtor";
import LanguageSwitcher from "../../secondary/localization/LanguageSwitcher";


import './body-style.css';


const OpenHomePageBodyComponent = ({ mapCoordinates, realtorInfo }) => {
    var textFolder = LanguageSwitcher().openApartmentPage;
    var DescriptionText = realtorInfo.apartmentDescription
    
    if(localStorage.getItem("language") == "en" && realtorInfo.apartmentDescriptionEn != null){
        DescriptionText = realtorInfo.apartmentDescriptionEn
    }else if(localStorage.getItem("language") == "ru" && realtorInfo.apartmentDescriptionRu != null){
        DescriptionText = realtorInfo.apartmentDescriptionRu

    }

    return (
        <div className="main-body">
            <div className="map-container">
                <div className="text-container">
                    <h1>{textFolder.description}</h1>
                    <span>{DescriptionText}</span>
                </div>
                <div className='map'>
                    <OpenHomePageMapComponent coordinates={mapCoordinates} />
                </div>
            </div>
            <OpenHomePageRealtorComponent realtorInfo={realtorInfo} />
        </div>
    )
}

export default OpenHomePageBodyComponent;