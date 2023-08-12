<template>
    <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="9" :gap="500" :startThresHold="100" >
        <CoreHomeSectionContainer  class="bg-light home-sec--services pt-4" >
            <core-zoomed-title origin="325px 167px"  
                :scale="currentProgress == PROGRESS.titleZoomIn ? 50 : 1"
            >
                    <div class="home-sec--services__title-wrapper " >
                        
                                <div class="animate__animated animate__move-y" 
                                    :style="{ '--y' :  currentProgress >= PROGRESS.titleMoveUpAndFade ? '0' :'35%'}"
                                    >
                                    <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress]" class="home-sec__title d-block"
                                    >
                                        <span class="text-primary" >SERVICES</span>
                                    </core-text-progress-highlighter>
                                </div>
                                
                    </div>
            </core-zoomed-title>
            <transition-group mode="out-in"  name="fadeInDelayOutLeft" >
                <core-card class="animate__animated" :key="1" v-if="currentProgress == PROGRESS.firstSlide" />
                <core-card class="bg-primary animate__animated" :key="2" v-else-if="currentProgress == PROGRESS.secondSlide" />
                <core-card class="animate__animated bg-info" :key="3" v-else-if="currentProgress == PROGRESS.thirdSlide" />
                <core-card class="animate__animated bg-danger" :key="4" v-else-if="currentProgress == PROGRESS.fourthSlide" />
                <core-card class="animate__animated bg-secondary" :key="5" v-else-if="currentProgress == PROGRESS.fifthSlide" />
                <core-card class="animate__animated bg-success" :key="6" v-else-if="currentProgress == PROGRESS.sixthSlide" />
            </transition-group>
              
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