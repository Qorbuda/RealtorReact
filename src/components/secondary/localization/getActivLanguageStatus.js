import React, { useState } from 'react';

var activLanguageName = ''

export function getActivLanguageStatus(changeLanguage = "") {
    if (changeLanguage != ""){
        activLanguageName = changeLanguage
    }else{
        return activLanguageName;   
    }
// levannnnn ამ ფუნქციით შეგიძლია აიღო აქტიური ენა 
}



export default getActivLanguageStatus;