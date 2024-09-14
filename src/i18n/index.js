import i18n from "i18next";
import backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLng from "./locales/en/translation.json";
import ruLng from "./locales/ru/translation.json";

const resources = {
  en: {
    translation: enLng,
  },
  ru: {
    translation: ruLng,
  },
};

const LanguageDetector = new languageDetector(null, {
  order: ["localStorage", "navigator"],
  lookupFromLocalStorage: "i18nextLng",
  caches: ["localStorage"],
  checkWhitelist: true,
  whitelist: ["en", "ru"],
});

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultLocale: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    order: ["localstorage"],
    backend: {
      loadPath: TRANSLATION_PATH + "/{{lng}}/translation.json",
    },
    load: "languageOnly",
  });

export default i18n;
