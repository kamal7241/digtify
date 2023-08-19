<template>
  <div class="swiper">
    <div ref="el" class="swiper__container" :class="className" id="swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(_, index) in 16" :key="index">
          <div class="swiper-slide__inner">
            <div>
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
import img1 from "../assets/image/rightSwiper/1.png"
import img2 from "../assets/image/rightSwiper/2.png"
import img3 from "../assets/image/rightSwiper/3.png"
import img4 from "../assets/image/rightSwiper/4.png"
import img5 from "../assets/image/rightSwiper/5.png"
import img6 from "../assets/image/rightSwiper/6.png"
import img7 from "../assets/image/rightSwiper/7.png"
import img8 from "../assets/image/rightSwiper/8.png"
import img9 from "../assets/image/rightSwiper/9.png"
import img10 from "../assets/image/rightSwiper/10.png"
import img11 from "../assets/image/rightSwiper/11.png"
import img12 from "../assets/image/rightSwiper/12.png"
import img13 from "../assets/image/rightSwiper/13.png"
import img14 from "../assets/image/rightSwiper/14.png"
import img15 from "../assets/image/rightSwiper/15.png"
import img16 from "../assets/image/rightSwiper/16.png"
const imgs = [
  img1 , img2 , img3 , img4 , img5 , img6 , img7 , 
  img8 , img9 , img10 , img11 , img12 , img13 , img14 , img15 , img16 , 
]
export default {
  props: ["className", "src" , "slide"],
  data() {
    return {
      swiperRatio: 0,
    };
  },
  computed:{
    imgs(){
      return imgs;
    }
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
