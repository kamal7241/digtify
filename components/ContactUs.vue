<template>
  <scroll-animator
    @next="currentProgress++"
    @prev="currentProgress--"
    :breakPointsNumber="8"
    :gap="300"
    :startThresHold="100"
  >
  <CoreHomeSectionContainer class="home-sec--portfolio py-4">
      <h1 class="position-absolute top-0 right-0 bg-light z-10 text-info" >{{ currentProgress }}</h1>
          <div v-if="(currentProgress <= PROGRESS.titleMoveUpAndFade)"
            class="animate__animated"
            :class="{
              'animate__fadeOutLeftBig':
                currentProgress >= PROGRESS.titleMoveUpAndFade,
            }"
          >
            <div class="home-sec--portfolio__title-wrapper">
              <core-zoomed-title
                origin="30px 100px"
                class="home-sec__title"
                :scale="currentProgress == PROGRESS.titleZoomIn ? 150 : 1"
              >
                <span class="text-white">CONTACT</span>
              </core-zoomed-title>
              <h2 class="text-secondary home-sec__title">US</h2>
            </div>
          </div>
        <div class="home-sec__content" >
            <transition-group mode="out-in" name="fadeInDelayOutLeft">
              <SaudiArabiaBranch
                class=" animate__animated"
                :key="2"
                v-if="currentProgress == PROGRESS.firstSlide"
              />
              <CairoBranch
                class="animate__animated "
                :key="3"
                v-else-if="currentProgress == PROGRESS. secondSlide"
              />
              <ContactUsEmailSection
                class="animate__animated "
                :key="4"
                v-else-if="currentProgress == PROGRESS.thirdSlide"
              />
              <RingUsRight
                class="animate__animated "
                :key="5"
                v-else-if="currentProgress == PROGRESS.fourthSlide"
              />
              <RingUsLeft
                class="animate__animated "
                :key="6"
                v-else-if="currentProgress == PROGRESS.fifthSlide "
              />
              <ContactUsFormSection class="animate__animated"
                :key="1"   v-else-if="currentProgress == PROGRESS.sixthSlide" 
                />
            </transition-group>
        </div>
    </CoreHomeSectionContainer>
  </scroll-animator>
</template>

<script>

const PROGRESS = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8,
});
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
  [PROGRESS.titleZoomIn]: 100,
  [PROGRESS.titleZoomOut]: 100,
  [PROGRESS.titleMoveUpAndFade]: 0,
  [PROGRESS.firstSlide]: 15,
  [PROGRESS.secondSlide]: 30,
  [PROGRESS.thirdSlide]: 45,
  [PROGRESS.fourthSlide]: 60,
  [PROGRESS.fifthSlide]: 75,
  [PROGRESS.sixthSlide]: 100,
});
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
export default defineNuxtComponent({

  data() {
    return {
      currentProgress: PROGRESS.titleZoomIn,
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
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    },
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType =
        curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
    },
  },
});
</script>
