import React, { useEffect, useState } from 'react';
import PropertyAddInfoSaver from "../PropertyAddition/propertyAddInfoSaver";
import { useNavigate, useLocation } from 'react-router-dom';
import getActivLanguageStatus from '../../components/secondary/localization/getActivLanguageStatus'


// async function ApartmentEdit(apartmentID) {
//     //const [inputInfo, setInput] = useState(PropertyAddInfoSaver());
//     var inputInfo = PropertyAddInfoSaver();
//     const [general, setGeneral] = useState(inputInfo.GeneralInformation)
//     const [owner, setOwner] = useState(inputInfo.Owner)
//     const [property, setProperty] = useState(inputInfo.Property)
//     const [description, setDescription] = useState(inputInfo.description)
//     const [docs, setDocs] = useState(inputInfo.PhotosAndDocs)
//     getEditApartmentInfo(apartmentID, setGeneral)//, setOwner, setProperty, setDescription, setDocs)//getApartmentInfo(apartmentID);
//     // getEditApartmentInfo(apartmentID)
//     // for (const [key, value] of Object.entries(newInputInfo)) {
//     //     inputInfo[key] = value
//     // }
//     // useEffect(() => {
        
//     //     setInput(newInputInfo);

//     //     }, []);
// }

function getApartmentInfo(apartmentId) {
    let test = {
        "GeneralInformation": {
            "City": {
                "index": 0,
                "name": ""
            },
            "Street": {
                "index": 0,
                "name": ""
            },
            "District": '1',
            "Building": '2',
            "Number": '3',
            "MapCordinates": {
                "latCord": "1",
                "lngCord": "2"
            }
        },
        "Owner": {
            "Name": "4",
            "Surname": "5",
            "PersonalId": "6",
            "Phone": "8",
            "SecendPhone": "7",
            "Email": "9",
            "Office": {
                "index": 0,
                "name": ""
            },
            "Agent": {
                "index": 0,
                "name": ""
            },
        },
        "Property": {
            "Category": {
                "index": 0,
                "name": ""
            },
            "Deal": {
                "index": 0,
                "name": ""
            },
            "Repair": {
                "index": 0,
                "name": ""
            },
            "Space": "10",
            "Floor": "11",
            "Rooms": "12",
            "Bedrooms": "13",
            "Bathrooms": "14",
            "Price": "15",
            "CheckBoxs": "empty"


        },
        "Description": {
            "Description": ""
        },

        "PhotosAndDocs": {
            "MainImage": {
                "imageName": "",
                "image": ""
            },
            "Images": {
                "imageName": "",
                "image": []
            },
            "docs": {
                "docsName": "",
                "docs": ""
            },
            "Agreement": {
                "docsName": "",
                "docs": ""
            },
            "firstLink": "",
            "secendLink": "",
        },
    }

    return (test);
}
async function ApartmentEdit(apartmentId) {
    try {
        var lang = getActivLanguageStatus();
        var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
        const response = await fetch(`http://167.86.75.34/api/Appartments/get-edit-appartment?id=${apartmentId}&langId=${langId}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
}

export default ApartmentEdit;
