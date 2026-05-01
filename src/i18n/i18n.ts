import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// import enHeader from "./locales/en/translation.json";
import enHeader from "../locales/en/header.json";
import amHeader from "../locales/am/header.json";
import orHeader from "../locales/or/header.json";
// import process from "process";

const resources = {
  en: {
    header: enHeader,
    // common: enCommon,
  },
  am: {
    header: amHeader,
    // common: amCommon,
  },
  om: {
    header: orHeader,
    // common: omCommon,
  }
};

const isDevelopment = (globalThis as any).process?.env?.NODE_ENV === 'development';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: isDevelopment,
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
    
    defaultNS: 'header', // Set default namespace to header
    ns: ['header'], // Available namespaces
  });

export default i18n;