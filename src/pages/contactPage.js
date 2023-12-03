import React, { useEffect, useState } from 'react';
import ContactPageAgentBox from '../components/contactComponents/contactPageAgentBox';
import LanguageSwitcher from '../components/secondary/localization/LanguageSwitcher';
import axios from 'axios';
import getActivLanguageStatus from '../components/secondary/localization/getActivLanguageStatus'

import "./pageStyle/contactPageStyle.css";

var testArray = [
    {
        "OfficeName": "Batumi Central Office",
        "Address": "26 May str., # 68, Batumi",
        "Name": "Tamuna Tonoyan",
        "Position": "Branch Manager",
        "Mail": "info@batumi-realtor.com",
        "Phone": "+995 599 540 315",
        "Image": "https://rb.gy/m0v7yt"
    },
    {
        "OfficeName": "Batumi Central Office",
        "Address": "26 May str., # 68, Batumi",
        "Name": "Tamuna Tonoyan",
        "Position": "Branch Manager",
        "Mail": "info@batumi-realtor.com",
        "Phone": "+995 599 540 315",
        "Image": "https://rb.gy/m0v7yt"
    },
    {
        "OfficeName": "Batumi Central Office",
        "Address": "26 May str., # 68, Batumi",
        "Name": "Tamuna Tonoyan",
        "Position": "Branch Manager",
        "Mail": "info@batumi-realtor.com",
        "Phone": "+995 599 540 315",
        "Image": "https://rb.gy/m0v7yt"
    },
    {
        "OfficeName": "Batumi Central Office",
        "Address": "26 May str., # 68, Batumi",
        "Name": "Tamuna Tonoyan",
        "Position": "Branch Manager",
        "Mail": "info@batumi-realtor.com",
        "Phone": "+995 599 540 315",
        "Image": "https://rb.gy/m0v7yt"
    },
    {
        "OfficeName": "Batumi Central Office",
        "Address": "26 May str., # 68, Batumi",
        "Name": "Tamuna Tonoyan",
        "Position": "Branch Manager",
        "Mail": "info@batumi-realtor.com",
        "Phone": "+995 599 540 315",
        "Image": "https://rb.gy/m0v7yt"
    }
]




function ContactPage() {
    const [agentsArr, setAgents] = useState([]);
    useEffect(() => {
        var lang = getActivLanguageStatus();
        var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
        axios.get(`https://localhost:44394/api/Agents/get-contact-agents?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setAgents(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    var textFolder = LanguageSwitcher().Contact;

    return (
        <div className='Contact-page-full-div'>
            <div className='Contact-page-title-text'>
                <p className='Contact-page-title'>{textFolder.ContactUs}</p>
            </div>
            <div className='Contact-page-agents-full-div'>
                {showAgentFun(agentsArr)}
            </div>
        </div>
    );

}

function showAgentFun(agentsArr) {

    let dobleBoxArr = [];
    let tototaso
    for (let i = 0; i < agentsArr.length / 2; i++) {

        if (agentsArr[i * 2 + 1] != undefined) {
            tototaso = returnTwoAgentDiv(agentsArr[i * 2], agentsArr[i * 2 + 1], i);
        } else {
            tototaso = returnTwoAgentDiv(agentsArr[i * 2], 0, i);
        }
        dobleBoxArr.push(tototaso);
    }
    return dobleBoxArr
}

function returnTwoAgentDiv(keyA, keyB, divKey) {

    let agentBoxA = returnAgentBox(keyA, divKey)
    let agentBoxB

    if (keyB == 0) {
        agentBoxB = returnAgentLierBox(divKey)
    } else {
        agentBoxB = returnAgentBox(keyB, divKey)
    }

    return (
        <div key={divKey} className='Contact-page-tou-agent-box'>
            <div className='Contact-page-page-agent-box-A'>
                {agentBoxA}
            </div>
            <div className='Contact-page-page-agent-box-A'>
                {agentBoxB}
            </div>
        </div>
    )
}

function returnAgentBox(agentInfo, agentKey) {
    return (<ContactPageAgentBox agentKey={agentKey} agentInfo={agentInfo} />)
}

function returnAgentLierBox(divKey) {
    return (
        <div className="Contact-page-page-lier-agent-box" key={divKey}></div>
    );
}






export default ContactPage;