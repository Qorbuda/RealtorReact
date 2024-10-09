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


function DeleteAgemtMain() {

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

    const [agentSelect, setagentSelect] = useState(0);

    const [office, setOffice] = useState(0);
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
        axios.get(`https://api.myflats.ge/api/Agents/get-office-aggents?officeId=${office}`)
          .then(response => {
            const agentData = response.data;
            setAgents(agentData);
          })
          .catch(error => {
            console.error(error);
          });
    }, [office]);

    const generatePassword = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    var dealTypeController = new SelectController(office, setOffice, offices)
    var agentController = new SelectController(agentSelect, setagentSelect, agents)


    newAgentData.office = dealTypeController.state
    newAgentData.agentStatus = agentStatusController.state

    const renderForm = (
        <div className="add-agent-info-dull-div">

            <div className='add-agent-inputs-div'>
                <div className='add-agent-inputs-firs-line-div'>
                    <BaseSelect placeholder={textFolder.projectsToAccept} controller={agentStatusController} />
                    <BaseSelect placeholder={textFolder.office} controller={dealTypeController} />
                    <BaseSelect placeholder={textFolder.agentName} controller={agentController} />
                </div>

            </div>
            <div className="button-container">
                <BaseButton text={textFolder.deleteAgentBtnText} call_method={() => { SaveAgent() }} />
            </div>
        </div>
    );

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    function SaveAgent() {
        console.log(agentController.state)
        const formData = new FormData();
        axios.post(`https://api.myflats.ge/api/Agents/delete-agent?agentId=${agentController.state}`)
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
                <div id="add-agent-text">Delete an agent or manager</div>
                {isSubmitted || user?.id != 62 ? setTab("user_property") : renderForm}
                {isSubmitted ? window.location.reload(true) : ""}

            </div>
        </div>
    );
}


export default DeleteAgemtMain;