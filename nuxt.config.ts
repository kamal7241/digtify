// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // '@/assets/sass/main-ltr.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/sass/main-ltr.scss'
        }
      }
    }
  }
})
