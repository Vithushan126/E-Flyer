import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr", "it", "de"],
    lng: "en",
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18next;
