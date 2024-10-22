<template>
  <form @submit.prevent="sendEmail">
    <input type="email" v-model="email" placeholder="Your email" required />
    <button type="submit">Send Email</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
if (process.client) {
  // const { gtag } = useGtag();
  const email = ref('');
  
  function trackButtonClick() {
    gtag.event('button_click', {
    event_category: 'engagement',
    event_label: 'Home Page Button',
    });
  }
  function sendEmail() {
    
    console.log(gtag)
    gtag.event('button_click', {
    event_category: 'engagement',
    event_label: 'Home Page Button',
    });
    // Logic to send email...
  
    // Check if client-side and if Google Analytics (gtag) is loaded
    // if (import.meta.client && typeof window.gtag === 'function') {
    //   window.gtag('event', 'send_email', {
    //     event_category: 'Email',
    //     event_label: 'Campaign Page',
    //     value: 1,
    //   });
    //   console.log('Email sent event tracked with Google Analytics');
    // } else {
    //   console.warn('Google Analytics is not available or not loaded.');
    // }
}

}
</script>
