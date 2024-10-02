// plugins/i18n.js
import Vue from "vue";
import VueI18Next from "vue-i18next";
import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

Vue.use(VueI18Next);

export default ({ app }, inject) => {
  i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
      fallbackLng: "en",
      debug: true,
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json", 
      },
      ns: ["our-services"], 
      defaultNS: "our-services", 
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["querystring", "cookie", "localStorage", "navigator"],
        caches: ["cookie"],
      },
    });

  const i18n = new VueI18Next(i18next);

  inject("i18n", i18n);
};
