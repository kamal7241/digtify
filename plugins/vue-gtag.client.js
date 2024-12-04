import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const googleAnalyticsKey = config.public.GOOGLE_ANALYTICS_KEY;
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: googleAnalyticsKey,
    },
  });
});
