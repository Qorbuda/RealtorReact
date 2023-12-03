import React from "react";
import PropertyAddInfoSaver from "../PropertyAddition/propertyAddInfoSaver";
import PhoneCallOrange from "../../components/icons/PhoneCallOrange.svg"

import "./apartmentBoxFromAgent.css";


function AgentInfoBox(apartmentInfo) {

    apartmentInfo = apartmentInfo.apartmentInfo

    return (
        <div className="Apartment-box-from-agent-agent-info-full-div">
            <img className='Apartment-box-from-agent-agent-info-image' src={`https://localhost:44394/api/image/upload/${apartmentInfo.agentImage}`} />
            <div className="Apartment-box-from-agent-agent-info-text-div">
                <p className="Apartment-box-from-agent-agent-info-name-text">{apartmentInfo.agentName}</p>
                <p className="Apartment-box-from-agent-agent-info-office-text">{apartmentInfo.office}</p>
                <div className="Apartment-box-from-agent-agent-info-phone-div">
                    <img className="Apartment-box-from-agent-agent-info-phone-icon" src={PhoneCallOrange} />
                    <p className="Apartment-box-from-agent-agent-info-phone-text">{apartmentInfo.phone}</p>
                </div>
            </div>
        </div>
    );

}

export default AgentInfoBox;
