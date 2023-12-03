import React from 'react';

import './buttons.css'

function RoundedButton({text, call_method, size='large', color='orange'}){
    var isDisabled = call_method === undefined ? true : false;

    return (
        <button className={`ts-btn ts-btn-rounded-${size} ts-btn-${color}`} onClick={call_method} disabled={isDisabled}>
            {text}
        </button>
    );
}

export default RoundedButton;