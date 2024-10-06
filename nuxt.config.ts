// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp";
import rules from "./robots.config";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { type Options } from "postcss-rtl";
import {type ConfigOptions } from "rtlcss";
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
  ssr: false,

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
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-rtl': {
        // prefix:'rtl',
        
        // onlyDirection: 'rtl',
      } as Options,
      // Add rtlcss only for rtl blocks
      // rtlcss: {

      // } as ConfigOptions, 
 
    }
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
      minify:false,
      
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

  compatibilityDate: "2024-10-05"
});