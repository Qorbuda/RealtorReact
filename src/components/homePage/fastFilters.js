import React from 'react';

import Apartaments from '../icons/Apartaments.svg';
import Commercial from '../icons/Commercial.svg';
import InvestmentObjects from '../icons/InvestmentObjects.svg';
import Land from '../icons/Land.svg';
import PrivateHome from '../icons/PrivateHome.svg';
import UnderConstruction from '../icons/UnderConstruction.svg';

import '../general/buttons/buttons.css'
import './homePage.css'
import LanguageSwitcher from '../secondary/localization/LanguageSwitcher';

function FastFilters() {
    var textFolder = LanguageSwitcher();
    return (
        <div className='d-flex flex-column align-items-start w-100' style={{ gap: "24px" }}>
            <div className='ts-fast-filters-section d-flex align-items-center' style={{ gap: "24px" }}>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={UnderConstruction} />
                    {textFolder.HomePage.FastFilter.UnderConstruction}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={Apartaments} />
                    {textFolder.HomePage.FastFilter.Apartments}

                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={Commercial} />
                    {textFolder.HomePage.FastFilter.CommercialSpace}
                </button>
            </div>
            <div className='ts-fast-filters-section d-flex align-items-center' style={{ gap: "24px" }}>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={Land} />
                    {textFolder.HomePage.FastFilter.Land}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={InvestmentObjects} />
                    {textFolder.HomePage.FastFilter.Investmentobject}
                </button>
                <button className='ts-btn ts-btn-fast-filters ts-btn-orange' >
                    <img src={PrivateHome} />
                    {textFolder.HomePage.FastFilter.Privatehouses}
                </button>
            </div>
        </div>
    );
}

export default FastFilters;