<template>
  <div class="swiper">
    <div ref="el" class="swiper__container"  id="swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(_, index) in 16" :key="index">
          <div class="swiper-slide__inner">
            <div class="h-100 d-flex justify-content-center align-content-center" >
              <img :src="imgs[index]" alt="image" />
            </div>
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
  props: ["src" , "slide" , "imgs"],
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
  },
  methods: {
    getImage(name) {
      return `/_nuxt/assets/image/${this.src}/${name}.png`;
    },
    swipe() {
    
      let ele = this.$refs.el;
      let eleWidth = ele.offsetWidth;
      if (eleWidth == this.swiperRatio) {
        ele.style.width =  this.getSlideWidth();
      } else {
        ele.style.width = `calc(${eleWidth}px + ${this.getSlideWidth()})`;
      }
    },
    swipeTo(slide ){
        let ele = this.$refs.el;
        let eleWidth = ele.offsetWidth;
        if (eleWidth == this.swiperRatio) {
          ele.style.width = /* width */ this.swiperRatio * /* number of slides */ 4  + /* margin */ 22 * 3 + "px";
        // console.log(this.swiperRatio , "margin :"  , 22 * 2  )
        } else {
          ele.style.width = eleWidth + (this.swiperRatio * 4 + 22 * 2) + "px";
        // console.log("new width of else : " , eleWidth , "+" , "swiper ratio: " ,   this.swiperRatio ,"+" ,  "margin :"  , 22 * 2  )

        }
    },
    getSlideWidth(){
      // return /* width */ this.swiperRatio * 4  + /* margin */ 22 * 2 + "px";
      return (20.271 * 4 ) + "vw" ;
    },
    pre() {
      let ele = this.$refs.el;

      let eleWidth = ele.offsetWidth;
      let newWidth = `calc(${eleWidth}px - ${this.getSlideWidth()})`;

      // if (newWidth == 0) {
      //   newWidth = this.swiperRatio;
      // }
      ele.style.width = newWidth;
    },
  },
  watch:{
    slide(curr , prev){
      if(curr > prev )
        this.swipe(this.slide)
      else this.pre()
    }
  },

};
</script>
