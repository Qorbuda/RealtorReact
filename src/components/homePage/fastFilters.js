import React from 'react';

import Apartaments from '../icons/Apartaments.svg';
import Commercial from '../icons/Commercial.svg';
import InvestmentObjects from '../icons/InvestmentObjects.svg';
import Land from '../icons/Land.svg';
import PrivateHome from '../icons/PrivateHome.svg';
import UnderConstruction from '../icons/UnderConstruction.svg';
import SendMessage from '../../contactMessage/sendMessage';
import SearchFullInfo from "./searchFullInfo";

import '../general/buttons/buttons.css'
import './homePage.css'
import LanguageSwitcher from '../secondary/localization/LanguageSwitcher';

function FastFilters({handleScroll, setItems, clickCount}) {
    var textFolder = LanguageSwitcher();
    var searchInputInfro = SearchFullInfo()

    return (
        <div className='d-flex flex-column align-items-start w-100' style={{ gap: "24px" }}>
            <div className='ts-fast-filters-section d-flex align-items-center' style={{ gap: "24px" }}>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={() => searchItems(9)}>
                    <img src={UnderConstruction} />
                    {textFolder.HomePage.FastFilter.UnderConstruction}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={() =>searchItems(10)}>
                    <img src={Apartaments} />
                    {textFolder.HomePage.FastFilter.Apartments}

                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={()=>searchItems(11)}>
                    <img src={Commercial} />
                    {textFolder.HomePage.FastFilter.CommercialSpace}
                </button>
            </div>
            <div className='ts-fast-filters-section d-flex align-items-center ' style={{ gap: "24px" }}>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={()=>searchItems(13)}>
                    <img src={Land} />
                    {textFolder.HomePage.FastFilter.Land}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={()=>searchItems(18)}>
                    <img src={InvestmentObjects} />
                    {textFolder.HomePage.FastFilter.Investmentobject}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange fast-sherch-buttons' onClick={()=>searchItems(12)}>
                    <img src={PrivateHome} />
                    {textFolder.HomePage.FastFilter.Privatehouses}
                </button>
            </div>
        </div>
    );
    async function searchItems(categoyId) {
        handleScroll();
searchInputInfro.categoryApartments.index = categoyId;
        var props = await SendMessage(1, searchInputInfro);
        setItems([])
        setItems(props)
        clickCount(1)
    }
}

export default FastFilters;