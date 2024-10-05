// import this after install `@mdi/font` package
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@/assets/sass/vuetify.scss";


import { th } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    lang: {
      current: app.$i18n.locale.value,
    },
    theme:{
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: '#042F3A',
            secondary: '#EB3D26',
          },
        },
        dark: {
          colors: {
            primary: "#042F3A",
            secondary: "#EB3D26",
          },
        },
      },
    }
    // locale: app.$i18n.locale.value, // Set the current locale based on i18n
  });
  console.log("value" , app.$i18n.locale.value)
  app.vueApp.use(vuetify);
});
