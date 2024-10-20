<template>
  <form @submit.prevent="sendEmail">
    <input type="email" v-model="email" placeholder="Your email" required />
    <button type="submit">Send Email</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    sendEmail() {
      // Logic to send email
      window.gtag('event', 'send_email', {
        event_category: 'Email',
        event_label: 'Campaign Page',
        value: 1,
      });
    },
  },
};
</script>
