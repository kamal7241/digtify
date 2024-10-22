export default defineNuxtPlugin((nuxtApp) => {
  const GA_TRACKING_ID = process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_KEY;
  if (process.client) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());

    gtag("config", GA_TRACKING_ID, {
      cookie_domain: process.env.NUXT_DOMAIN, 
    });

    nuxtApp.hook("page:finish", (page) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: page.fullPath,
      });
    });
  }
});
