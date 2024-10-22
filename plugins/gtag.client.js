// plugins/gtag.client.ts
import { useGtag } from 'nuxt-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const { initialize } = useGtag();
  initialize('G-XXXXXXXXXX');  // Initialize with your Google Analytics ID
});
