<template>
    <div class="banner-slider h-100"  >
        <swiper 
              :slides-per-view="1"
              :space-between="50"
              :speed="1500"
              :loop="true"
              @swiper="onSwiper"
              :modules="modules"
                :autoplay="autoplayOptions"
          >
              <swiper-slide  >  
                  <div class="home-sec--banner__img-group-wrapper" >
                    <div class="home-sec--banner__img-group">
                        <img src="../assets/image/banner.png" />
                    </div>
                </div>
                <div class="home-sec--banner__slogan-group">
                    <div
                    class="home-sec--banner__slogan "
                    >
                        <div class="row justify-content-center" >
                            <div class="col-12" >
                                    <span
                                        class="animate__animated title d-block"
                                        >SHAPPING</span
                                    >
                                    <span class="d-block animate__animated"
                                    >
                                        <span class="title" >THE</span>
                                        <span
                                            class="wavy title "
                                    
                                        >
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                        </span>
                                    </span>

                            </div>
                            <div class="col-12" >
                                <span
                                    class="animate__animated d-inline-block title title--bigger"
                                >
                                    <span class="text-secondary" >ECO</span>SYSTEM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
              <swiper-slide  >     
                <div class="home-sec--banner__img-group-wrapper" >
                    <div class="home-sec--banner__img-group">
                        <img src="../assets/image/banner-1.png" />
                    </div>
                </div>
                <div class="home-sec--banner__slogan-group">
                    <div class="animate__animated home-sec--banner__slogan home-sec--banner__slogan--ternary" >
                        <span class="title " >
                            <span>DIGIFY</span>
                            <span><span class="" >WE</span> TALK</span>
                            <span>DIGITAL</span>
                        </span>
                    </div>
                </div></swiper-slide>
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
            console.log(swiper);
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