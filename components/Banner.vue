<template>
    <!-- <core-screen-switcher :screens="[0 , 1]" >
    </core-screen-switcher> -->

        <!-- <scroll-animator @next="currentProgress++" @prev="currentProgress--" 
            :breakPointsNumber="2" :gap="300" :startThresHold="0">
        </scroll-animator> -->
            
                        <core-home-section-container ref="banner" class="home-sec--banner banner"
                        :class="currentProgress == ANIMATION_PROGRESS.end ? 'swipe-bg' : '' "
                        >
                            <div class="" >
                                <img class="logo" src="@/assets/image/digify-logo.png" />
                            </div>
                            <div class="home-sec__content" >
                                <div class="home-sec--banner__img-group-wrapper" >
                                    <div class="home-sec--banner__img-group">
                                        <!-- <img
                                        
                                            src="../assets/image/banner.png"
                                            class="animate__animated animate__fadeInUpBig"
                                            :class="currentProgress == ANIMATION_PROGRESS.end ? 'animate__fadeInBottomLeft' : 'animate__fadeOutBottomLeft' "
                                            alt="img"
                                        /> -->

                                    </div>
                                </div>
                                <div class="home-sec--banner__slogan-group">
                                <transition mode="out-in" :duration="2000" name="delay">
                                    <div
                                    v-show="currentProgress == ANIMATION_PROGRESS.entry"
                                    class="home-sec--banner__slogan "
                                    >
                                        <div class="row justify-content-center" >
                                            <div class="col-8" >
                                                    <span
                                                        class="animate__animated title d-block"
                                                        :class="[
                                                        currentProgress == ANIMATION_PROGRESS.entry
                                                            ? progressType == PROGRESS_TYPES.forward
                                                            ? 'animate__fadeInDown'
                                                            : 'animate__fadeInLeft' // enter
                                                            : progressType == PROGRESS_TYPES.forward
                                                            ? 'animate__fadeOutLeft'
                                                            : 'animate__fadeOutDown', // leave
                                                        ]"
                                                        >SHAPPING</span
                                                    >
                                                    <span class="d-block animate__animated"
                                                    :class="[
                                                            currentProgress == ANIMATION_PROGRESS.entry
                                                                ? progressType == PROGRESS_TYPES.forward
                                                                ? 'animate__fadeInUp'
                                                                : 'animate__fadeInDown' // enter
                                                                : progressType == PROGRESS_TYPES.forward
                                                                ? 'animate__fadeOutUp'
                                                                : 'animate__fadeOutDown', // leave
                                                            ]"
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
                                                    :class="[
                                                    currentProgress == ANIMATION_PROGRESS.entry
                                                        ? progressType == PROGRESS_TYPES.forward
                                                        
                                                        ? 'animate__zoomInUp'
                                                        : 'animate__zoomInUp' // enter
                                                        : progressType == PROGRESS_TYPES.forward
                                                        ? 'animate__fadeOutRight animate__fast'
                                                        : 'animate__fadeOutRight animate__fast', // leave
                                                    ]"
                                                >
                                                    <span class="text-secondary" >ECO</span>SYSTEM
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                                <transition>
                                    <div class="home-sec--banner__slogan home-sec--banner__slogan--ternary" v-if="currentProgress == ANIMATION_PROGRESS.end">
                                        <span class="title " >
                                            <span>DIGIFY</span>
                                            <span><span class="" >WE</span> TALK</span>
                                            <span>DIGITAL</span>
                                        </span>
                                    </div>
                                </transition>
                                </div>
                            </div>        
                        </core-home-section-container>
    <!-- <core-screen-switcher :screens="[2 ]" >
                        <core-home-section-container ref="banner" class="home-sec--banner">
                                    <img class="logo" src="@/assets/image/digify-logo.png" />
                                    <div class="home-sec--banner__img-group" >
                                    <img
                                        src="../assets/image/banner3.png"
                                        class="animate__animated animate__fadeInDownBig"
                                        alt="img"
                                    />
                                    <img
                                        src="../assets/image/banner2.png"
                                        class="animate__animated animate__fadeInUpBig"
                                        alt="img"
                                    />
                                    <img
                                        src="../assets/image/banner1.png"
                                        class="animate__animated animate__fadeInDownBig"
                                        alt="img"
                                    />
                                    </div>
                                    <div class="home-sec--banner__slogan-group">
                                    <transition :duration="2000" name="delay">
                                        <div
                                        v-show="currentProgress == ANIMATION_PROGRESS.entry"
                                        class="home-sec--banner__slogan"
                                        >
                                        <span
                                            class="animate__animated"
                                            >SHAPPING THE</span
                                        >
                                        <span
                                            class="wavy title animate__animated"
                                        >
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                            <h2>DIGITAL</h2>
                                        </span>
                                        <span
                                            class="animate__animated"
                                        >
                                            ECOSYSTEM
                                        </span>
                                        </div>
                                    </transition>
                                    <transition>
                                        <div v-if="currentProgress == ANIMATION_PROGRESS.mid" class="home-sec--banner__slogan home-sec--banner__slogan--sec" >
                                            <span class="title " >
                                                <span>THE NEXT</span>
                                                <span>WAVE OF</span>
                                                <span>DIGITAL MEDIA</span>
                                            </span>
                                        </div>
                                        <div class="home-sec--banner__slogan home-sec--banner__slogan--ternary" v-else-if="currentProgress == ANIMATION_PROGRESS.end">
                                            <span class="title " >
                                                <span>DIGIFY</span>
                                                <span><span class="" >WE</span> TALK</span>
                                                <span>DIGITAL</span>
                                            </span>
                                        </div>
                                    </transition>
                                    </div>
                        </core-home-section-container>
    </core-screen-switcher>     -->
