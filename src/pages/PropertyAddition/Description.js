import React, { useEffect, useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import BaseTextArea from "../../components/general/forms/BaseTextArea";
import { InputController, SelectController } from "../../components/general/forms/controllers";

import '../../components/homePage/searchBarStyle.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BaseButton from '../../components/general/buttons/BaseButton';
import ArrowRaight from '../../components/icons/ArrowRaight.svg'
import PropertyAddInfoSaver from './propertyAddInfoSaver';


import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';




function Description() {
    var textFolder = LanguageSwitcher().PostPropertyPage;

    var inputInfo = PropertyAddInfoSaver().description;


    const navigate = useNavigate();
    const location = useLocation();
    const inputValueDescriptionPage = { value: "" };


    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const [description, setdescription] = useState(inputInfo.description);
    var descriptionController = new InputController(description, setdescription);


    inputInfo.description = descriptionController.state


    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>

                <PostPropertyPage currTab='4' />
            </div>

            <div className='Post-property-fescription-page-input-div'>
                <textarea className="form-control Post-property-fescription-page-input" type="text" placeholder={textFolder.Description} onChange={(event) => { descriptionController.setState(event.target.value) }} value={descriptionController.state}></textarea>
                <div className='Post-property-owner-page-buttons-div'>

                    <BaseButton text={textFolder.Back}  call_method={() => { setTab("post_property/property") }} />
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>}
                        call_method={() => { setTab("post_property/photos_and_docs") }} />

                </div>
            </div>





        </div>
    );
}

export default Description;