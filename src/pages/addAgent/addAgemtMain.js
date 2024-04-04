import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../loginPage/AuthContext';
import { SelectController, InputController } from '../../components/general/forms/controllers';
import BaseButton from '../../components/general/buttons/BaseButton';
import axios from 'axios';
import BaseSelect from "../../components/general/forms/BaseSelect";
import BaseInput from '../../components/general/forms/BaseInput';
import AddMainImage from "../../components/postPropertyComponents/addMainImage";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import AddFilesBox from "../../components/postPropertyComponents/addFilesBox";
import uploadDocIcon from '../../components/icons/uploadDocIcon.svg'
import AddAgemtData from "./addAgemtData";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';


import './addAgemtMain.css';


function AddAgemtMain() {

    var textFolder = LanguageSwitcher().LoginPage.registerAgent;

    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);

        }
    }, []);
    const navigate = useNavigate();

    var newAgentData = AddAgemtData();

    const [agentStatusData, setAgentStatusData] = useState([{ name: "Branch Agent", index: 2 }, { name: "Branch Manager", index: 3 }]);
    const [agentStatus, setAgentStatus] = useState(0);
    var agentStatusController = new SelectController(agentStatus, setAgentStatus, agentStatusData)

    const [offices, setOffices] = useState([]);

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


    const generatePassword = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };


    const [office, setOffice] = useState(0);
    var dealTypeController = new SelectController(office, setOffice, offices)

    const [inputName, name] = useState('');
    var inputNameController = new InputController(inputName, name);

    const [inputSurname, surname] = useState('');
    var inputSurnameController = new InputController(inputSurname, surname);

    const [inputPersonalId, personalId] = useState('');
    var inputPersonalIdController = new InputController(inputPersonalId, personalId);

    const [inputPhone, Phone] = useState('');
    var inputPhoneController = new InputController(inputPhone, Phone);

    const [inputMail, mail] = useState('');
    var inputMailController = new InputController(inputMail, mail);

    const [inputPassword, password] = useState(generatePassword(8));
    var inputPasswordController = new InputController(inputPassword, password);

    newAgentData.name = inputNameController.state
    newAgentData.surname = inputSurnameController.state
    newAgentData.personalId = inputPersonalIdController.state
    newAgentData.Phone = inputPhoneController.state
    newAgentData.mail = inputMailController.state
    newAgentData.password = inputPasswordController.state
    newAgentData.office = dealTypeController.state
    newAgentData.agentStatus = agentStatusController.state

    const renderForm = (
        <div className="add-agent-info-dull-div">

            <div className='add-agent-inputs-div'>
                <div className='add-agent-inputs-firs-line-div'>
                    <BaseInput placeholder={textFolder.name} controller={inputNameController} />
                    <BaseInput placeholder={textFolder.surname} controller={inputSurnameController} />
                    <BaseInput placeholder={textFolder.personalNumber} controller={inputPersonalIdController} />

                </div>
                <div className='add-agent-inputs-firs-line-div'>
                    <BaseInput placeholder={textFolder.phone} controller={inputPhoneController} />
                    <BaseInput placeholder={textFolder.mail} controller={inputMailController} />
                    <BaseInput placeholder={textFolder.password} controller={inputPasswordController} />

                </div>
                <div className='add-agent-inputs-firs-line-div'>
                    <BaseSelect placeholder={textFolder.status} controller={agentStatusController} />
                    <BaseSelect placeholder={textFolder.office} controller={dealTypeController} />

                </div>
                <div className='add-agent-inputs-firs-checkbox-div'>
                    <div className="add-agent-inputs-firs-checkbox-div-text">{textFolder.language}</div>
                    <div className='add-agent-inputs-firs-checkbox-div-btn'>
                        <div className="add-agent-input-checkbox-div">
                            <label className="container" >
                                <input className="container" type="checkbox" defaultChecked={newAgentData.languange["ka"]} onChange={() => { checkBoxClickFun("ka") }} />
                                <span className="checkmark"></span>
                                <div className="add-agent-input-checkbox-text">{textFolder.georgian}</div>
                            </label>
                        </div>
                        <div className="add-agent-input-checkbox-div">
                            <label className="container" >
                                <input className="container" type="checkbox" defaultChecked={newAgentData.languange["en"]} onChange={() => { checkBoxClickFun("en") }} />
                                <span className="checkmark"></span>
                                <div className="add-agent-input-checkbox-text">{textFolder.english}</div>
                            </label>
                        </div>
                        <div className="add-agent-input-checkbox-div">
                            <label className="container" >
                                <input className="container" type="checkbox" defaultChecked={newAgentData.languange["ru"]} onChange={() => { checkBoxClickFun("ru") }} />
                                <span className="checkmark"></span>
                                <div className="add-agent-input-checkbox-text">{textFolder.russian}</div>
                            </label>
                        </div>
                    </div>

                </div>
                <div className='add-agent-inputs-firs-line-div'>
                    <AddMainImage
                        textTitle={textFolder.addAgentImage}
                        iconTitleText={"Upload a picture"}
                        iconFormatText={"SVG, PNG or JPG (rec. 700x430px)"}
                        buttonText={"Browse"}
                        saveStatus="addAgent"
                    />
                </div>
                <div className='add-agent-inputs-firs-line-div'>
                    <AddFilesBox
                        textTitle="docs"
                        textTitleName={textFolder.docs}
                        iconTitleText={"Upload file"}
                        iconFormatText={"50 MB max file size"}
                        buttonText={"Browse"}
                        iconImage={uploadDocIcon}
                        FileTitleId="docs-bloc-id"
                        saveStatus="addAgent"
                    />

                </div>

            </div>
            <div className="button-container">
                <BaseButton text={textFolder.registration} call_method={() => { SaveAgent() }} />
            </div>
        </div>
    );

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    function SaveAgent() {
        console.log(newAgentData)
        const formData = new FormData();
        if (newAgentData.photosAndDocs.mainImage.image) {
            formData.append('mainImage', newAgentData.photosAndDocs.mainImage.image);
        }
        if (newAgentData.photosAndDocs.docs.docs) {
            formData.append('agreement', newAgentData.photosAndDocs.docs.docs);
        }
        formData.append('inputInfo', JSON.stringify(newAgentData));
        axios.post('https://api.myflats.ge/api/Agents/post-agent', formData, {
            params: { agentId: user?.id },
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        },)
            .then(response => {
                const data = response.data;
                setIsSubmitted(true)
            })
            .catch(error => {
                console.log(error);
            });
        // setTab(""); 
        // window.location.reload();
    }

    function checkBoxClickFun(checkBoxIndex) {
        newAgentData.languange[checkBoxIndex] = !newAgentData.languange[checkBoxIndex]
    }


    const errors = {
        uname: textFolder.WrongUser,
        pass: textFolder.WrongPassword
    };




    console.log(generatePassword(8))


    return (
        <div className="add-agent-page">
            <div className="add-agent-form">
                <div id="add-agent-text">Add an agent or manager</div>
                {isSubmitted || user?.id != 62 ? setTab("user_property") : renderForm}
                {isSubmitted ? window.location.reload(true) : ""}

            </div>
        </div>
    );
}


export default AddAgemtMain;