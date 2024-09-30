// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify/lib/framework.mjs";

import "vuetify/styles";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
  });
  app.vueApp.use(vuetify);
});
