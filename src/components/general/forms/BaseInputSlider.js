import React from 'react';

import './forms.css';

function BaseInputSlider({placeholder, controller}) {
    return (
        <div>
            <input className=" form-control ts-form-test" type="text"  placeholder={placeholder} onChange={(event) => {controller.setState(event.target.value)}} value={controller.state}></input>
        </div>
    );
};

export default BaseInputSlider;