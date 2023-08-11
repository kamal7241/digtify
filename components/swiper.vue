<template>
  <div class="swiper">
    <div class="swiper__container" :class="className" id="swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in 16" :key="index">
          <div class="swiper-slide__inner">
            <img :src="getImage(slide)" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <button @click="swipe()">next</button>
  <button @click="pre()">pre</button> -->
</template>
<script>
export default {
  props: ["className", "src"],
  data() {
    return {
      swiperRatio: 0,
    };
  },
  mounted() {
    this.swiperRatio =
      (getComputedStyle(document.documentElement).getPropertyValue(
        "--swiperRatio"
      ) *
        window.innerWidth) /
      100;
    this.swiperRatio = this.swiperRatio.toFixed();
    console.log(this.swiperRatio);
  },
  methods: {
    getImage(name) {
      return `/_nuxt/assets/image/${this.src}/${name}.png`;
    },
    swipe() {
    
      let ele = document.getElementsByClassName(this.className)[0];

      let eleWidth = ele.offsetWidth;
      if (eleWidth == this.swiperRatio) {
        ele.style.width = this.swiperRatio * 4 + 22 * 2 + "px";
      } else {
        ele.style.width = eleWidth + (this.swiperRatio * 4 + 22 * 2) + "px";
      }
    },
    pre() {
      let ele = document.getElementById("swipe");

      let eleWidth = ele.offsetWidth;
      let newWidth = eleWidth - (this.swiperRatio * 4 + 22 * 2);
      if (newWidth == 0) {
        newWidth = this.swiperRatio;
      }
      ele.style.width = newWidth + "px";
    },
  },
};
</script>
