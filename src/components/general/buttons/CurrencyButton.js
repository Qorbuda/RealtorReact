import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../../context/actions';

import './buttons.css';

let idArr = []
let priceArr = []

function CurrencyButton(fullInfo) {

    let textId = fullInfo.textId
    let price = fullInfo.priceArr
    let widthBox = fullInfo.widthFullBox

    idArr.push(textId);
    priceArr.push(price);


    const currency = useSelector(state => state.currency);
    const dispatch = useDispatch();

    function clickHandler() {
        dispatch(setCurrency(currency === 'gel' ? 'usd' : 'gel'));
        for (let i = 0; i < idArr.length; i++) {
            document.getElementById("currency-button-tite-text-id" + idArr[i]).textContent = priceArr[i][currency] + " " + currency
        }
    };

    function getFixedPointInt(number){
        let finNum = ""
        number = number.toString()
        console.log("__________")
        console.log(number)
        console.log(typeof(number))
        
        for (let i = 0; i < number.length; i++) {
            finNum = finNum + number[i]
            if((number.length - i - 1)%3 == 0 && number.length - i - 1 !=0 ){
                finNum = finNum + ","
            }
        }

        console.log(finNum)
        
        return finNum
    }

    if (widthBox == undefined) {
        widthBox = "auto"
    }

    return (
        <div className='currency-button-full-div' style={{ width: widthBox }}>
            <p className='currency-button-tite-text' id={"currency-button-tite-text-id" + textId}>{getFixedPointInt(price[currency]) + " " + currency}</p>
            <div onClick={clickHandler} className='d-flex flex-row justify-content-between ts-btn-currency' style={{ cursor: "pointer" }}>
                <div className='white-font z-3'>$</div>
                <div className='white-font z-3'>₾</div>
                <div className={`ts-btn-round-selector ts-btn-round-selector-${currency}`}></div>
            </div>
        </div>
    );
}

export default CurrencyButton;