import React from "react";
import "./popapFunction.css"

const HistoriChangeBox = ({ key, historiBoxInfo }) => {

    return (
        <div key={key} className='History-change-box-page-fuul-div'>
            <div className="History-change-box-page-agent-div">
                <div className="History-change-box-page-agent">
                    <img className="History-change-box-page-agent-image" src={`https://api.myflats.ge/api/image/upload/${historiBoxInfo.image}`}></img>
                    <p className="History-change-box-page-change-deyt">{historiBoxInfo.changeDate}</p>
                    <p className="History-change-box-page-change-deyt">{historiBoxInfo.changeTime}</p>
                </div>
            </div>
            <div className="History-change-box-page-change-info-full-div">
                <div className="History-change-box-page-change-info-div">
                    <p className="History-change-box-page-agent-name">{historiBoxInfo.agentName}
                        <span className="History-change-box-page-agent-name-edit-text">{historiBoxInfo.changeStatus}</span>
                    </p>
                    <div className="History-change-box-page-title-line"></div>
                    <p className="History-change-box-page-change-text-div">{historiBoxInfo.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default HistoriChangeBox;
