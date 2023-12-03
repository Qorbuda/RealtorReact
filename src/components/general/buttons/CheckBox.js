import React from 'react';

import './buttons.css'

function CheckBox({ id, keyId, text, value = false, onChange }) {
  return (
    <label className="container" key={keyId}  >{text}
      <input className="container" type="checkbox" id={id} defaultChecked = {value} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
}

export default CheckBox;