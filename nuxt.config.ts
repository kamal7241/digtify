// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp";

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
  app: {
    ...config
  },
  devtools: { enabled: true },
  css: [
    // '@/assets/sass/main-ltr.scss',
  ],
  vite: {
    plugins: [vsharp()],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/sass/main-ltr.scss'
        }
      }
    }
  } ,
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})