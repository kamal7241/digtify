<template>
    <!-- <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="7" :gap="500" :startThresHold="100" >
    </scroll-animator> -->
        <CoreHomeSectionContainer  class="home-sec--portfolio pt-4" >
            <div class="animate__animated animate__move-y"
                :style="{ '--y' :  currentProgress >= PROGRESS.titleMoveUpAndFade ? '-12em' :'35%'}">
            <div class="home-sec--portfolio__title-wrapper" >
                    <core-zoomed-title 
                    :origin="currentProgress >= PROGRESS.titleMoveUpAndFade ? '3.2rem' :'30px 100px'" 
                     class="home-sec__title position-absolute"  
                        :scale="currentProgress == PROGRESS.titleZoomIn ? 150 :  currentProgress >= PROGRESS.titleMoveUpAndFade ? 200 : 1"
                    >
                                <span class="text-secondary" >OUR</span>
                            </core-zoomed-title>
                    <div style="transform:translateY(12em)" >
                        <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress]" class="animate__animated home-sec__title d-block"
                                :class="{'animate__fadeInLeft animate__delay-1s' : currentProgress >= PROGRESS.titleZoomOut , 
                                 'animate__fadeOutLeft' : currentProgress == PROGRESS.titleZoomIn , 
                                }"
                        >
                        <span class="text-white" >PORTFOLIO</span>
                    </core-text-progress-highlighter>
                    </div>
            </div>
        </div>
        <div class="home-sec__content" >
            <div class="row justify-content-center" >
                <transition-group mode="out-in"  name="fadeInDelayOutLeft" >
                    <template  v-if="currentProgress == PROGRESS.firstSlide" >
                        <PortfolioItem class="animate__animated col-6" :title="portfolioList[0].title" >
                            <img src="../assets/image/aqm.png"  />
                        </PortfolioItem>
                        <PortfolioItem :title="portfolioList[1].title" class="animate__animated col-6" >
                                <img src="../assets/image/nit.png"  />
                        </PortfolioItem>
                    </template>
                    <template v-if="currentProgress == PROGRESS.secondSlide" >

                        <PortfolioItem  :title="portfolioList[2].title" class="animate__animated col-6"  >
                                <img src="../assets/image/aqm.png"  />
                        </PortfolioItem>
                        <PortfolioItem :title="portfolioList[3].title" class="animate__animated col-6"  >
                                <img src="../assets/image/nit.png"  />
                        </PortfolioItem>
                    </template>
                    <template v-if="currentProgress == PROGRESS.thirdSlide"  >
                        <PortfolioItem  :title="portfolioList[4].title" class="animate__animated col-6" >
                                <img src="../assets/image/aqm.png"  />
                        </PortfolioItem>
                        <PortfolioItem :title="portfolioList[5].title" class="animate__animated col-6" >
                                <img src="../assets/image/nit.png"  />
                        </PortfolioItem>
                    </template >
                    <template v-if="currentProgress >= PROGRESS.fourthSlide">
                        <PortfolioItem  :title="portfolioList[6].title" class="animate__animated col-6"  >
                                <img src="../assets/image/aqm.png"  />
                        </PortfolioItem>
                        <PortfolioItem :title="portfolioList[7].title" class="animate__animated col-6"  >
                                <img src="../assets/image/nit.png"  />
                        </PortfolioItem>
                    </template>
         
                </transition-group>
            </div>
        </div>
              
        </CoreHomeSectionContainer>


</template>

<script>
import portfolioJson from "./portfolio.json"
const PROGRESS = Object.freeze({
    titleZoomIn : 0 , 
    titleZoomOut : 1 , 
    titleMoveUpAndFade : 2 , 
    firstSlide : 3 , 
    secondSlide : 4  ,
    thirdSlide : 5  ,
    fourthSlide : 6  ,
}); 
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
    [PROGRESS.titleZoomIn] : 100 , 
    [PROGRESS.titleZoomOut] : 100 , 
    [PROGRESS.titleMoveUpAndFade] : 0 , 
    [PROGRESS.firstSlide] : 36.5 ,
    [PROGRESS.secondSlide] : 50 ,  
    [PROGRESS.thirdSlide] : 60 ,  
    [PROGRESS.fourthSlide] : 100 ,  
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
        portfolioList(){
            return portfolioJson;
        },
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
