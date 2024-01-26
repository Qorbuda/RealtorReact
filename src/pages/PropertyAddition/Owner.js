import React, { useEffect, useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import BaseInput from "../../components/general/forms/BaseInput";
import { InputController, SelectController } from "../../components/general/forms/controllers";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import '../../components/homePage/searchBarStyle.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BaseButton from '../../components/general/buttons/BaseButton';
import ArrowRaight from '../../components/icons/ArrowRaight.svg'
import BaseSelect from '../../components/general/forms/BaseSelect';
import PropertyAddInfoSaver from './propertyAddInfoSaver';
import axios from 'axios';



import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';


function Owner() {

    var textFolder = LanguageSwitcher().PostPropertyPage;
    var inputInfo = PropertyAddInfoSaver().owner;


    const navigate = useNavigate();
    const location = useLocation();

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    const [inputName, setinputName] = useState(inputInfo.name);
    const [inputSurname, setinputSurname] = useState(inputInfo.surname);
    const [inputPersonalId, setinputPersonalId] = useState(inputInfo.personalId);
    const [inputPhone, setinputPhone] = useState(inputInfo.phone);
    const [inputSecendPhone, setinputSecendPhone] = useState(inputInfo.secendPhone);
    const [inputEmail, setinputEmail] = useState(inputInfo.email);

    const [officeSelect, setOfficeSelect] = useState(inputInfo.office.index);
    const [agentSelect, setagentSelect] = useState(inputInfo.agent.index);
    
    const [offices, setOffices] = useState([]);
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get('https://api.myflats.ge/api/Appartments/get-offices')
            .then(response => {
                const officeData = response.data;
                setOffices(officeData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        // Fetch agent data when the selected office changes
        axios.get(`https://api.myflats.ge/api/Agents/get-office-aggents?officeId=${officeSelect}`)
          .then(response => {
            const agentData = response.data;
            setAgents(agentData);
          })
          .catch(error => {
            console.error(error);
          });
    }, [officeSelect]);
    
    var officeController = new SelectController(officeSelect, setOfficeSelect, offices)
    var agentController = new SelectController(agentSelect, setagentSelect, agents)

    var inputNameController = new InputController(inputName, setinputName);
    var inputSurnameController = new InputController(inputSurname, setinputSurname);
    var inputPersonalIdController = new InputController(inputPersonalId, setinputPersonalId);
    var inputPhoneController = new InputController(inputPhone, setinputPhone);
    var inputSecendPhoneController = new InputController(inputSecendPhone, setinputSecendPhone);
    var inputEmailController = new InputController(inputEmail, setinputEmail);


    inputInfo.name = inputNameController.state;
    inputInfo.surname = inputSurnameController.state;
    inputInfo.personalId = inputPersonalIdController.state;
    inputInfo.phone = inputPhoneController.state;
    inputInfo.secendPhone = inputSecendPhoneController.state;
    inputInfo.email = inputEmailController.state;


    inputInfo.office.index = officeController.state
    inputInfo.agent.index = agentController.state

    const officeObject = officeController.options.find(x => x.index == inputInfo.office.index);
    if (officeObject) {
        inputInfo.office.name = officeObject.name
    }
    const agentObject = agentController.options.find(x => x.index == inputInfo.agent.index);
    if (agentObject) {
        inputInfo.agent.name = agentObject.name
    }

    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>

                <PostPropertyPage currTab='2' />
            </div>

            <div className='Post-property-general-info-input-div'>

                <div className='Post-property-owner-page-input-line-div-thri-bar'>
                    <BaseInput placeholder={textFolder.ownerPage.Name} controller={inputNameController} />
                    <BaseInput placeholder={textFolder.ownerPage.Surname} controller={inputSurnameController} />
                    <BaseInput placeholder={textFolder.ownerPage.PersonalId} controller={inputPersonalIdController} />
                </div>
                <div className='Post-property-owner-page-input-line-div-thri-bar'>
                    <BaseInput placeholder={textFolder.ownerPage.Phone} controller={inputPhoneController} />
                    <BaseInput placeholder={textFolder.ownerPage.SecendPhone} controller={inputSecendPhoneController} />
                    <BaseInput placeholder={textFolder.ownerPage.Email} controller={inputEmailController} />
                </div>
                {/* <div className='Post-property-owner-page-input-line-div-thri-bar'>
                    <BaseSelect nameOfSelect={textFolder.ownerPage.Office} controller={officeController} placeholder={textFolder.ownerPage.Office} 
                        />
                    <BaseSelect nameOfSelect={textFolder.ownerPage.Agent} controller={agentController} placeholder={textFolder.ownerPage.Agent} />
                </div> */}
                <div className='Post-property-owner-page-buttons-div'>

                    <BaseButton text={textFolder.Back} call_method={() => { setTab("post_property/general_info") }} />
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>} call_method={() => { setTab("post_property/property") }} />

                </div>
            </div>


        </div>
    );
}

export default Owner;