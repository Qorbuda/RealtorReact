import React from 'react';


var searchFullDict = {
    "dealType": {
        "index": 0,
        "name": "firsttime"
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
    "price":{
        "min":0,
        "max":0
    },
    "floor":{
        "min":0,
        "max":0
    },
    "space":{
        "min":0,
        "max":0
    }

}


function SearchFullInfo(funName = "") {
    return searchFullDict;

}

export default SearchFullInfo;