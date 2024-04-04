import React from "react";
import "./PropertyAdditionStyle/showAddObjectStyle.css"
import { Checkmark } from "react-checkmark";

const ShowAddObject = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='Checkmark-full-div'>
            <div className="Checkmark-div">
                <Checkmark size={'196'} color='#03001e' />
            </div>
        </div>
    );
};

export default ShowAddObject;
