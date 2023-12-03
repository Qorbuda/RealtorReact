import React from 'react';

import './forms.css';

function BaseInput({placeholder, controller}) {
    return (
        <input className="form-control ts-form" type="text" placeholder={placeholder} onChange={(event) => {controller.setState(event.target.value)}} value={controller.state}></input>
    );
};

export default BaseInput;