import React, { useEffect, useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import BaseInput from "../../components/general/forms/BaseInput";
import BaseSelect from "../../components/general/forms/BaseSelect";
import { InputController, SelectController } from "../../components/general/forms/controllers";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import '../../components/homePage/searchBarStyle.css';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckBox from '../../components/general/buttons/CheckBox';
import BaseButton from '../../components/general/buttons/BaseButton';
import ArrowRaight from '../../components/icons/ArrowRaight.svg'
import PropertyAddInfoSaver from './propertyAddInfoSaver';
import axios from 'axios';
import getActivLanguageStatus from '../../components/secondary/localization/getActivLanguageStatus'


import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';


var inputInfo = PropertyAddInfoSaver().property;

function Property() {
    const [checkBoxes, setCheckboxes] = useState([]);
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    useEffect(() => {
        axios.get(`http://167.86.75.34/api/Appartments/get-characteristic?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setCheckboxes(data);
                if (inputInfo.checkBoxs.length == 0) {
                    inputInfo.checkBoxs = data;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    var textFolder = LanguageSwitcher().PostPropertyPage;


    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const [categorySelector, setCategorySelector] = useState(inputInfo.category.index);
    const [dealTypeSelector, setdealTypeSelector] = useState(inputInfo.deal.index);
    const [repairsSelector, setrepairsSelector] = useState(inputInfo.repair.index);

    const [categories, setCategories] = useState([]);
    const [dealTypes, setDealTypes] = useState([]);
    const [repairs, setRepairs] = useState([]);
    useEffect(() => {
        axios.get(`http://167.86.75.34/api/Appartments/get-categories?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setCategories(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://167.86.75.34/api/Appartments/get-deal-types?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setDealTypes(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://167.86.75.34/api/Appartments/get-repairs?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setRepairs(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    var propertyCategoryController = new SelectController(categorySelector, setCategorySelector, categories)
    var dealTypeController = new SelectController(dealTypeSelector, setdealTypeSelector, dealTypes)
    var repairsController = new SelectController(repairsSelector, setrepairsSelector, repairs)

    const [allSpace, setallSpace] = useState(inputInfo.space);
    const [floor, setfloor] = useState(inputInfo.floor);
    const [rooms, setrooms] = useState(inputInfo.rooms);
    const [bedrooms, setbedrooms] = useState(inputInfo.bedrooms);
    const [bathrooms, setbathrooms] = useState(inputInfo.bathrooms);
    const [Price, setPrice] = useState(inputInfo.price);

    var allSpaceController = new InputController(allSpace, setallSpace);
    var floorController = new InputController(floor, setfloor);
    var roomsController = new InputController(rooms, setrooms);
    var bedroomsController = new InputController(bedrooms, setbedrooms);
    var bathroomsController = new InputController(bathrooms, setbathrooms);
    var priceController = new InputController(Price, setPrice);


    inputInfo.category.index = propertyCategoryController.state
    inputInfo.deal.index = dealTypeController.state
    inputInfo.repair.index = repairsController.state

    const categoryObject = propertyCategoryController.options.find(i => i.index == inputInfo.category.index);
    if (categoryObject) {
        inputInfo.category.name = categoryObject.name
    }
   
    const dealObject = dealTypeController.options.find(i => i.index == inputInfo.deal.index);
    if (dealObject) {
        inputInfo.deal.name = dealObject.name

    }

    const repairObject = repairsController.options.find(i => i.index == inputInfo.repair.index);
    if (repairObject) {
        inputInfo.repair.name = repairObject.name
    }


    inputInfo.space = allSpaceController.state
    inputInfo.floor = floorController.state
    inputInfo.rooms = roomsController.state
    inputInfo.bedrooms = bedroomsController.state
    inputInfo.bathrooms = bathroomsController.state
    inputInfo.price = priceController.state



    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>


                <PostPropertyPage currTab='3' />
            </div>
            <div className='Post-property-general-info-input-div'>

                <div className='Post-property-propery-page-input-full-div'>

                    <div className='Post-property-propery-page-input-div'>
                        <BaseSelect nameOfSelect={textFolder.Property.Category} controller={propertyCategoryController} placeholder={textFolder.Property.Category} />
                        <BaseSelect nameOfSelect={textFolder.Property.DealType} controller={dealTypeController} placeholder={textFolder.Property.DealType} />
                        <BaseSelect nameOfSelect={textFolder.Property.Repairs} controller={repairsController} placeholder={textFolder.Property.Repairs} />
                    </div>
                    <div className='Post-property-propery-page-input-div'>
                        <BaseInput placeholder={textFolder.Property.Space} controller={allSpaceController} />
                        <BaseInput placeholder={textFolder.Property.Floor} controller={floorController} />
                        <BaseInput placeholder={textFolder.Property.Room} controller={roomsController} />
                    </div>
                    <div className='Post-property-propery-page-input-div'>
                        <BaseInput placeholder={textFolder.Property.Bedroom} controller={bedroomsController} />
                        <BaseInput placeholder={textFolder.Property.Bathroom} controller={bathroomsController} />
                        <BaseInput placeholder={textFolder.Property.Price} controller={priceController} />
                    </div>
                </div>

                <div className='Post-property-propery-page-check-box-full-div'>
                    <p className='Post-property-propery-page-check-box-div-title'>{textFolder.Property.Amenities} </p>

                    <div className='Post-property-propery-page-check-box-full-box'>
                        <div className='Post-property-propery-page-check-box-poplar'>
                            <p className='Post-property-propery-page-check-box-poplar-title'>{textFolder.Property.Popular}</p>
                            <div className='Post-property-propery-page-check-box-poplar-left-box'>

                                {createCheckBoxs(checkBoxes)}

                            </div>

                        </div>
                    </div>

                </div>

                <div className='Post-property-owner-page-buttons-div'>

                    <BaseButton text={textFolder.Back} call_method={() => { setTab("post_property/owner") }} />
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>}
                        call_method={() => { setTab("post_property/description") }} />

                </div>

            </div>
        </div>
    );
}


function geavNewCheckBox() {

}


function geavCheckBoxs(boxArray, lineIndex) {

    let checkBoxName1 = Object.keys(boxArray)[(lineIndex * 4) + 0]
    let checkBoxName2 = Object.keys(boxArray)[(lineIndex * 4) + 1]
    let checkBoxName3 = Object.keys(boxArray)[(lineIndex * 4) + 2]
    let checkBoxName4 = Object.keys(boxArray)[(lineIndex * 4) + 3]


    let checkBoxTag1 = <CheckBox id={Object.keys(boxArray)[(lineIndex * 4) + 0]} keyId={(lineIndex * 4) + 0} text={checkBoxName1} onChange={() => { handleChange((lineIndex * 4) + 0) }} value={inputInfo.checkBoxs[Object.keys(inputInfo.checkBoxs)[(lineIndex * 4) + 0]]}></CheckBox>
    let checkBoxTag2 = <CheckBox id={Object.keys(boxArray)[(lineIndex * 4) + 1]} keyId={(lineIndex * 4) + 1} text={checkBoxName2} onChange={() => { handleChange((lineIndex * 4) + 1) }} value={inputInfo.checkBoxs[Object.keys(inputInfo.checkBoxs)[(lineIndex * 4) + 1]]}></CheckBox>
    let checkBoxTag3 = <CheckBox id={Object.keys(boxArray)[(lineIndex * 4) + 2]} keyId={(lineIndex * 4) + 2} text={checkBoxName3} onChange={() => { handleChange((lineIndex * 4) + 2) }} value={inputInfo.checkBoxs[Object.keys(inputInfo.checkBoxs)[(lineIndex * 4) + 2]]}></CheckBox>
    let checkBoxTag4 = <CheckBox id={Object.keys(boxArray)[(lineIndex * 4) + 3]} keyId={(lineIndex * 4) + 3} text={checkBoxName4} onChange={() => { handleChange((lineIndex * 4) + 3) }} value={inputInfo.checkBoxs[Object.keys(inputInfo.checkBoxs)[(lineIndex * 4) + 3]]}></CheckBox>


    if (checkBoxName1 === undefined) { checkBoxTag1 = null }
    if (checkBoxName2 === undefined) { checkBoxTag2 = null }
    if (checkBoxName3 === undefined) { checkBoxTag3 = null }
    if (checkBoxName4 === undefined) { checkBoxTag4 = null }


    return (
        <div key={lineIndex} className=' Post-property-propery-page-check-box-poplar-box' >
            {checkBoxTag1}
            {checkBoxTag2}
            {checkBoxTag3}
            {checkBoxTag4}
        </div>
    )

}


function createCheckBoxs(boxArray) {

    let checkBoxDivArr = []
    let checkBoxArrKey = Object.keys(boxArray)
    let checkBoxArrLen = checkBoxArrKey.length

    let checkBoxLineLen = (checkBoxArrLen - (checkBoxArrLen % 4)) / 4 + 1


    for (let i = 0; i < checkBoxLineLen; i++) {
        checkBoxDivArr.push(geavCheckBoxs(boxArray, i));
    }

    return checkBoxDivArr

}


function handleChange(checkBoxIndex) {
    let keyCheckBoxArr = Object.keys(inputInfo.checkBoxs)
    let keyCheckBox = keyCheckBoxArr[checkBoxIndex]

    inputInfo.checkBoxs[keyCheckBox] = !inputInfo.checkBoxs[keyCheckBox]
};



export default Property;