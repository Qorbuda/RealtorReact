import PropertyCard from "../../homePage/propertyCard";
import './footer-style.css';
import LanguageSwitcher from "../../secondary/localization/LanguageSwitcher";


const OpenHomePageFooterComponent = ({popularProperties}) => {

    var textFolder = LanguageSwitcher().openApartmentPage;

    return (
        <div className="footer-box" >
            <h1>{textFolder.similarOffer}</h1>
            <div className='ts-properties-section d-flex flex-row flex-wrap align-items-start' style={{ gap: "24px", marginBottom: "48px" }}>
                {popularProperties.map((property, index) => (
                    <PropertyCard apartmentInfo={property} key={index} />
                ))}
            </div>
        </div>
    )
}

export default OpenHomePageFooterComponent;