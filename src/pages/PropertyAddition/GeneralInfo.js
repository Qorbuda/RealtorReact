import React, { useEffect, useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import BaseInput from "../../components/general/forms/BaseInput";
import BaseSelect from "../../components/general/forms/BaseSelect";
import { InputController, SelectController } from "../../components/general/forms/controllers";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import { useNavigate, useLocation } from 'react-router-dom';
import BaseButton from '../../components/general/buttons/BaseButton';
import ArrowRaight from '../../components/icons/ArrowRaight.svg'
import PropertyAddInfoSaver from './propertyAddInfoSaver';
import axios from 'axios';
import AddPropertyMapComponent from '../../components/addPropertyMap/AddPropertyMapComponent';
import getActivLanguageStatus from '../../components/secondary/localization/getActivLanguageStatus'

import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';

function GeneralInfo(test = "")  {
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    var inputInfo = PropertyAddInfoSaver().generalInformation;
    var textFolder = LanguageSwitcher().PostPropertyPage;
    const [citySelect, setCtySelect] = useState(inputInfo.city.index);
    const [streetSelect, setStreetSelect] = useState(inputInfo.street.index);

    const [cities, setCities] = useState([]);
    const [street, setstreet] = useState([]);

    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-cities?langId=${langId}`)
            .then(response => {
                const citiesData = response.data;
                setCities(citiesData);

            })
            .catch(error => {
                console.log(error);
            });
        }, []);
        useEffect(() => {
            axios.get(`https://api.myflats.ge/api/Appartments/get-streets?langId=${langId}&cityId=${citySelect}`)
            .then(response => {
                const streetData = response.data;
                setstreet(streetData);
            })
            .catch(error => {
                console.log(error);
            });
        }, [citySelect]);
        

    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };


    var cityController = new SelectController(citySelect, setCtySelect, cities)
    var streetController = new SelectController(streetSelect, setStreetSelect, street)

    const [district, setdistrict] = useState(inputInfo.district);
    const [building, setbuilding] = useState(inputInfo.building);
    const [apartamentNumber, setapartamentNumber] = useState(inputInfo.number);
    var districtController = new InputController(district, setdistrict)
    var buildingController = new InputController(building, setbuilding)
    var apartamentNumberController = new InputController(apartamentNumber, setapartamentNumber)

    inputInfo.district = districtController.state
    inputInfo.building = buildingController.state
    inputInfo.number = apartamentNumberController.state
    inputInfo.city.index = cityController.state
    inputInfo.street.index = streetController.state


    const cityObject = cityController.options.find(city => city.index == inputInfo.city.index);
    if (cityObject) {
        inputInfo.city.name = cityObject.name
    }

    const streetObject = streetController.options.find(street => street.index == inputInfo.street.index);

    if (streetObject) {
        inputInfo.street.name = streetObject.name
    }

    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>

                <PostPropertyPage currTab='1' />
            </div>
            <div className='Post-property-general-info-input-div'>

                <div className='Post-property-general-info-input-first-line' >
                    <BaseSelect nameOfSelect={textFolder.GeneralInfoPage.city} controller={cityController} placeholder={textFolder.SekectCity} value={citySelect}/>
                    <BaseSelect nameOfSelect={textFolder.GeneralInfoPage.street} controller={streetController} placeholder={textFolder.SekectStreet} />
                </div>
                <div className='Post-property-general-info-input-secend-line-div'>
                    <div className='Post-property-general-info-input-secend-line'>
                        <BaseInput placeholder={textFolder.GeneralInfoPage.District} controller={districtController} />
                        <BaseInput placeholder={textFolder.GeneralInfoPage.Building} controller={buildingController} />
                        <BaseInput placeholder={textFolder.GeneralInfoPage.ApartamentNumber} controller={apartamentNumberController} />
                    </div>
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>} call_method={() => { setTab("post_property/owner"); }} />

                </div>
                {/* <div className='Post-property-add-map-cordinants'>
                    <AddPropertyMapComponent/>
                </div> */}
            </div>
        </div>
    );
}




export default GeneralInfo;