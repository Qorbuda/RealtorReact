var fullInfoDict = {
    "generalInformation": {
      "city": {
        "index": 0,
        "name": ""
      },
      "street": {
        "index": 0,
        "name": ""
      },
      "district": "",
      "building": "",
      "number": "",
      "mapCordinates": {
        "latCord": "1",
        "lngCord": "2"
      }
    },
    "owner": {
      "name": "",
      "surname": "",
      "personalId": "",
      "phone": "",
      "secendPhone": "",
      "email": "",
      "office": {
        "index": 0,
        "name": ""
      },
      "agent": {
        "index": 0,
        "name": ""
      }
    },
    "property": {
      "category": {
        "index": 0,
        "name": ""
      },
      "deal": {
        "index": 0,
        "name": ""
      },
      "repair": {
        "index": 0,
        "name": ""
      },
      "space": "",
      "floor": "",
      "rooms": "",
      "bedrooms": "",
      "bathrooms": "",
      "price": "",
      "checkBoxs": []
    },
    "description": {
      "description": ""
    },
    "photosAndDocs": {
      "mainImage": {
        "imageName": "",
        "image": ""
      },
      "images": {
        "imageName": "",
        "image": []
      },
      "docs": {
        "docsName": "",
        "docs": ""
      },
      "agreement": {
        "docsName": "",
        "docs": ""
      },
      "firstLink": "",
      "secendLink": ""
    },
    "editStatus" :false,
    "editReason":""

  }
  

var clearFullInfoDict = {
    "generalInformation": {
      "city": {
        "index": 0,
        "name": ""
      },
      "street": {
        "index": 0,
        "name": ""
      },
      "district": "",
      "building": "",
      "number": "",
      "mapCordinates": {
        "latCord": "1",
        "lngCord": "2"
      }
    },
    "owner": {
      "name": "",
      "surname": "",
      "personalId": "",
      "phone": "",
      "secendPhone": "",
      "email": "",
      "office": {
        "index": 0,
        "name": ""
      },
      "agent": {
        "index": 0,
        "name": ""
      }
    },
    "property": {
      "category": {
        "index": 0,
        "name": ""
      },
      "deal": {
        "index": 0,
        "name": ""
      },
      "repair": {
        "index": 0,
        "name": ""
      },
      "space": "",
      "floor": "",
      "rooms": "",
      "bedrooms": "",
      "bathrooms": "",
      "price": "",
      "checkBoxs": []
    },
    "description": {
      "description": ""
    },
    "photosAndDocs": {
      "mainImage": {
        "imageName": "",
        "image": ""
      },
      "images": {
        "imageName": "",
        "image": []
      },
      "docs": {
        "docsName": "",
        "docs": ""
      },
      "agreement": {
        "docsName": "",
        "docs": ""
      },
      "firstLink": "",
      "secendLink": ""
    },
    "editStatus" :false,
    "editReason":"",
    "appartmentId" : null

  }
  

var updateStatus = 0;


function PropertyAddInfoSaver(funName = "") {
    if (funName == "clear") {
        clearAllDAta()
    } else if (funName === 'getUpdateStatus') {
        return updateStatus;
    } else if (funName === 'changeUpdateStatus') {
        updateStatus = (updateStatus + 1) % 3;
    }
    else {
        return fullInfoDict;
    }

}

function clearAllDAta(){
    fullInfoDict = clearFullInfoDict

}

export default PropertyAddInfoSaver;