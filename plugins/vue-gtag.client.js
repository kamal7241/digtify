import { defineNuxtPlugin } from "#app";
import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-22N6T9ZYMX", // Replace with your Google Analytics Measurement ID
    },
  });
});
