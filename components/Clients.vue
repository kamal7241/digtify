<template>
    <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="9" :gap="500" :startThresHold="100" >
        <CoreHomeSectionContainer  class="home-sec--portfolio pt-4" >
            <div class="animate__animated "
                :class="{ 'animate__fadeOutUpBig' :  currentProgress >= PROGRESS.titleMoveUpAndFade}">
            <div class="home-sec--portfolio__title-wrapper" >
                    <core-zoomed-title 
                    origin="58px 100px" 
                    class="home-sec__title"  
                        :scale="currentProgress == PROGRESS.titleZoomIn ? 50 : 1"
                    >
                                <span class="text-secondary" >OUR</span>
                    </core-zoomed-title>
    <h2 class="text-white home-sec__title" >CLIENTS</h2>
            </div>
        </div>
            
        <div class="clients">
            <swiper className="swiper__container--right" :src="'rightSwiper'" />
            <swiper className="swiper__container--left"  :src="'leftSwiper'"/>
        </div>
              
        </CoreHomeSectionContainer>
    </scroll-animator>
</template>

<script>
const PROGRESS = Object.freeze({
    titleZoomIn : 0 , 
    titleZoomOut : 1 , 
    titleMoveUpAndFade : 2 , 
    firstSlide : 3 , 
    secondSlide : 4  ,
    thirdSlide : 5  ,
    fourthSlide : 6  ,
    fifthSlide : 7  ,
    sixthSlide : 8  ,
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
    data(){
        return {
            currentProgress : PROGRESS.titleZoomIn ,
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
        getUrl() {
            return new URL(`../assets/image/404Error.jpg`, import.meta.url).href
        }
    },
    watch:{
        currentProgress(curr, prev) {
          this.progressType =
            curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
        },
    }
})

</script>