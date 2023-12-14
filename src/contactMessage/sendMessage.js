import React from 'react';
import getActivLanguageStatus from '../components/secondary/localization/getActivLanguageStatus'


const testMessage1 = [
  {
    "id": 21,
    "itemCode": "4817",
    "isActive": true,
    "areaSize": 0,
    "price": {
      "usd": 500,
      "gel": 220
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
  }
]


const testMessage = [
  {
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
  }
]

async function SendMessage(clickCount, filter) {
  //return ([testMessage, testMessage1]);
  try {
    // Assuming you are using fetch or some asynchronous operation to get data from the backend
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    const response = await fetch(`http://167.86.75.34/api/Appartments/get-appartments?filterJson=${JSON.stringify(filter)}&langId=${langId}&page=${clickCount}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}
export default SendMessage;