import React from "react";
import "./popapFunction.css"
import HistoriChangeBox from "./historiChangeBox";


const PopapHistoryButton = ({ open, onClose, historyFullInffoArr }) => {
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
            <p className="history-popap-title-title">HISTORY</p>
            <button className='history-popap-title-x-button' onClick={onClose}>x</button>
          </div>
          <div className="history-popap-title-line"></div>
          <div className='history-popap-change-box-full-div'>
            <div className='history-popap-change-box-div'>
              {getHistoriChangeBox(historyFullInffoArr)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getHistoriChangeBox(historisInfo) {
  let historiBoxArr = []
  for (var i = 0; i < historisInfo.length; i++) {
    historiBoxArr.push(<HistoriChangeBox key={i} historiBoxInfo={historisInfo[i]} />)
  }
  return (historiBoxArr)
}

export default PopapHistoryButton;
