// import createGtag from 'vue-gtag-next'

// export default defineNuxtPlugin((nuxtApp) => {
  
//   nuxtApp.vueApp.use(
//     createGtag({
//       property: {
//         id: 'G-XXXXXXXXX', // Replace with your GA4 measurement ID
//       },
//     })
//   )
//   const gtag = createGtag({ property: { id: 'G-XXXXXXXXX' } })
//   nuxtApp.hook('page:finish', (context) => {
//     gtag.pageview({
//       page_path: context.route.fullPath,
//     })
//   })

//   nuxtApp.vueApp.use(gtag)
// })