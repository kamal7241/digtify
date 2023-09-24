<template>
    <div class="client-slider"  >
        <swiper 
              :slides-per-view="'auto'"
              :slidesPerGroup="5"
              :space-between="50"
              :speed="1500"
              :loop="true"
              @swiper="onSwiper"
              :modules="modules"
                :autoplay="autoplayOptions"
          >
              <!-- <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide>
              <swiper-slide class="text-secondary .swiper-slide--transparent" >no content</swiper-slide> -->
              <swiper-slide v-for="(img, index) in imgs" :key="index"  >
                      <img :src="img" :alt="'service-img' + index" />
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
  import { Autoplay } from 'swiper/modules';
  import LeftImages from "./clientSliderImgsLeft"
  import RightImages from "./clientSliderImgsRight"

  import 'swiper/css';
  export default defineNuxtComponent({
    props:[ "reverseDirection"],
    components:{
        Swiper,
        SwiperSlide,
    },
    data(){
        return {
            swiper : undefined ,
            modules: [Autoplay],
            autoplayOptions:{
                delay: 1500,
                disableOnInteraction: false,
                reverseDirection : this.reverseDirection
            }
        }
    },
    computed:{
        imgs(){
            if(this.reverseDirection)
                return RightImages
            return LeftImages
        }
    },
    methods:{
        getImage(name) {
            return  `/_nuxt/assets/image/${'leftSwiper'}/${name}.png`;
        },
        onSwiper(swiper){
            this.swiper = swiper
      },
    }, 
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