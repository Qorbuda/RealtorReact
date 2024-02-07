import React, { useState, useEffect } from 'react';
import './pageStyle/openHomePage.css';
import OpenHomePageHeaderComponent from '../components/openHomePage/header/openHomePageHeader';
import OpenHomePageBodyComponent from '../components/openHomePage/body/openHomePageBody.js';
import OpenHomePageImagesComponent from '../components/openHomePage/images/openHomePageImages.js';
import OpenHomePageFooterComponent from '../components/openHomePage/postPropertyFooter/postPropertyFooter.js';
import SendMessageOpenApartment from '../contactMessage/sendMessageOpenApartment.js';
import GetApartmentId from './openPage/getApartmentId.js';
import OpenHomMainPage from '../components/openHomePage/openHomMainPage.js';
import OpenHomMainPageAgents from '../components/openHomePage/openHomMainPageAgents.js';
import { useParams } from 'react-router-dom';
import { InvalidTokenError, jwtDecode } from 'jwt-decode';

const testMessage =
{
  "headerInfo": {
    "title": "Stylish, 3 bdr Villa Elis, private pool & garden",
    "itemcode": "2645137",
    "id":0
  },
  "imageInfo": {
    "mainImage": "",
    "allImage": []
  },
  "mapCordinant": {
    "mapCordinates": [44.78051068760388, 41.72298521914652]
  },
  "realtorInfo": {

    "date": "2023-02-11",
    "price": {
      "gel": 123456,
      "usd": 12345
    },
    "floor": 8,
    "bedroom": 1,
    "bathroom": 1,
    "personalID": 2645137,
    "fullSpace": 2645137,
    "dealType": 2645137,
    "address": "didube",
    "city": "Tbilisi",
    "country": 2645137,
    "view": 2645137,
    "realtorImage": "realtorPhoto.png",
    "realtorName": "Izaura Kvaratskhelia",
    "realtorPhone": "+995 599 540 315",
    "agentLanguage": { "ka": true, "en": true, "ru": false },
    "apartmentDescription": "Lorem ipsum dolor sit amet consectetur. Mi pharetra diam donec nisl. Hac sed suspendisse orci ut ac curabitur ultrices fringilla. Pretium mattis sapien sed enim et eget quam purus massa. Sed consequat non gravida nisi purus morbi ac sollicitudin purus.",
  },
  "PopularApartmentsInfo": {
    "apartmentsBoxInfo": [{
      "id": 2,
      "itemCode": "4817",
      "isActive": true,
      "areaSize": 0,
      "price": {
        "usd": 1000,
        "gel": 600
      },
      "makerId": 62,
      "areaSizeFull": 70,
      "longtitude": "41.610374                                                                                                                                                                                                                                                      ",
      "latitude": "41.637722                                                                                                                                                                                                                                                      ",
      "siteurl": "https://www.myflats.ge/",
      "streetsId": 47,
      "adress": "Sherif Khimshiashvili str. : corpus 37   bina 107",
      "flatNumber": "0",
      "dealTypeId": 11,
      "building": "",
      "mainImage": null,
      "mainImagePath": "upload/items/9529",
      "viewCounter": 1216,
      "floor": "9",
      "cityName": "ბათუმი",
      "countryName": "საქართველო",
      "estateCategory": "ბინები",
      "name": "Tamuna",
      "lastName": "Tonoyan",
      "mobileNumber": "+995322422093, +995577374230",
      "email": "info@batumi-realtor.com",
      "avatarImage": "0572a7281a98ef1c39dbb510ae7866b2.jpg",
      "agentId": 62,
      "editDate": "2016-07-01T17:42:40",
      "createdAt": "2016-07-01T17:42:40",
      "owerTel": "557540826",
      "personalId": "574838481",
      "dealType": "ქირავდება დღიურად",
      "itemLangId": 1,
      "cityLangId": 1,
      "escLangId": 1,
      "dealLangId": 1,
      "countryLangId": 1,
      "bathrooms": "1",
      "bedroom": "3",
      "cityId": 3,
      "estateCategoryId": 10,
      "room": 11
    }, {
      "id": 2,
      "itemCode": "4817",
      "isActive": true,
      "areaSize": 0,
      "price": {
        "usd": 1000,
        "gel": 600
      },
      "makerId": 62,
      "areaSizeFull": 70,
      "longtitude": "41.610374                                                                                                                                                                                                                                                      ",
      "latitude": "41.637722                                                                                                                                                                                                                                                      ",
      "siteurl": "https://www.myflats.ge/",
      "streetsId": 47,
      "adress": "Sherif Khimshiashvili str. : corpus 37   bina 107",
      "flatNumber": "0",
      "dealTypeId": 11,
      "building": "",
      "mainImage": null,
      "mainImagePath": "upload/items/9529",
      "viewCounter": 1216,
      "floor": "9",
      "cityName": "ბათუმი",
      "countryName": "საქართველო",
      "estateCategory": "ბინები",
      "name": "Tamuna",
      "lastName": "Tonoyan",
      "mobileNumber": "+995322422093, +995577374230",
      "email": "info@batumi-realtor.com",
      "avatarImage": "0572a7281a98ef1c39dbb510ae7866b2.jpg",
      "agentId": 62,
      "editDate": "2016-07-01T17:42:40",
      "createdAt": "2016-07-01T17:42:40",
      "owerTel": "557540826",
      "personalId": "574838481",
      "dealType": "ქირავდება დღიურად",
      "itemLangId": 1,
      "cityLangId": 1,
      "escLangId": 1,
      "dealLangId": 1,
      "countryLangId": 1,
      "bathrooms": "1",
      "bedroom": "3",
      "cityId": 3,
      "estateCategoryId": 10,
      "room": 11
    }, {
      "id": 2,
      "itemCode": "4817",
      "isActive": true,
      "areaSize": 0,
      "price": {
        "usd": 1000,
        "gel": 600
      },
      "makerId": 62,
      "areaSizeFull": 70,
      "longtitude": "41.610374                                                                                                                                                                                                                                                      ",
      "latitude": "41.637722                                                                                                                                                                                                                                                      ",
      "siteurl": "https://www.myflats.ge/",
      "streetsId": 47,
      "adress": "Sherif Khimshiashvili str. : corpus 37   bina 107",
      "flatNumber": "0",
      "dealTypeId": 11,
      "building": "",
      "mainImage": null,
      "mainImagePath": "upload/items/9529",
      "viewCounter": 1216,
      "floor": "9",
      "cityName": "ბათუმი",
      "countryName": "საქართველო",
      "estateCategory": "ბინები",
      "name": "Tamuna",
      "lastName": "Tonoyan",
      "mobileNumber": "+995322422093, +995577374230",
      "email": "info@batumi-realtor.com",
      "avatarImage": "0572a7281a98ef1c39dbb510ae7866b2.jpg",
      "agentId": 62,
      "editDate": "2016-07-01T17:42:40",
      "createdAt": "2016-07-01T17:42:40",
      "owerTel": "557540826",
      "personalId": "574838481",
      "dealType": "ქირავდება დღიურად",
      "itemLangId": 1,
      "cityLangId": 1,
      "escLangId": 1,
      "dealLangId": 1,
      "countryLangId": 1,
      "bathrooms": "1",
      "bedroom": "3",
      "cityId": 3,
      "estateCategoryId": 10,
      "room": 11
    },]
  }
}

function OpenHomePage() {
    const { id, langId } = useParams();

    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);
    const [openHomePageFullInfo, setPropertyDetail] = useState(null);
    useEffect(() => {
        propertyDetail();
    }, []);

        async function propertyDetail() {
            var data = await SendMessageOpenApartment(id, langId);
            setPropertyDetail(data);
          }
    return (<>
                {openHomePageFullInfo && (user?.id ? <OpenHomMainPageAgents fullHomeInfo={openHomePageFullInfo} /> : 
                <OpenHomMainPage fullHomeInfo={openHomePageFullInfo} />)}

            </>
    );
}

export default OpenHomePage;