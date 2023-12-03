import React from 'react';

import './forms.css';

function BaseTextArea({placeholder, controller}) {
    return (
        <textarea className="form-control ts-textarea" type="text" placeholder={placeholder} onChange={(event) => {controller.setState(event.target.value)}} value={controller.state}></textarea>
    );
};

export default BaseTextArea;