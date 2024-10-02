// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp";
import rules from "./robots.config";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import enMessages from "./locales/en/our-services.json";
import arMessages from "./locales/ar/our-services.json";
import { dir } from "console";
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
  vite: {
    plugins: [vsharp()],
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
    strategy: "prefix_except_default",
    defaultLocale: "en",
    fallbackLocale: ['en'],
    locales: [
      { code: "ar", iso: "ar-AR", dir: 'ltr', file: "ar/our-services.json" },
      { code: "en", iso: "en-US",dir: 'ltr', file: "en/our-services.json" },
    ],
  },
  robots: {
    rules: rules,
  },
});