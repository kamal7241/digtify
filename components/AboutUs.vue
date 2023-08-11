<template>
    <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="5" :gap="150" :startThresHold="0" >
            <CoreHomeSection class="home-sec--about-us" >
                <!-- <h2 class="home-sec__title"> <span class="text-white" >
                    ABOUT</span> 
                    <span class="text-secondary">
                        DIGIFY
                    </span> 
                </h2> -->
                <span class="text-dark bg-secondary z-10 position-fixed top-0 left-0  h2" >{{ 'current progress : '  + currentProgress + ':' + ' progress type : ' + progressType }}</span>
                <div class="home-sec--about-us__title-wrapper" >
                    <div class="animate__animated" :class="{'animate__move-up' : currentProgress >= PROGRESS.titleMoveUpAndFade  }" style="--y:-20%" >
                        <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress][0]" class="home-sec__title d-block animate__animated"
                        :class="{'animate__zoom-in' :  currentProgress == PROGRESS.titleZoomOut && progressType == PROGRESS_TYPES.backward ,
                             'animate__zoom-out' : currentProgress >= PROGRESS.titleZoomOut  , 
                            //  'animate__zoom-out' : currentProgress >= PROGRESS.titleZoomOut  , 
                             
                             
                             }"
                        >
                            <span class="text-white" >ABOUT  </span>
                        </core-text-progress-highlighter>
                        <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress][1]" class="home-sec__title" >
                            <span class="text-secondary">DIGIFY</span>
                        </core-text-progress-highlighter>
                    </div>
                    
                </div>
                <transition-group mode="out-in" name="fadeInDelayOutUp"  >
                    <p v-if="currentProgress == PROGRESS.firstSlide" class="text-light animate__animated " 
                  
                    >
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                    </p>
                    <p v-else-if="currentProgress == PROGRESS.secondSlide" class="text-secondary animate__animated" >
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                    </p>
                    <p v-else-if="currentProgress == PROGRESS.thirdSlide" class="text-warning animate__animated" >
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos velit sint. Aliquam quae repellat, amet dolore illum voluptate excepturi earum autem accusamus sunt consequuntur vero ut laudantium commodi. Repellendus! 
                    </p>
                </transition-group>
        
            </CoreHomeSection>
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
}); 
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
    [PROGRESS.titleZoomIn] : [100 , 100] , 
    [PROGRESS.titleZoomOut] : [100 , 100] , 
    [PROGRESS.titleMoveUpAndFade] : [0 , 0] , 
    [PROGRESS.firstSlide] : [50 , 0] ,
    [PROGRESS.secondSlide] : [100 , 0] ,  
    [PROGRESS.thirdSlide] : [100 , 100] ,  
})
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
export default defineNuxtComponent({
    data(){
        return {
            currentProgress : 0 ,
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