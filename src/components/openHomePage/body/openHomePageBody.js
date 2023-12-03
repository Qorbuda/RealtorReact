import OpenHomePageMapComponent from "../map/openHomePageMap";
import OpenHomePageRealtorComponent from "../realtor/openHomePageRealtor";
import LanguageSwitcher from "../../secondary/localization/LanguageSwitcher";


import './body-style.css';


const OpenHomePageBodyComponent = ({ mapCoordinates, realtorInfo }) => {
    var textFolder = LanguageSwitcher().openApartmentPage;

    return (
        <div className="main-body">
            <div className="map-container">
                <div className="text-container">
                    <h1>{textFolder.description}</h1>
                    <span>{realtorInfo.apartmentDescription}</span>
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