// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Header
// // import enHeader from "./locales/en/translation.json";
// import enHeader from "../locales/en/header.json";
// import amHeader from "../locales/am/header.json";
// import orHeader from "../locales/or/header.json";
// // import process from "process";

// // Home

// import enHome from '../locales/en/home.json';
// import amHome from '../locales/am/home.json';
// import omHome from '../locales/or/home.json';

// // Home Product Page
// import enHomeProductPageComp from '../locales/en/HomeProductPageCom.json'; 
// import amHomeProductPageComp from '../locales/am/HomeProductPageCom.json';
// import omHomeProductPageComp from '../locales/or/HomeProductPageCom.json';
// const resources = {
//   en: {
//     header: enHeader,
//     home: enHome,
//     homeProductPageComp: enHomeProductPageComp,
//     // common: enCommon,
//   },
//   am: {
//     header: amHeader,
//     home: amHome,
//     homeProductPageComp: amHomeProductPageComp,
//     // common: amCommon,
//   },
//   om: {
//     header: orHeader,
//     home: omHome,
//     homeProductPageComp: omHomeProductPageComp,
//     // common: omCommon,
//   }
// };

// const isDevelopment = (globalThis as any).process?.env?.NODE_ENV === 'development';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'en',
//     debug: isDevelopment,
    
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//     },
    
//     interpolation: {
//       escapeValue: false,
//     },
    
//     defaultNS: 'homeProductPageComp', // Set default namespace to header
//     ns: ['home', 'header', 'homeProductPageComp'], // Available namespaces
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// HEADER
import enHeader from "../locales/en/header.json";
import amHeader from "../locales/am/header.json";
import omHeader from "../locales/or/header.json";

// HOME
import enHome from "../locales/en/home.json";
import amHome from "../locales/am/home.json";
import omHome from "../locales/or/home.json";

// HOME PRODUCT PAGE
import enHomeProductPageComp from "../locales/en/HomeProductPageCom.json";
import amHomeProductPageComp from "../locales/am/HomeProductPageCom.json";
import omHomeProductPageComp from "../locales/or/HomeProductPageCom.json";

const resources = {
  en: {
    header: enHeader,
    home: enHome,
    HomeProductPageCom: enHomeProductPageComp,
  },

  am: {
    header: amHeader,
    home: amHome,
    HomeProductPageCom: amHomeProductPageComp,
  },

  om: {
    header: omHeader,
    home: omHome,
    HomeProductPageCom: omHomeProductPageComp,
  },
};

const isDevelopment =
  (globalThis as any).process?.env?.NODE_ENV === "development";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    fallbackLng: "en",

    debug: isDevelopment,

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    defaultNS: "header",

    ns: ["header", "home", "HomeProductPageCom"],
  });

export default i18n;