import React, { useEffect, useState } from 'react';
import "./popapFunction.css"
import HistoriChangeBox from "./historiChangeBox";
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher"
import BaseSelect from '../../components/general/forms/BaseSelect';
import { InputController, SelectController } from "../../components/general/forms/controllers";

import axios from 'axios';


const PopapEditAgent = ({ open, onClose, itemId }) => {
  const [officeSelect, setOfficeSelect] = useState(0);
  const [agentSelect, setagentSelect] = useState(0);
  
  const [offices, setOffices] = useState([]);
  const [agents, setAgents] = useState([]);
  var textFolder = LanguageSwitcher().PostPropertyPage;
  
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

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <div className="history-popap-title-div">
            <p className="history-popap-title-title">CHANGE AGENT</p>
            <button className='history-popap-title-x-button' onClick={onClose}>x</button>
          </div>
          <div className="history-popap-title-line"></div>
          <div className='add-document-popap-change-box-full-div'>
              <BaseSelect nameOfSelect={textFolder.ownerPage.Office} controller={officeController} placeholder={textFolder.ownerPage.Office}/>
              <BaseSelect nameOfSelect={textFolder.ownerPage.Agent} controller={agentController} placeholder={textFolder.ownerPage.Agent} />
          </div>
          <div className='delete-popap-change-box-full-div'>
            <div className='add-document-popap-change-box-div'>
              <button className="add-document-popup-button-delete" onClick={() => changeAgent()}>CHANGE</button>
              <button className="delete-popup-button-cancel" onClick={onClose}>CANCEL</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  async function changeAgent(){
    const response = await fetch(`https://api.myflats.ge/api/Appartments/change-agent?itemId=${itemId}&agentId=${agentSelect}`);

    onClose()
  }
};

function getHistoriChangeBox(historisInfo) {
  let historiBoxArr = []
  for (var i = 0; i < historisInfo.length; i++) {
    historiBoxArr.push(<HistoriChangeBox key={i} historiBoxInfo={historisInfo[i]} />)
  }
  return (historiBoxArr)
}

export default PopapEditAgent;
