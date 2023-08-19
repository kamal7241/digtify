<template>
    <!-- <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="7" :gap="500"
        :startThresHold="100">
    </scroll-animator> -->
        <CoreHomeSectionContainer class="home-sec--about-us pt-4">
            <!-- <h2 class="home-sec__title"> <span class="text-white" >
                    ABOUT</span> 
                    <span class="text-secondary">
                        DIGIFY
                    </span> 
                </h2> -->
                <div class="home-sec--about-us__title-wrapper text-center" >
                    <div class="animate__animated animate__move-y"
                    :style="{ '--y' :  currentProgress >= PROGRESS.titleMoveUpAndFade ? '0' :'35%'}"
                    >
                                <core-zoomed-title class="d-block" origin="3rem 115px"  
                                        :scale="currentProgress == PROGRESS.titleZoomIn ? 150 : 1"
                                    >
                                        <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress][0]" class="home-sec__title d-block"
                                        >
                                            <h2 class="text-white home-sec__title" >ABOUT</h2>
                                        </core-text-progress-highlighter>
                                </core-zoomed-title>
                                <core-text-progress-highlighter :highlight-ratio="PROGRESS_HIGHLIGHT_RATIO[currentProgress][1]"
                                        class="">
                                        <h2 class="text-secondary home-sec__title">DIGIFY</h2>
                                </core-text-progress-highlighter>
                            </div>
                </div>
            <!-- <span class="text-dark bg-secondary z-10 position-absolute top-0 left-0  h2">{{ 'current progress : ' +
                currentProgress + ':' + ' progress type : ' + progressType }}</span> -->
            <div class="home-sec--about-us__content text-light " >
                <div class="row justify-content-center " >
                    <div class="col-9" >
                        <transition-group mode="out-in" name="fadeInDelayOutUp">
                            <template v-for="_ in PROGRESS.thirdSlide" :key="'content' + _" >
                                <p v-if="currentProgress == PROGRESS.firstSlide" class="animate__animated ">
                                    <span>
                                        Digify is an esteemed digital media consultancy firm that was established in 2014, Digify team is young and fresh in spirit, old and experienced at vision We at Digify specialize in a comprehensive range of digital marketing and advertising services
                                    </span>
                                </p>
                                <p v-else-if="currentProgress == PROGRESS.secondSlide" class="animate__animated">
                                    <span>
                                        Our firm embodies a unique blend of youthful energy and seasoned expertise. With an exceptional team comprising talented content writers, expert social media analysts, proficient digital media buyers,
                                    </span>
                                </p>
                                <p v-else-if="currentProgress == PROGRESS.thirdSlide" class="animate__animated">
                                    <span>
                                        skilled graphic designers, and accomplished 2D and 3D animators, we possess the capabilities to deliver incomparable results. With strategically located offices in Cairo and Jeddah, we have garnered an extensive client base in the MENA region, boasting over 50 satisfied clients. This diversity has enriched our understanding of various cultures and industries.
                                    </span>
                                </p>

                            </template>
                        </transition-group>
                    </div>
                </div>
            </div>

        </CoreHomeSectionContainer>
</template>

<script>
const PROGRESS = Object.freeze({
    titleZoomIn: 0,
    titleZoomOut: 1,
    titleMoveUpAndFade: 2,
    firstSlide: 3,
    secondSlide: 4,
    thirdSlide: 5,
});
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
    [PROGRESS.titleZoomIn]: [100, 100],
    [PROGRESS.titleZoomOut]: [100, 100],
    [PROGRESS.titleMoveUpAndFade]: [0, 0],
    [PROGRESS.firstSlide]: [21.5, 0],
    [PROGRESS.secondSlide]: [62, 0],
    [PROGRESS.thirdSlide]: [100, 100],
})
const PROGRESS_TYPES = Object.freeze({
    forward: 1,
    backward: 2,
});
export default defineNuxtComponent({
    props:['currentProgress'] ,
    data() {
        return {
            progressType: PROGRESS_TYPES.forward
        }
    },
    computed: {
        PROGRESS() {
            return PROGRESS;
        },
        PROGRESS_TYPES() {
            return PROGRESS_TYPES;
        },
        PROGRESS_HIGHLIGHT_RATIO() {
            return PROGRESS_HIGHLIGHT_RATIO;
        }
    },
    watch: {
        currentProgress(curr, prev) {
            this.progressType =
                curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
        },
        // currentProgress(curr, prev) {
        //     if(curr == PROGRESS.titleMoveUpAndFade && prev == PROGRESS.titleZoomOut){
        //             this.currentProgress++
        //     }
        // },
    }
})

</script>