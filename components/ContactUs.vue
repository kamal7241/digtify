<template>
  <!-- <scroll-animator
    @next="currentProgress++"
    @prev="currentProgress--"
    :breakPointsNumber="5"
    :gap="300"
    :startThresHold="100"
  >
</scroll-animator> -->

  <CoreHomeSectionContainer class="home-sec--portfolio py-4">
    <transition mode="out-in" name="fadeInRightBigOutLeftBig">
        <div v-if="(currentProgress < PROGRESS.firstSlide)"
          class="animate__animated"
        >
          <div class="home-sec--portfolio__title-wrapper">
            <core-zoomed-title
              origin="4rem 1.23rem"
              class="home-sec__title"
              :scale="currentProgress == PROGRESS.titleZoomIn ? 100 : 1"
            >
              <span class="text-white">CONTACT</span>
            </core-zoomed-title>
            <h2 class="text-secondary home-sec__title">US</h2>
          </div>
        </div>
        <div v-else class="home-sec__content animate__animated" >
            <transition mode="out-in" name="fadeInDelayOutLeft">
              <Addresses
                class=" animate__animated"
                v-if="currentProgress == PROGRESS.firstSlide"
              />
              <Contacts
                class="animate__animated "
                v-else-if="currentProgress == PROGRESS.secondSlide "
              />
              <ContactUsFormSection class="animate__animated"
                 v-else-if="currentProgress == PROGRESS.thirdSlide" 
                />
            </transition>
        </div>
      </transition>
    </CoreHomeSectionContainer>
</template>

<script>

const PROGRESS = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  firstSlide: 2,
  secondSlide: 3,
  thirdSlide: 4,
});
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
  [PROGRESS.titleZoomIn]: 100,
  [PROGRESS.titleZoomOut]: 100,
  [PROGRESS.titleMoveUpAndFade]: 0,
  [PROGRESS.firstSlide]: 30,
  [PROGRESS.secondSlide]: 60,
  [PROGRESS.thirdSlide]: 100,

});
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
export default defineNuxtComponent({
  props:['currentProgress'] ,
  data() {
    return {
      progressType: PROGRESS_TYPES.forward  
    };
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
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } ,
    // getUrl() {
    //   return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    // },
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType =
        curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
    },
  },
});
</script>
