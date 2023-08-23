<template>
    <!-- <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="20" :gap="200" :startThresHold="100" >
    </scroll-animator> -->
        <!-- <span class="text-dark bg-secondary z-1 position-fixed top-0 left-0  h2">{{ 'current progress : ' +
                currentProgress + ':' + ' progress type : ' + progressType }}</span> -->

        <CoreHomeSection  class="home-sec--portfolio" >
            <transition mode="out-in" name="fade-delay-1" >
                <div class="animate__animated" v-show="currentProgress < PROGRESS.firstSlide" 
                :class="{
                    'animate__fadeOutUp animate__delay-1s zoom-out-title' : currentProgress >= PROGRESS.firstSlide && progressType == PROGRESS_TYPES.forward , 
                    'animate__fadeInDown animate__delay-1s zoom-in-title' : currentProgress < PROGRESS.firstSlide && progressType == PROGRESS_TYPES.backward, 
                }"
                >
                    
                        <div class="home-sec--portfolio__title-wrapper pt-4" >
                                <core-zoomed-title 
                                origin="30px 100px" 
                                class="home-sec__title"  
           >
                                            <span class="text-secondary" >OUR</span>
                                </core-zoomed-title>
                <h2 class="text-white home-sec__title" >CLIENTS</h2>
                        </div>
                 </div>
                 
                </transition>
                <transition mode="out-in"  name="fade-delay-2">
                    <div v-if="currentProgress >= PROGRESS.firstSlide" class="clients animate__animated " 
                    >
                    <clients-slider class="mb-5" />
                    <clients-slider :reverseDirection="true" />
                        <!-- <div class="native-swiper" >
                            <right-swiper :slide="currentProgress"  :src="'rightSwiper'" />
                                <left-swiper :slide="currentProgress"   :src="'leftSwiper'"/>
                        </div> -->
                    </div>
                </transition>
            <!-- <clients-slider :slide="currentProgress"  /> -->
          
              
        </CoreHomeSection>
</template>

<script>

const PROGRESS = Object.freeze({
    titleZoomIn : 0 , 
    firstSlide : 1 , 
    secondSlide : 2  ,
    thirdSlide : 3  ,
    fourthSlide : 4  ,
    fifthSlide : 5  ,
    sixthSlide : 6  ,
}); 
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
    [PROGRESS.titleZoomIn] : 100 , 
    [PROGRESS.titleZoomOut] : 100 , 
    [PROGRESS.titleMoveUpAndFade] : 0 , 
    [PROGRESS.firstSlide] : 15 ,
    [PROGRESS.secondSlide] : 30 ,  
    [PROGRESS.thirdSlide] : 45 ,  
    [PROGRESS.fourthSlide] : 60 ,  
    [PROGRESS.fifthSlide] : 75 ,  
    [PROGRESS.sixthSlide] : 100 ,  
})
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
export default defineNuxtComponent({
    props:['currentProgress'],
    data(){
        return {
            progressType: PROGRESS_TYPES.forward
        }
    } ,
    computed:{
        PROGRESS(){
            return PROGRESS;
        } ,
        PROGRESS_TYPES(){
            return PROGRESS_TYPES;
        },
        PROGRESS_HIGHLIGHT_RATIO(){
            return PROGRESS_HIGHLIGHT_RATIO;
        } , 
        // getUrl(){
        //     return require('../assets/image/404Error.jpg')
        // } , 
        // getUrl() {
        //     return new URL(`../assets/image/404Error.jpg`, import.meta.url).href
        // }
    },
    watch:{
        currentProgress(curr, prev) {
          this.progressType =
            curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
        },
    }
})

</script>