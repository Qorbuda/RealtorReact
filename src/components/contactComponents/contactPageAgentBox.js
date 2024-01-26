import React, { useEffect, useState } from 'react';
// import BuildingsOrange from '../components/icons/BuildingsOrange.svg'
import BuildingsOrange from '../icons/BuildingsOrange.svg'
import MailIcon from '../icons/MailIcon.svg'
import PhoneCallOrange from '../icons/PhoneCallOrange.svg'



import './contactPageAgentBox.css'
import NumberLink from '../numberLinkComponent/numberLink';


function ContactPageAgentBox(agentInfo) {

    if (agentInfo.agentInfo == undefined) return;

    return (
        <div className='Contact-page-agent-box-full-div' key={agentInfo.agentKey}>
            <div className='Contact-page-agent-box-div'>
                <div className='Contact-page-agent-text-title'>
                    <p className='Contact-page-agent-title'>{agentInfo.agentInfo.officeName}</p>
                    <div className='Contact-page-agent-title-info'>
                        <img className='Contact-page-agent-BuildingsOrange-icon' src={BuildingsOrange} />
                        <p className='Contact-page-agent-icon-text'>{agentInfo.agentInfo.address}</p>
                    </div>
                </div>
                <div className='Contact-page-agent-text-info'>
                    <img src={`https://api.myflats.ge/api/image/${agentInfo.agentInfo.image}`} className="Contact-page-agent-agent-image" />
                    <div className="Contact-page-agent-agent-info-text-div">
                        <p className='Contact-page-agent-info-text-name'>{agentInfo.agentInfo.name}</p>
                        <p className='Contact-page-agent-info-text-status'>{agentInfo.agentInfo.position}</p>
                        <div className='Contact-page-agent-info-text-mail-div'>
                            <img className='Contact-page-agent-Mail-icon' src={MailIcon} />
                            <p className='Contact-page-agent-Mail-icon-text'>{agentInfo.agentInfo.mail}</p>

                        </div>
                        <div className='Contact-page-agent-info-text-mail-div'>
                            <img className='Contact-page-agent-Mail-icon' src={PhoneCallOrange} />
                            <p className='Contact-page-agent-Mail-icon-text'><NumberLink phoneNumber={agentInfo.agentInfo.phone}/></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ContactPageAgentBox;