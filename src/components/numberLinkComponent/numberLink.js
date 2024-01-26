import React from "react";
import WhatsUpLinkUtil from "../../utils/whatsUpLinkUtil";

const NumberLink = ({phoneNumber}) => {

    const handleNumberClick = () => {
        WhatsUpLinkUtil.openLink(phoneNumber);        
    }

    return (
        <div style={{cursor: "pointer"}} onClick={handleNumberClick}>
            {phoneNumber}
        </div>
    )
}

export default NumberLink;
