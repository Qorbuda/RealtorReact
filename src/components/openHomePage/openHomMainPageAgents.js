import React, { useState, useEffect } from 'react';
import '../../pages/pageStyle/openHomePage.css';
import OpenHomePageHeaderComponent from '../openHomePage/header/openHomePageHeader';
import OpenHomePageBodyComponent from '../openHomePage/body/openHomePageBody.js';
import OpenHomePageImagesComponent from '../openHomePage/images/openHomePageImages.js';
import OpenHomePageFooterComponent from '../openHomePage/postPropertyFooter/postPropertyFooter.js';
import OpenHomePageHeaderComponentAgents from './header/openHomePageHeaderAgents.js';
import CommentBar from './comment/commentBar.js';


const fullHomeInfops =
{
  "headerInfo": {
    "title": "sales departament #5",
    "itemCode": "4162035             ",
    "id": 0
  },
  "imageInfo": {
    "mainImage": null,
    "allImage": [
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721054076.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721035962.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721039635.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721045147.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721042499.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721033454.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721047748.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721050445.jpg",
      "upload/newItems/2023/October/2023-10-19/id-42441/FB_IMG_1697721030329.jpg"
    ]
  },
  "mapCoordinates": {
    "latCord": "41.635395691750205",
    "lngCord": "41.61097526550293"
  },
  "realtorInfo": {
    "date": "10/19/2023",
    "price": {
      "usd": 78000,
      "gel": 209029
    },
    "floor": "17",
    "bedroom": "1",
    "bathroom": "1",
    "personalID": "558167374",
    "fullSpace": "37",
    "dealType": "იყიდება",
    "address": null,
    "city": "ბათუმი",
    "country": "საქართველო",
    "view": 108,
    "realtorImage": "upload/agents/no-profile-img.png",
    "realtorName": "Oleh Yemelianenko",
    "realtorPhone": "+995 557 738 816",
    "agentLanguage": {
      "ka": false,
      "en": true,
      "ru": true
    },
    "apartmentDescription": "Вашему вниманию представляется многофункциональная 37м2 квартира на 17 этаже в комплексе Inturist Residents в самом сердце Батуми в непосредственной близости к морю.\nВыполнен дизайнерский ремонт с применением высококачественных материалов, имеется вся нео"
  },
  "comments":
    [
      {
        "id": 9172,
        "commentText": "10 აპრილიდან აქირავებს",
        "createDate": "2022-03-29T14:24:55",
        "agentName": "Ruso Qavzharadze",
        "agentImage": "upload/agents/IMG_20211011_122749.jpg"
      },
      {
        "id": 9792,
        "commentText": "თვისუფალია",
        "createDate": "2022-04-13T12:40:47",
        "agentName": "Ruso Qavzharadze",
        "agentImage": "upload/agents/IMG_20211011_122749.jpg"
      },
      {
        "id": 9989,
        "commentText": "Gaqiravda",
        "createDate": "2022-04-16T09:15:21",
        "agentName": "Keti Pataraia",
        "agentImage": "upload/agents/IMG-20210302-WA0001.jpg"
      }
    ],
  "popularApartmentsInfo": {
    "apartmentsBoxInfo": [
      {
        "id": 42431,
        "itemCode": "6472305             ",
        "isActive": true,
        "areaSize": 0,
        "price": {
          "usd": 112000,
          "gel": 300145
        },
        "makerId": 22768,
        "areaSizeFull": 72,
        "longtitude": "41.603132486343384                                                                                                                                                                                                                                             ",
        "latitude": "41.631674953449185                                                                                                                                                                                                                                             ",
        "siteurl": "https://www.batumi-realtor.com/",
        "streetsId": 47,
        "adress": null,
        "flatNumber": "",
        "dealTypeId": 8,
        "building": "49",
        "mainImage": null,
        "mainImagePath": "upload/newItems/2023/October/2023-10-19/id-42431",
        "viewCounter": 11,
        "floor": "10",
        "cityName": "ბათუმი",
        "countryName": "საქართველო",
        "estateCategory": "ბინები",
        "name": "Yulia",
        "lastName": "Mytnik",
        "mobileNumber": "+995 551 509 745",
        "email": "julienne.rire@gmail.com",
        "avatarImage": "aa4c118eec91daef344a11a45b1fbe29.jpg",
        "agentId": 22768,
        "editDate": "2023-10-19T14:33:44",
        "createdAt": "2023-10-19T14:33:44",
        "owerTel": "591022653",
        "personalId": "",
        "dealType": "იყიდება",
        "itemLangId": 1,
        "cityLangId": 1,
        "escLangId": 1,
        "dealLangId": 1,
        "countryLangId": 1,
        "bathrooms": "1",
        "bedroom": "2",
        "room": "3",
        "officeName": "sales departament #5",
        "cityId": 3,
        "estateCategoryId": 10
      },
      {
        "id": 42426,
        "itemCode": "2147305             ",
        "isActive": true,
        "areaSize": 0,
        "price": {
          "usd": 110000,
          "gel": 294785
        },
        "makerId": 22905,
        "areaSizeFull": 67,
        "longtitude": "41.59153829671021                                                                                                                                                                                                                                              ",
        "latitude": "41.620833139516805                                                                                                                                                                                                                                             ",
        "siteurl": "https://www.batumi-realtor.com/",
        "streetsId": 123,
        "adress": null,
        "flatNumber": "",
        "dealTypeId": 8,
        "building": "2",
        "mainImage": null,
        "mainImagePath": "upload/newItems/2023/October/2023-10-19/id-42426",
        "viewCounter": 4,
        "floor": "3",
        "cityName": "ბათუმი",
        "countryName": "საქართველო",
        "estateCategory": "ბინები",
        "name": "Maria",
        "lastName": "Bushneva",
        "mobileNumber": "+995 577 247 518",
        "email": "maryabushe555@gmail.com",
        "avatarImage": "d904ebd1950e3f51b70ccf61b89e9b40.JPG",
        "agentId": 22905,
        "editDate": "2023-10-19T13:59:13",
        "createdAt": "2023-10-19T13:59:13",
        "owerTel": "595047003",
        "personalId": "",
        "dealType": "იყიდება",
        "itemLangId": 1,
        "cityLangId": 1,
        "escLangId": 1,
        "dealLangId": 1,
        "countryLangId": 1,
        "bathrooms": "1",
        "bedroom": "1",
        "room": "2",
        "officeName": "Sales department #4",
        "cityId": 3,
        "estateCategoryId": 10
      },
      {
        "id": 42424,
        "itemCode": "7231056             ",
        "isActive": true,
        "areaSize": 0,
        "price": {
          "usd": 61000,
          "gel": 163471
        },
        "makerId": 22905,
        "areaSizeFull": 35,
        "longtitude": "41.591575416573                                                                                                                                                                                                                                                ",
        "latitude": "41.62014264916399                                                                                                                                                                                                                                              ",
        "siteurl": "https://www.batumi-realtor.com/",
        "streetsId": 89,
        "adress": null,
        "flatNumber": "",
        "dealTypeId": 8,
        "building": "5",
        "mainImage": null,
        "mainImagePath": "upload/newItems/2023/October/2023-10-19/id-42424",
        "viewCounter": 3,
        "floor": "5",
        "cityName": "ბათუმი",
        "countryName": "საქართველო",
        "estateCategory": "ბინები",
        "name": "Maria",
        "lastName": "Bushneva",
        "mobileNumber": "+995 577 247 518",
        "email": "maryabushe555@gmail.com",
        "avatarImage": "d904ebd1950e3f51b70ccf61b89e9b40.JPG",
        "agentId": 22905,
        "editDate": "2023-10-19T13:32:12",
        "createdAt": "2023-10-19T13:29:03",
        "owerTel": "511193567",
        "personalId": "",
        "dealType": "იყიდება",
        "itemLangId": 1,
        "cityLangId": 1,
        "escLangId": 1,
        "dealLangId": 1,
        "countryLangId": 1,
        "bathrooms": "1",
        "bedroom": "1",
        "room": "1",
        "officeName": "Sales department #4",
        "cityId": 3,
        "estateCategoryId": 10
      }
    ]
  }
}

function OpenHomMainPageAgents({ fullHomeInfo }) {

  // fullHomeInfo = fullHomeInfops
  //  
  return (
    <div className='post-property-page'>
      <div className='main-container'>
        <OpenHomePageHeaderComponentAgents titleInfo={fullHomeInfo} />
        <OpenHomePageImagesComponent mainImageInfo={fullHomeInfo.imageInfo.mainImage} imagesInfo={fullHomeInfo.imageInfo.allImage} />
        <OpenHomePageBodyComponent mapCoordinates={fullHomeInfo.mapCoordinates} realtorInfo={fullHomeInfo.realtorInfo} />
        <CommentBar commentstest={fullHomeInfo.comments} />
        <OpenHomePageFooterComponent popularProperties={fullHomeInfo.popularApartmentsInfo.apartmentsBoxInfo} />
      </div>
    </div>
  );
}

export default OpenHomMainPageAgents;