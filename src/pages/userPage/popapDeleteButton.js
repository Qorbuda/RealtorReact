import React, { useState, useEffect } from "react";
import "./popapFunction.css"
import HistoriChangeBox from "./historiChangeBox";
import BaseSelect from "../../components/general/forms/BaseSelect";
import { SelectController } from "../../components/general/forms/controllers";
import { InvalidTokenError, jwtDecode } from 'jwt-decode';


const PopapDeleteButton = ({ open, onClose, historyFullInffoArr }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);

      }
  }, []);

  const [reason, setReason] = useState([]);
  var reasons = [{ name: "sold", index: 1 }, { name: "The owner's number is disconnected", index: 2 }, { name: "Double", index: 3 }]
  var deleteReason = new SelectController(reason, setReason, reasons)

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
            <p className="history-popap-title-title">DELETE</p>
            <button className='history-popap-title-x-button' onClick={onClose}>x</button>
          </div>
          <div className="history-popap-title-line"></div>

          <div className="delete-popap-change-BaseSelect">
            <p className="delete-popap-change-BaseSelect-text">Reason for deletion </p>
            <BaseSelect placeholder={"Choose a reason"} controller={deleteReason} />
          </div>

          <div className='delete-popap-change-box-full-div'>
            <div className='delete-popap-change-box-div'>
              <button className="delete-popup-button-delete" onClick={() => {deleteProperty(historyFullInffoArr, user.id, reason )}} >DELETE</button>
              <button className="delete-popup-button-cancel" onClick={onClose}>CANCEL</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  async function deleteProperty(itemId, agentId, reason){
    var reasText = reasons.find(i => i.index == reason).name;
    const response = await fetch(`https://167.86.75.34/api/Appartments/delete-appartment?itemId=${itemId}&agentId=${agentId}&reason=${reasText}`);
    onClose()
    window.location.reload(true)
  }
};


export default PopapDeleteButton;
