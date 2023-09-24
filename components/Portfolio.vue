<template>
    <CoreHomeSectionContainer  class="home-sec--portfolio pt-4" >
            <div class="home-sec--portfolio__title-wrapper" 
            :class="[ 
          {'entry-reverse' : currentProgress == PROGRESS.titleZoomIn && progressType == PROGRESS_TYPES.backward},
          {'entry ' : currentProgress >= PROGRESS.firstSlide} , 
          {'first reverse' : currentProgress == PROGRESS.firstSlide  && progressType == PROGRESS_TYPES.backward} , 
          {'second' : currentProgress == PROGRESS.secondSlide  && progressType == PROGRESS_TYPES.forward} , 
          {'second reverse' : currentProgress == PROGRESS.secondSlide && progressType == PROGRESS_TYPES.backward} , 
          {'third' : currentProgress >= PROGRESS.thirdSlide} , 
        ]"
            >
                <div class="animate__animated animate__move-y translate-container">
                        <core-zoomed-title 
                        class="home-sec__title position-absolute animate__animated"  
                        >
                                    <span class="text-secondary" >OUR</span>
                        </core-zoomed-title>
                        <div style="transform:translateY(12em)" >
                            <core-text-progress-highlighter  class="animate__animated home-sec__title d-block"
                                    :class="{
                                    'animate__fadeInLeft animate__delay-1s' : currentProgress >= PROGRESS.firstSlide , 
                                    'animate__fadeOutLeft' : currentProgress == PROGRESS.titleZoomIn , 
                                    }"
                            >
                            <span class="text-white" >PORTFOLIO</span>
                        </core-text-progress-highlighter>
                        </div>
            </div>
        </div>
        <transition mode="out-in"  name="fadeInDelay3AndHalfsOutLeft">
            <div v-if="currentProgress >= PROGRESS.firstSlide" class="home-sec__content animate__animated" >
                <div class="row justify-content-center" >
                    <div class="col-lg-10 col-12" >
                        <div class="row justify-content-center" >
                            <transition-group mode="out-in"  name="fadeInDelayOutLeft" >
                                <template  v-if="currentProgress == PROGRESS.firstSlide" >
                                    <PortfolioItem class="animate__animated col-4" :title="portfolioList[0].title" >
                                        <img alt="portfolio-img1" :src="imgs[0]"  />
                                    </PortfolioItem>
                                    <PortfolioItem :title="portfolioList[1].title" class="animate__animated col-4" >
                                            <img alt="portfolio-img2" :src="imgs[1]"  />
                                    </PortfolioItem>
                                    <PortfolioItem  :title="portfolioList[2].title" class="animate__animated col-4"  >
                                            <img alt="portfolio-img3" :src="imgs[2]"  />
                                    </PortfolioItem>
                                </template>
                                <template v-else-if="currentProgress == PROGRESS.secondSlide" >
                                    <PortfolioItem :title="portfolioList[3].title" class="animate__animated col-4"  >
                                            <img alt="portfolio-img4" :src="imgs[3]"  />
                                    </PortfolioItem>
                                    <PortfolioItem  :title="portfolioList[4].title" class="animate__animated col-4" >
                                            <img alt="portfolio-img5" :src="imgs[4]"  />
                                    </PortfolioItem>
                                    <PortfolioItem :title="portfolioList[5].title" class="animate__animated col-4" >
                                            <img alt="portfolio-img6" :src="imgs[5]"  />
                                    </PortfolioItem>
                                </template>
                                <template v-else-if="currentProgress == PROGRESS.thirdSlide"  >
                                    <PortfolioItem  :title="portfolioList[6].title" class="animate__animated col-4"  >
                                            <img alt="portfolio-img7" :src="imgs[6]"  />
                                    </PortfolioItem>
                                    <PortfolioItem :title="portfolioList[7].title" class="animate__animated col-4"  >
                                            <img alt="portfolio-img8" :src="imgs[7]"  />
                                    </PortfolioItem>
                                    <PortfolioItem :title="portfolioList[8].title" class="animate__animated col-4"  >
                                            <img alt="portfolio-img9" :src="imgs[8]"  />
                                    </PortfolioItem>
                                </template >
                            </transition-group>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
              
        </CoreHomeSectionContainer>


</template>

<script>
import portfolioJson from "./portfolio.json"
import imgs from "./portfolioImages"
const PROGRESS = Object.freeze({
    titleZoomIn : 0 , 
    firstSlide : 1 , 
    secondSlide : 2  ,
    thirdSlide : 3  ,
}); 
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
    [PROGRESS.titleZoomIn] : 100 , 
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
        imgs(){
            return imgs
        },
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
