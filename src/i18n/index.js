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

i18n
  .use(backend)
  .use(languageDetector)
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
  });

export default i18n;
