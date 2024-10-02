// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp";
import rules from "./robots.config";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
const netilfyConfig = {
  baseURL: '/',
  buildAssetsDir: 'assets'
}
const ghPagesConfig = {
    baseURL: '/digtify/',
    buildAssetsDir: 'assets'
}

const config = process.env.NUXT_ENV == 'gh' ? ghPagesConfig : 
process.env.NUXT_ENV == 'netilfy' ? netilfyConfig : {}
export default defineNuxtConfig({
  //inlineSSRStyles:false,
  app: {
    ...config,
  },
  devtools: { enabled: true },
  css: [
    // '@/assets/sass/main-ltr.scss',
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: ['~/plugins/vuetify'],
  vite: {
    plugins: [vsharp(),
      vuetify()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/sass/main-ltr.scss'
        },
      },
    },
    build: {
      cssCodeSplit: false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/i18n",
    /**
     * @todo check use
     */
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config?.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales/",
    strategy: "prefix",
    defaultLocale: "en",
    /**
     * @todo check deprecated or not
     */
    // fallbackLocale: ['en'], 
    locales: [
      { code: "ar", iso: "ar-AR", dir: 'ltr', file: "ar/our-services.json" },
      { code: "en", iso: "en-US",dir: 'ltr', file: "en/our-services.json" },
    ],
  },
  robots: {
    rules: rules,
  },
});