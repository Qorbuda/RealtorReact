
var agentFullInfoDict = {

  "name": "",
  "surname": "",
  "personalId": "",
  "Phone": "",
  "mail": "",
  "password": "",
  "agentStatus": "",
  "office":"",
  "languange": {
    "ka": false,
    "en": false,
    "ru": false
  },
  "photosAndDocs": {
    "mainImage": {
      "imageName": "",
      "image": ""
    },
    "docs": {
      "docsName": "",
      "docs": ""
    }
  }
}


var clearagentFullInfoDict = {
  "name": "",
  "surname": "",
  "personalId": "",
  "Phone": "",
  "mail": "",
  "password": "",
  "agentStatus": "",
  "office" : "",
  "languange": {
    "ka": false,
    "en": false,
    "ru": false
  },
  "photosAndDocs": {
    "mainImage": {
      "imageName": "",
      "image": ""
    },
    "docs": {
      "docsName": "",
      "docs": ""
    }
  }
}


function AddAgemtData(funName = "") {
  if (funName == "clear") {
    clearAllDAta()
  }
  else {
    return agentFullInfoDict;
  }

}

function clearAllDAta() {
  agentFullInfoDict = clearagentFullInfoDict

}

export default AddAgemtData;