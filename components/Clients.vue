<template>
  <div class="clients">
   <swiper className="swiper__container--right" :src="'rightSwiper'" />
   <swiper className="swiper__container--left"  :src="'leftSwiper'"/>
  </div>
</template>
<script>
import swiper from './swiper.vue';
export default {
  components: { swiper },

};
</script>
