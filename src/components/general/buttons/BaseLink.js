import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import './buttons.css'

function BaseLink({text, link, color='orange'}){

    return (
        <Link to={link} className={`ts-btn ts-btn-${color}`}>{text}</Link>
    );
}

export default BaseLink;