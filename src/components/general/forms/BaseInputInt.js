import React from 'react';

import './forms.css';

function BaseInputInt({placeholder, controller}) {
    return (
        <input className="form-control ts-form" step="1" type="number" placeholder={placeholder} onChange={(event) => {controller.setState(event.target.value)}} value={controller.state}></input>
    );
};

export default BaseInputInt;