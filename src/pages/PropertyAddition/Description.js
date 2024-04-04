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
    const [descriptionEn, setdescriptionEn] = useState(inputInfo.descriptionEn);
    const [descriptionKa, setdescriptionKA] = useState(inputInfo.descriptionKa);
    const [descriptionRu, setdescriptionRu] = useState(inputInfo.descriptionRu);
    var descriptionControllerEn = new InputController(descriptionEn, setdescriptionEn);
    var descriptionControllerKa = new InputController(descriptionKa, setdescriptionKA);
    var descriptionControllerRu = new InputController(descriptionRu, setdescriptionRu);


    inputInfo.descriptionEn = descriptionControllerEn.state
    inputInfo.descriptionKa = descriptionControllerKa.state
    inputInfo.descriptionRu = descriptionControllerRu.state


    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>

                <PostPropertyPage currTab='4' />
            </div>

            <div className='Post-property-fescription-page-input-div'>
                <textarea className="form-control Post-property-fescription-page-input" type="text" placeholder={textFolder.Description.descriptionEn}
                    onChange={(event) => { descriptionControllerEn.setState(event.target.value) }} value={descriptionControllerEn.state}></textarea>

                <textarea className="form-control Post-property-fescription-page-input" type="text" placeholder={textFolder.Description.descriptionKa}
                    onChange={(event) => { descriptionControllerKa.setState(event.target.value) }} value={descriptionControllerKa.state}></textarea>

                <textarea className="form-control Post-property-fescription-page-input" type="text" placeholder={textFolder.Description.descriptionRu}
                    onChange={(event) => { descriptionControllerRu.setState(event.target.value) }} value={descriptionControllerRu.state}></textarea>

                <div className='Post-property-owner-page-buttons-div'>

                    <BaseButton text={textFolder.Back} call_method={() => { setTab("post_property/property") }} />
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>}
                        call_method={() => { setTab("post_property/photos_and_docs") }} />

                </div>
            </div>





        </div>
    );
}

export default Description;