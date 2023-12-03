import AddPropertyMapComponent from "../components/addPropertyMap/AddPropertyMapComponent";
import React from "react";
import "./mapStyle/map-page-styles.css";

import UserPage from "./userPage/userPage";

function FranchisePage() {
    return (
        <div className="d-flex  justify-content-center " >
            <UserPage></UserPage>
        </div>
    );
}

export default FranchisePage;