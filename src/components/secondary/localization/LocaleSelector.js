import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../../../context/actions';

import Ka from '../../icons/ka.svg'
import Eng from '../../icons/eng.svg'
import Ru from '../../icons/ru.svg'
import LanguageSwitcher from './LanguageSwitcher';
import getActivLanguageStatus from './getActivLanguageStatus';

export var test = '';
export function LocaleSelection() {
    const locale = useSelector(state => state.locale);
    const dispatch = useDispatch();
    const [, setCurrentLocale] = useState(locale[0]);
    const localeIcons = {
        'ka': Ka,
        'en': Eng,
        'ru': Ru
    }

    getActivLanguageStatus(locale[0])

    function changeLocale(newLocale, index) {
        locale.splice(index, 1);
        locale.unshift(newLocale);
        dispatch(setLocale(locale));
        setCurrentLocale(newLocale);
        localStorage.setItem("language", newLocale)
        test = newLocale;
        LanguageSwitcher();
        window.location.reload(true);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={localeIcons[locale[0]]} alt={locale[0]} />
            </button>
            <ul className="dropdown-menu" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                <li className="ts-locale-item"><img src={localeIcons[locale[1]]} alt={locale[1]} onClick={() => changeLocale(locale[1], 1)} /></li>
                <li className="ts-locale-item"><img src={localeIcons[locale[2]]} alt={locale[2]} onClick={() => changeLocale(locale[2], 2)} /></li>
            </ul>
        </div>
    );
}



export default LocaleSelection;