</template>

<script>

const ANIMATION_PROGRESS = Object.freeze({
//   beforeEntry : 0 ,
  entry: 0,
  end: 1,
});
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
const BANNER_ELEMENTS_ANIMATIONS = Object.freeze({
  [ANIMATION_PROGRESS.entry]: [""],
  [ANIMATION_PROGRESS.end]: ["animate-last"],
});
export default defineNuxtComponent({
  props:['currentProgress'] ,
  data: () => ({
    // currentProgress: ANIMATION_PROGRESS.entry,
    animationsGap: 100, // by px
    startThresHold : 0.6 , 
    thresHoldNumber : 3 ,
    gapRatio: 0.1 ,
    progressType: PROGRESS_TYPES.forward,
    observerSetteled : false  , 
    triggerFromTop: true ,  
    // breakPoints 0.1 , 0.35 , 0. 
    // 
  }),
  computed: {
    // gapRatio(){
    //     // const { height } = this.$refs.banner.getBoundingClientRect();
    //     // return Math.round((this.animationsGap / height + Number.EPSILON) * 100) / 100;
    //     return 0.1
    // },
    thresHoldRatios(){
        const thresHold = []
        for (let index = 0; index < this.thresHoldNumber; index++) {
            const threshold = this.startThresHold + (this.gapRatio * index)
            thresHold[index] = Math.round(( threshold  + Number.EPSILON) * 100) / 100;
        }
        return thresHold
    },
    ANIMATION_PROGRESS() {
      return ANIMATION_PROGRESS;
    },
    BANNER_ELEMENTS_ANIMATIONS() {
      return BANNER_ELEMENTS_ANIMATIONS;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES;
    },
    currentAnimation() {
      return this.BANNER_ELEMENTS_ANIMATIONS[this.currentProgress] || [];
    },
  },
  methods:{
    next(){
        this.currentProgress++;
    },
    prev(){
        this.currentProgress--; 
    },
    attachScroll(e){
        const {y , height } = el.getBoundingClientRect();

    },
    initScrollAnimations(breakPointsNumber , gap , startPercent ){
        // 2 break points , gap 100px , startPercent 10% of height
        const {y , height } = el.getBoundingClientRect();
        const startY = startPercent * height;
        const endY = gap * breakPointsNumber + startY;
        const breakPointPercentage = (endY - startY) / (breakPointsNumber + 1)
        const breakPointsPercantage = []
        // 200 , 600
        // 600 - 200 = 400 / 3 = 
        // y / 
        for (let index = 0; index < breakPointsNumber; index++) {
            // breakPointsY.push( -1 *  gap * (index + 1)  + startY ) // y -ve inside element
            breakPointsPercantage.push( breakPointPercentage * (index + 1) * -1  ) // y -ve inside element
        }
        // if y / height > -1  , < 0 ... ok in range 
        // if  
        // const currentScrollY
        const breakPointsPosition =  ["" , ""] // +ve scroll above , -ve .. inside element or bottom  ,
        let lastKnownScrollPosition = 0;
            let ticking = false;
            function doSomething(scrollPos) {
                // Do something with the scroll position
            }
            document.addEventListener("scroll", (event) => {
                lastKnownScrollPosition = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        doSomething(lastKnownScrollPosition);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
    },
    getProgress( ratio , yDist  ){
        let progress;
        if(this.triggerFromTop)
            progress =  (ratio - this.startThresHold + Number.EPSILON) /  this.gapRatio
        else {
            const test =  (ratio - this.startThresHold + Number.EPSILON) 
            progress = Math.abs(test  - (this.gapRatio * this.thresHoldNumber) ) / this.gapRatio
            console.log(progress)
        }

        // if(yDist < this.distFromTop)
        //     forward
        // else 
        //     backward
        console.log("prog: " , progress , "prev:" ,  this.currentProgress )
        if(progress > this.currentProgress){
            console.log("forward")
            this.next()
        }
        else {
            console.log('backward')
            this.prev()
        }
    },
    observer(){
        const root = document.querySelector('#root');
            // const rootSize = document.querySelector('#rootSize');
            const target = this.$refs.banner;
            // const targetSize = document.querySelector('#targetSize');
            // const output = document.querySelector('#output pre');
            const io_options = {
                root: root,
                rootMargin: '0px',
                threshold: [...this.thresHoldRatios]
            };
            let io_observer;

            const io_callback = (entries)=> {
                const ratio = entries[0].intersectionRatio;
                const boundingRect = entries[0].boundingClientRect;
                const intersectionRect = entries[0].intersectionRect;
                console.log(intersectionRect , boundingRect )
                console.log(ratio )
                if(!this.observerSetteled){
                    this.observerSetteled = true;
                    return
                }
                if(this.triggerFromTop){
                    if(intersectionRect.bottom == innerHeight )
                      this.getProgress(ratio , intersectionRect.bottom ,  )

                }else {
                    if(intersectionRect.bottom < innerHeight )
                      this.getProgress(ratio , intersectionRect.bottom ,  )
  
                }
             
            }
            io_observer = new IntersectionObserver(io_callback, io_options);
            io_observer.observe(target);
        }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType =
        curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
    },
  },
  mounted() {
    // this.observer()
    // setInterval(()=>{
    //     alert("work")
    //    const currentIndex =  Object.values(ANIMATION_PROGRESS).indexOf(this.currentProgress) + 1;
    //     this.currentProgress = currentIndex > Object.values(ANIMATION_PROGRESS).length ? 0 : currentIndex
    // } , 2000)
    //   setTimeout(()=>{
    //     this.currentProgress = ANIMATION_PROGRESS.mid
    // } , 4000)
  },
});
</script>
