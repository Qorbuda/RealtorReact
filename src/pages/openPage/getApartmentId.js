
import OpenHomePage from '../openHomePage.js';
import { useNavigate, useLocation } from 'react-router-dom';

var activApartmentId = ''

function GetApartmentId(apartmentId = "") {

    if(apartmentId == ""){
        return activApartmentId
    }else{
        activApartmentId = apartmentId
    }
    
}

export default GetApartmentId;