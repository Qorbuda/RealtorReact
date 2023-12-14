import React from 'react';
import getActivLanguageStatus from '../components/secondary/localization/getActivLanguageStatus'



const testMessage = [
  {
    "id": 2,
    "itemCode": "1234",
    "mainImage": "http://dummyimage.com/384x273",
    "addedDate": "2023-02-11",
    "titleBox": "Stylish, 3 bdr Villa Elis",
    "price": 240500,
    "floor": 10,
    "bedrooms": 2,
    "bathroom": 1,
    "agentImage": "http://dummyimage.com/384x273",
    "agentName": "Izaura Kvaratskhelia",
    "office": "Batumi Central Office",
    "phone": " +995 599 540 315",
    "fullSpace": 85,
    "dealType": "chuqdeba",
    "category": "ashenebuli",
    "address": "zemot",
    "city": "Tbilisi",
    "apartmentHistory": [
      {
        "image": "https://batumi-realtor.com/upload/agents/ebd6a5389bb69394d77155e81a20ff75.jpg",
        "agentName": "levaniko",
        "coment": "imitorm rom ",
        "changeDey": "2023-12-23",
        "changeTime": "15:32:12",
        "changeStatus": "რედაქტირება",
      },
      {
        "image": "https://batumi-realtor.com/upload/agents/ebd6a5389bb69394d77155e81a20ff75.jpg",
        "agentName": "levaniko",
        "coment": "imitorm rom ",
        "changeDey": "2023-12-23",
        "changeTime": "15:32:12",
        "changeStatus": "რედაქტირება",
      },
    ]
  }
]

const testMessage1 = [
  {
    "id": 23,
    "itemCode": "123",
    "mainImage": "http://dummyimage.com/384x273",
    "addedDate": "2023-02-11",
    "titleBox": "Stylish, 3 bdr Villa Elis",
    "price": 240500,
    "floor": 10,
    "bedrooms": 2,
    "bathroom": 1,
    "agentImage": "http://dummyimage.com/384x273",
    "agentName": "Izaura Kvaratskhelia",
    "office": "Batumi Central Office",
    "phone": " +995 599 540 315",
    "fullSpace": 85,
    "dealType": "chuqdeba",
    "category": "ashenebuli",
    "address": "zemot",
    "city": "Tbilisi",
    "apartmentHistory": [
      {
        "image": "https://batumi-realtor.com/upload/agents/ebd6a5389bb69394d77155e81a20ff75.jpg",
        "agentName": "levaniko",
        "coment": "imitorm rom ",
        "changeDey": "2023-12-23",
        "changeTime": "15:32:11",
        "changeStatus": "რედაქტირება",
      },
      {
        "image": "https://batumi-realtor.com/upload/agents/ebd6a5389bb69394d77155e81a20ff75.jpg",
        "agentName": "levaniko",
        "coment": "imitorm rom ",
        "changeDey": "2023-12-23",
        "changeTime": "15:32:11",
        "changeStatus": "რედაქტირება",
      },
    ]



  }
]


async function sendMessageLoginUsers(clickCount, filter) {
  // return ([testMessage, testMessage1]);
  try {
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    const response = await fetch(`http://167.86.75.34/api/Appartments/get-agent-appartment?filterJson=${JSON.stringify(filter)}&langId=${langId}&page=${clickCount}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export default sendMessageLoginUsers;