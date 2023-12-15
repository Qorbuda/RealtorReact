import './realtor-style.css';
import CurrencyButton from '../../general/buttons/CurrencyButton';
import Ka from '../../icons/ka.svg'
import Eng from '../../icons/eng.svg'
import Ru from '../../icons/ru.svg'
import LanguageSwitcher from '../../secondary/localization/LanguageSwitcher';

const OpenHomePageRealtorComponent = ({ realtorInfo }) => {
    var textFolder = LanguageSwitcher().openApartmentPage;



    return (
        <div className="main-box">
            <div className="property-info-container">
                <div className='header'>
                    <span>{textFolder.Information}</span>
                    <span>{textFolder.Added}{realtorInfo.date}</span>
                </div>
                <div className='price'>
                    <CurrencyButton textId={"edit"} priceArr={realtorInfo.price} widthFullBox="286px" />
                </div>
                <div className='property-rooms'>
                    <span>{textFolder.Floor}{realtorInfo.floor}</span>
                    <span>{textFolder.Bedrooms}{realtorInfo.bedroom}</span>
                    <span>{textFolder.bathroom}{realtorInfo.bathroom}</span>
                </div>
                <div className='property-infos'>
                    <div className='property-info'>
                        <h3>{textFolder.PersonalID}</h3>
                        <span>{realtorInfo.personalID}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.FullSpace}</h3>
                        <span>{realtorInfo.fullSpace}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.DealType}</h3>
                        <span>{realtorInfo.dealType}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.Address}</h3>
                        <span>{realtorInfo.address}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.City}</h3>
                        <span>{realtorInfo.city}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.Country}</h3>
                        <span>{realtorInfo.country}</span>
                    </div>
                    <div className='property-info'>
                        <h3>{textFolder.View}</h3>
                        <span>{realtorInfo.view}</span>
                    </div>
                </div>
            </div>
            <div className='realtor-box'>
                <img src={`https://167.86.75.34/api/image/${realtorInfo.realtorImage}`} className='open-home-page-agent-iamge' />
                <div className='realtor-info'>
                    <span>{realtorInfo.realtorName}</span>
                    <div className='open-home-page-agent-iamge-div'>
                        <img src="phone.png"/>
                        <span>{realtorInfo.realtorPhone}</span>
                    </div>
                    <div className='open-home-page-agent-language-flags'>
                        {getLanguageIcons(realtorInfo.agentLanguage)}
                    </div>
                </div>
            </div>
            {/* <button className='footer-button'>MESSAGE TO AGENT</button> */}

        </div>
    )
}

function getLanguageIcons(flagArr) {
    let activFlagArr = []
    let flagIndex = 0

    for (const [key, value] of Object.entries(flagArr)) {
        if (value) {
            let activFlag;
            if (key == "ka") {
                activFlag = <div key={flagIndex * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Ka} />
                </div>
            } else if (key == "en") {
                activFlag = <div key={(flagIndex + 1) * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Eng} />
                </div>
            } else if (key == "ru") {
                activFlag = <div key={(flagIndex + 2) * 2} className='Team-Agent-flags'>
                    <img className='Team-Agent-flags-icon' src={Ru} />
                </div>
            }
            activFlagArr.push(activFlag);
        }
    };

    return (activFlagArr);
}

export default OpenHomePageRealtorComponent;