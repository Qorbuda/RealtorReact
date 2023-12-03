import React, { useState, useEffect } from 'react';
import FastFilters from '../components/homePage/fastFilters';
import PropertyCard from '../components/homePage/propertyCard';
import SearchBarHome from '../components/homePage/searchBarHome';
import ArrowDown from '../components/icons/ArrowDown.svg';
import LanguageSwitcher from '../components/secondary/localization/LanguageSwitcher';
import SendMessage from '../contactMessage/sendMessage';
import SearchFullInfo from "../components/homePage/searchFullInfo";


import "./homePage/homePage.css"


function HomePage() {
  var textFolder = LanguageSwitcher();
  const [properties, setProperties] = useState([]);
  const [clickCount, setClickCount] = useState(1);

  useEffect(() => {
    homePageShowMorBtnClick()
  }, [])
  const token = localStorage.getItem('token');


  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='ts-base-container' style={{ marginBottom: "100px", width: "90%" }}>
        <FastFilters />
      </div>

      <div className='ts-base-container' style={{ marginBottom: "100px", width: "90%" }}>
        <SearchBarHome fromHome={true} setItems={setProperties} clickCount={setClickCount}/>
      </div>

      <div className='ts-base-container' style={{ marginBottom: "100px" }}>

        <h1>{textFolder.weather_forcast_for}</h1>

        <div className='ts-properties-section d-flex flex-row flex-wrap align-items-start' style={{ gap: "24px", marginBottom: "48px" }}>
          {properties.map((property, index) => (
            <PropertyCard apartmentInfo={property} key={index} />
          ))}
        </div>

        <button className="Home-page-show-mor-button" onClick={homePageShowMorBtnClick} >
          <p className='Home-page-show-mor-button-text'> show more  </p>
          <img className='Home-page-show-mor-button-Arrow' src={ArrowDown} />

        </button>
      </div>
    </div>
  );

  async function homePageShowMorBtnClick() {
    var filter = SearchFullInfo()

    var props = await SendMessage(clickCount, filter);
    setClickCount(prevCount => prevCount + 1);
    const result = properties.concat(props);
    setProperties(result);
  }
}

export default HomePage;