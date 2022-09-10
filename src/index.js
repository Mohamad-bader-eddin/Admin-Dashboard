import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Spinner from './Components/Spinner/Spinner'
import { OpenSideBarProvider } from "./Context/OpenSidebar";
import { DarkModeProvider } from "./Context/DarkMode";
import { Provider } from "react-redux";
import store from "./Redux/store";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <Provider store={store}>
        <OpenSideBarProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </OpenSideBarProvider>
      </Provider>
    </BrowserRouter>
  </Suspense>
);
