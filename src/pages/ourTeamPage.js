import React, { useEffect, useState } from 'react';
import OurTeamAgentsDes from '../components/ourTeamComponents/ourTeamAgentsDes';
import magnifyingGlass from '../components/icons/magnifyingGlass.svg'
import BuildingsOrange from '../components/icons/BuildingsOrange.svg'
import BaseInput from '../components/general/forms/BaseInput';
import { InputController } from '../components/general/forms/controllers';
import LanguageSwitcher from '../components/secondary/localization/LanguageSwitcher';
import axios from 'axios';
import getActivLanguageStatus from '../components/secondary/localization/getActivLanguageStatus'

import "./pageStyle/ourTeamPage.css"


function OurTeamPage() {

    var textFolder = LanguageSwitcher().OurTeamPage;

    const [inputAgentID, agentID] = useState('');
    const [inputProperyID, properyID] = useState('');

    var inputAgentIDControlerr = new InputController(inputAgentID, agentID);
    var inputProperyIDController = new InputController(inputProperyID, properyID);
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Agents/get-our-team-agents?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setAgents(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='Our-team-page-full-div'>
            <div className='Our-team-page-div'>
                <div className='Our-team-page-search-boox-div'>
                    <img id='Our-team-page-search-glass-icon' src={magnifyingGlass} />
                    <BaseInput className="Our-team-page-input-agent" placeholder={textFolder.Agents} controller={inputAgentIDControlerr} />
                    <BaseInput className="Our-team-page-input-agent" placeholder={textFolder.PropertyId} controller={inputProperyIDController} />
                    <button className='Our-team-page-input-button'>{textFolder.SearchBtnText}</button>
                </div>
                <div className='Our-team-page-office-agents'>
                    {getAgentsFullDive(agents)}
                </div>
            </div>
        </div>

    );
}


function getAgentsFullDive(agentBoxArr) {
    let agentFullBoxs = []
    let agentBoxArrKeys = Object.keys(agentBoxArr)

    for (let i = 0; i < agentBoxArrKeys.length; i++) {
        agentFullBoxs.push(getAgentFullDive(agentBoxArr[agentBoxArrKeys[i]], i))
    }

    return agentFullBoxs;
}

function getAgentFullDive(agentBox, index) {

    return (
        <div className='Our-team-page-agents-box' key={(index + 1) * 10}>
            <div className='Our-team-page-Text-bar'>
                <p className='Our-team-page-Text-head'>{agentBox.officeName}</p>
                <div className='Our-team-page-icon-text'>
                    <img id='Our-team-page-search-BuildingsOrange-icon' src={BuildingsOrange} />
                    <p className='Our-team-page-Text-icon'>{agentBox.location}</p>
                </div>
            </div>
            <div className='Our-team-page-agent-box'>
                {showAgentFun(agentBox.agents)}
            </div>
        </div>
    )
}

function showAgentFun(agentsBoxInfo) {
    let agentsBoxArr = [];

    for (let i = 0; i < agentsBoxInfo.length / 2; i++) {
        let tototaso;
        if (agentsBoxInfo[i * 2 + 1] != undefined) {
            tototaso = returnTwoAgentBox(agentsBoxInfo[i * 2], agentsBoxInfo[i * 2 + 1], i);
        } else {
            tototaso = returnTwoAgentBox(agentsBoxInfo[i * 2], 0, i);
        }
        agentsBoxArr.push(tototaso);
    }
    return agentsBoxArr
}

function returnTwoAgentBox(keyA, keyB, agentowAgentDivIndex = 12) {
    let agentBoxA
    let agentBoxB

    agentBoxA = returnAgentBox(keyA, (agentowAgentDivIndex + 1) * 100)

    if (keyB == 0) {
        agentBoxB = returnAgentLierBox((agentowAgentDivIndex + 2) * 100)
    } else {
        agentBoxB = returnAgentBox(keyB, (agentowAgentDivIndex + 2) * 100)
    }

    return (
        <div key={agentowAgentDivIndex} className='Our-team-page-tou-agent-box'>
            <div className='Our-team-page-agent-box-A'>
                {agentBoxA}
            </div>
            <div className='Our-team-page-agent-box-A'>
                {agentBoxB}
            </div>
        </div>
    )
}

function returnAgentBox(agentInfro, agentKey) {
    return (<OurTeamAgentsDes agentInfro={agentInfro} agentKey={agentKey} />)
}

function returnAgentLierBox() {
    return (
        <div className='Our-team-page-lier-agent-box' key={12458}></div>
    );
}


export default OurTeamPage;