import React, { useState, useEffect } from "react";
import "./popapFunction.css"
import HistoriChangeBox from "./historiChangeBox";
import BaseSelect from "../../components/general/forms/BaseSelect";
import { SelectController } from "../../components/general/forms/controllers";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';


const PopapRestoreButton = ({ open, onClose, historyFullInffoArr }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);

      }
  }, []);
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
            <p className="history-popap-title-title">Do you really want to restore this deleted item?</p>
            <button className='history-popap-title-x-button' onClick={onClose}>x</button>
          </div>
          <div className="history-popap-title-line"></div>

          <div className='delete-popap-change-box-full-div'>
            <div className='delete-popap-change-box-div'>
              <button className="delete-popup-button-delete" onClick={() => {restoreProperty(historyFullInffoArr, user.id )}} >RESTORE</button>
              <button className="delete-popup-button-cancel" onClick={onClose}>CANCEL</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  async function restoreProperty(itemId, agentId){
    var reasText = "";
    const response = await fetch(`https://api.myflats.ge/api/Appartments/restore-appartment?itemId=${itemId}&agentId=${agentId}`);
    onClose()
    window.location.reload(true)
  }
};


export default PopapRestoreButton;
