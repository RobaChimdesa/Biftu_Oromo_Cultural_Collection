
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

// PRODUCT PAGE

import enProducts from "../locales/en/products.json";
import amProducts from "../locales/am/products.json";
import omProducts from "../locales/or/products.json";

// ABOUT PAGE
import enAbout from "../locales/en/about.json";
import amAbout from "../locales/am/about.json";
import omAbout from "../locales/or/about.json";

// FEATURES PAGE
import enFeatures from "../locales/en/features.json";
import amFeatures from "../locales/am/features.json";
import omFeatures from "../locales/or/features.json";

// FOOTER PAGE
import enFooter from "../locales/en/footer.json";
import amFooter from "../locales/am/footer.json";
import omFooter from "../locales/or/footer.json";

// CONTACT PAGE

import enContact from "../locales/en/contact.json";
import amContact from "../locales/am/contact.json";
import orContact from "../locales/or/contact.json";

// ourstory

import enOurStory from "../locales/en/ourstory.json";
import amOurStory from "../locales/am/ourstory.json";
import orOurStory from "../locales/or/ourstory.json";

// OurJourney

import enOurJourney from "../locales/en/journey.json";
import amOurJourney from "../locales/am/journey.json";
import orOurJourney from "../locales/or/journey.json";

// our mission and vision

import enMission from "../locales/en/mission.json";
import amMission from "../locales/am/mission.json";
import orMission from "../locales/or/mission.json";

// our core values

import encorevalues from "../locales/en/coreValues.json";
import amcorevalues from "../locales/am/coreValues.json";
import orcorevalues from "../locales/or/coreValues.json";

// Artisan page

import enartisan from "../locales/en/Artisans.json";
import amartisan from "../locales/am/Artisans.json";
import orartisan from "../locales/or/Artisans.json";
 
// join us page

import enjoinus from "../locales/en/joinJourney.json"
import amjoinus from "../locales/am/joinJourney.json"
import orjoinus from "../locales/or/joinJourney.json"

const resources = {
  en: {
    header: enHeader,
    home: enHome,
    HomeProductPageCom: enHomeProductPageComp,
    features: enFeatures,
    footer: enFooter,
    about: enAbout,
    products: enProducts,
    contact: enContact,
    ourstory: enOurStory,
    ourjourny: enOurJourney,
    mission: enMission,
    corevalues: encorevalues,
    artisan: enartisan,
    joinus:enjoinus
  },

  am: {
    header: amHeader,
    home: amHome,
    HomeProductPageCom: amHomeProductPageComp,
    features: amFeatures,
    footer: amFooter,
    about: amAbout,
    products: amProducts,
    contact: amContact,
    ourstory: amOurStory,
    ourjourny: amOurJourney,
    mission: amMission,
    corevalues: amcorevalues,
    artisan: amartisan,
    joinus:amjoinus
  },

  om: {
    header: omHeader,
    home: omHome,
    HomeProductPageCom: omHomeProductPageComp,
    features: omFeatures,
    footer: omFooter,
    about: omAbout,
    products: omProducts,
    contact: orContact,
    ourstory: orOurStory,
    ourjourny: orOurJourney,
    mission: orMission,
    corevalues: orcorevalues,
    artisan: orartisan,
    joinus:orjoinus
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

    ns: [
      "header",
      "home",
      "HomeProductPageCom",
      "features",
      "footer",
      "about",
      "products",
      "contact",
      "ourstory",
      "mission",
      "corevalues",
      "artisan",
      "joinus"
    ],
  });

export default i18n;
