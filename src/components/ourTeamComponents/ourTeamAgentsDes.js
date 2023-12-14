import React, { useEffect, useState } from 'react';
import Ka from '../icons/ka.svg'
import Eng from '../icons/eng.svg'
import Ru from '../icons/ru.svg'
import PhoneCallBlack from '../icons/PhoneCallBlack.svg'
import PropertyAddInfoSaver from '../../pages/PropertyAddition/propertyAddInfoSaver';
import LanguageSwitcher from '../secondary/localization/LanguageSwitcher';
import axios from 'axios';

import "./ourTeamAgentsDes.css"


function OurTeamAgentsDes(agentInfro, agentKey) {

    var textFolder = LanguageSwitcher().OurTeamPage;
    
    return (
        <div key={agentInfro.agentKey} className='Team-Agent-info-bar' >
            <img src={`http://167.86.75.34/api/image/${getInfroText(agentInfro.agentInfro, "agentMainImage")}`} alt="Image" className="Team-Agent-info-bar-img" />
            <div className='Team-Agent-info-text-bar'>
                <div className='Team-Agent-info-text'>
                    <div className='Team-Agent-info-name'>
                        <p className='Team-Agent-Name-Text'>{getInfroText(agentInfro.agentInfro, "fullName")}</p>
                        <p className='Team-Agent-self-position'>{getInfroText(agentInfro.agentInfro, "position")}</p>
                        <div className='Team-Agent-flags-holder' key={agentInfro.agentKey * 10}>
                            {getLanguageIcons(agentInfro.agentInfro.languages, agentInfro.agentKey)}
                        </div>
                    </div>
                    {/* <p className='Team-Agent-info-view-properties'>view properties</p> */}
                    <div className='Team-Agent-info-phone-numbers-bar'>
                            {getInfroPhone(agentInfro.agentInfro, "numbers", 0)}
                            {getInfroPhone(agentInfro.agentInfro, "numbers", 1)}
                    </div>
                    <button className='Team-Agent-info-button-bar'>
                        <p className='Team-Agent-info-button-text'>{textFolder.MessageToAgent}</p>
                    </button>

                </div>
            </div>
        </div>
    );
}


function getLanguageIcons(flagArr, flagIndexasd) {
    let activFlagArr = []
    let flagIndex = 0

    for (const [key, value] of Object.entries(flagArr)) {
        if (value) {
            let activFlag;
            if (key == "ka") {
                activFlag = <div key={flagIndex * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Ka} />
                </div>
            } else if (key == "en") {
                activFlag = <div key={(flagIndex + 1) * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Eng} />
                </div>
            } else if (key == "ru") {
                activFlag = <div key={(flagIndex + 2) * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Ru} />
                </div>
            }
            activFlagArr.push(activFlag);
        }
    };

    return (activFlagArr);
}

function getInfroText(mainInfom, TextKey, index = -1) {
    if (index == -1) return (mainInfom[TextKey])
    else return (mainInfom[TextKey][index])
}

function getInfroPhone(mainInfom, TextKey, index = -1){

    if (!mainInfom[TextKey][index] || mainInfom[TextKey][index]  == "") {
        return(
            <div className='Team-Agent-info-phone-number-bar'>
            </div>
        );
    } 
    return(
            <div className='Team-Agent-info-phone-number-bar'>
                <img className='Team-Agent-info-phone-icon' src={PhoneCallBlack} />
                <p className='Team-Agent-info-phone-number'> {mainInfom[TextKey][index]}</p>
            </div>
    );

}

export default OurTeamAgentsDes;