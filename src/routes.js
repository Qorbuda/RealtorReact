import React from 'react';


const Routes = (userType) => {
    switch (userType) {
        case "user":
            return "<UserBase />"
        case "manager":
            return "<ManagerBase />"
        case "admin":
            return "<AdminBase />"
    };
};

export default Routes;