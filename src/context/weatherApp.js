import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";



const resources = {
  en: {
    translation: textLanguageRu,
  },
  fr: {
    translation: textLanguageRu,
  },
  es: {
    translation: textLanguageKa,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const WeatherApp = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const getWeatherData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ba6ce0196b42b189d5a8a33aaa888f9`
      );
      setWeatherData(res.data);
    };
    getWeatherData();
  }, [city]);

  const handleCityChange = async (e) => {
    const newCity = e.target.value;
    setCity(newCity);

  };
  return (
    <div>      
      <h2>{t("weather_forcast_for")}: {weatherData.name}</h2>
      <p>{t("current_temperature")}: {weatherData.main?.temp}</p>
      <p>{t("feels_like")}: {weatherData.main?.feels_like}</p>
      <p>{t("humidity")}: {weatherData.main?.humidity}</p>
    </div>
  );
};

export default WeatherApp;