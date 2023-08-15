<template>
    <div class="client-slider"  >
        <swiper 
              :slides-per-view="3"
              :slidesPerGroup="3"
              :space-between="50"
              :speed="1000"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
              <!-- <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide>
              <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide> -->
              <swiper-slide v-for="(slide, index) in 16" :key="index"  >
                      <img :src="getImage(slide)" alt="image" />
              </swiper-slide>
              <!-- <swiper-slide  >Slide 1</swiper-slide>
              <swiper-slide  > Slide 2</swiper-slide>
              <swiper-slide  >Slide 3</swiper-slide>
              <swiper-slide  >Slide 4</swiper-slide>
              <swiper-slide  >Slide 5</swiper-slide>
              <swiper-slide  >Slide 6</swiper-slide>
              <swiper-slide  >Slide 7</swiper-slide>
              <swiper-slide  >Slide 8</swiper-slide>
              <swiper-slide  >Slide 10</swiper-slide> -->
              <!-- <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide>
              <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide>
              <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide> -->
      </swiper>

    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  export default defineNuxtComponent({
    props:["slide"],
    components:{
        Swiper,
        SwiperSlide,
    },
    data(){
        return {
            swiper : undefined
        }
    },
    computed:{
    },
    methods:{
        getImage(name) {
            return  `/_nuxt/assets/image/${'leftSwiper'}/${name}.png`;
        },
        onSwiper(swiper){
            this.swiper = swiper
        console.log(swiper);
      },
      onSlideChange(){
        console.log('slide change');
      }
    }, 
    watch:{
        slide(){
            console.log(this.swiper.slideTo)
            this.swiper.slideTo(this.slide)
        }
    }
})

</script>

<style lang="scss" >
// .swiper-slide{
//     background: white;
//     font-size: 50px;
//     border:2px solid black;
//     &.swiper-slide--transparent{
//         background: transparent;
//         color: orangered;
//     }
// }
</style>