<template>
  <contact-us-info-section class="contact-us-info contact-us-info--contacts">
    <template #img>
      <div
        class="contacts-img"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
    </template>
    <template #title>
      <div class="branch-details">
        <h2 class="contact-us-branch-section__title">
          contact <span class="text-secondary">us</span>
        </h2>
        <p class="contact-us-branch-section__desc">
          {{ contactInfo.email }} <br />
          <div v-for="(number, index) in contactInfo.phoneNumbers" :key="index">
            {{ number }} <br />
          </div>
            </p>
      </div>
    </template>
  </contact-us-info-section>
</template>
<script>
import img from "../assets/image/ring.png";
import contactInfo from "../mock/contactUss.json";

export default defineNuxtComponent({
  data() {
    return {
      img,
      contactInfo,
    };
  },
});
</script>
