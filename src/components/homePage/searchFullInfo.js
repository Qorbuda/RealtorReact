import React from 'react';


var searchFullDict = {
    "dealType": {
        "index": 0,
        "name": ""
    },
    "categoryApartments": {
        "index": 0,
        "name": ""
    },
    "repairs": {
        "index": 0,
        "name": ""
    },
    "city": {
        "index": 0,
        "name": ""
    },
    "street": {
        "index": 0,
        "name": ""
    },
    "room":"",
    "beadroom":"",
    "bathroom":"",
    "idNum":"",
    "phoneNum":"",
    "price":{
        "min":0,
        "max":10000000
    },
    "floor":{
        "min":0,
        "max":100000
    },
    "space":{
        "min":0,
        "max":100000
    },
    "myItems": false,
    "agentId": 0,
    "isNotActive": false

}


function SearchFullInfo(funName = "") {
    return searchFullDict;

}

export default SearchFullInfo;