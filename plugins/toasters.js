
import ToastPlugin from 'vue-toast-notification';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ToastPlugin )
})
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';

