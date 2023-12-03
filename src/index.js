import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

root.render(
      <App />
);
