<template>
  <div class="swiper">
    <div ref="el" class="swiper__container" :class="className" id="swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in 16" :key="index">
          <div class="swiper-slide__inner">
            <div>
              <img :src="getImage(slide)" alt="image" />
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
  props: ["className", "src" , "slide"],
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
        ele.style.width =  this.getSlideWidth() + 'px';
      } else {
        ele.style.width = eleWidth +  this.getSlideWidth() + 'px';
      }
    },
    swipeTo(slide ){
      // debugger
        let ele = this.$refs.el;
        console.log(ele)
        let eleWidth = ele.offsetWidth;
        console.log(eleWidth)
        if (eleWidth == this.swiperRatio) {
          ele.style.width = /* width */ this.swiperRatio * /* number of slides */ 4  + /* margin */ 22 * 3 + "px";
        // console.log(this.swiperRatio , "margin :"  , 22 * 2  )
          console.log(ele.style.width)
        } else {
          ele.style.width = eleWidth + (this.swiperRatio * 4 + 22 * 2) + "px";
        // console.log("new width of else : " , eleWidth , "+" , "swiper ratio: " ,   this.swiperRatio ,"+" ,  "margin :"  , 22 * 2  )
        console.log(ele.style.width)

        }
    },
    getSlideWidth(){
      // return /* width */ this.swiperRatio * 4  + /* margin */ 22 * 2 + "px";
      return 300 * 4;
    },
    pre() {
      let ele = this.$refs.el;

      let eleWidth = ele.offsetWidth;
      let newWidth = eleWidth - this.getSlideWidth();
      // if (newWidth == 0) {
      //   newWidth = this.swiperRatio;
      // }
      ele.style.width = newWidth + "px";
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
