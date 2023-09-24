<template>
        <CoreHomeSectionContainer  class="bg-light home-sec--services py-4" >
          <div class="home-sec--services__title-wrapper text-center "
          :class="[ 
          {'entry-reverse' : currentProgress == PROGRESS.titleZoomIn && progressType == PROGRESS_TYPES.backward},
          {'entry' : currentProgress >= PROGRESS.firstSlide} , 
          {'first reverse' : currentProgress == PROGRESS.firstSlide  && progressType == PROGRESS_TYPES.backward} , 
          {'second' : currentProgress == PROGRESS.secondSlide  && progressType == PROGRESS_TYPES.forward} , 
          {'second reverse' : currentProgress == PROGRESS.secondSlide && progressType == PROGRESS_TYPES.backward} , 
          {'third' : currentProgress == PROGRESS.thirdSlide && progressType == PROGRESS_TYPES.forward} , 
          {'third reverse' : currentProgress == PROGRESS.thirdSlide && progressType == PROGRESS_TYPES.backward} , 
          {'fourth' : currentProgress == PROGRESS.fourthSlide && progressType == PROGRESS_TYPES.forward} , 
          {'fourth reverse' : currentProgress == PROGRESS.fourthSlide && progressType == PROGRESS_TYPES.backward} , 
          {'fifth' : currentProgress == PROGRESS.fifthSlide && progressType == PROGRESS_TYPES.forward} , 
          {'fifth reverse' : currentProgress == PROGRESS.fifthSlide && progressType == PROGRESS_TYPES.backward} , 
          {'sixth' : currentProgress >= PROGRESS.sixthSlide} , 
        ]"
          >
            <core-zoomed-title 
            >
                        
                                <div class="translate-container animate__move-y animate__animated" 
                                    >
                                    <core-text-progress-highlighter  class="home-sec__title d-block"
                                    
                                    >
                                        <span class="text-primary" >SERVICES</span>
                                    </core-text-progress-highlighter>
                                </div>
                                
                              </core-zoomed-title>
            </div>
            <div class=" home-sec__content flex-grow-1"  >
              <transition-group mode="out-in"  name="fadeInDelayOutLeft" >
                <template v-for="_key in 6" :key="'service' + _key"  >
                    <service-item  v-if="currentProgress == PROGRESS.firstSlide" 
                      class=""   
                      :title="services[currentProgress - 1 ].title" 
                      :description="services[currentProgress - 1 ].description" >
                      <div class="animate__animated img" :style="{backgroundImage : `url('${imgs[0]}')`}" >
                      </div>
                  </service-item>
                    <service-item  v-else-if="currentProgress == PROGRESS.secondSlide" 
                    class=""   
                    :title="services[currentProgress - 1 ].title" 
                    :description="services[currentProgress - 1 ].description" >
                    <div  class="animate__animated img" :style="{backgroundImage : `url('${imgs[1]}')`}" >

                    </div>
                  </service-item>
                    <service-item  v-else-if="currentProgress == PROGRESS.thirdSlide" 
                    class=""   :title="services[currentProgress - 1 ].title" 
                    :description="services[currentProgress - 1 ].description" >
                    <div  class="animate__animated img" :style="{backgroundImage : `url('${imgs[2]}')`}" >

                    </div>
            
                  </service-item>
                    <service-item v-else-if="currentProgress == PROGRESS.fourthSlide" 
                    class=""   :title="services[currentProgress - 1 ].title" 
                    :description="services[currentProgress - 1 ].description" >
                    <div   class="animate__animated img" :style="{backgroundImage : `url('${imgs[3]}')`}" >

                    </div>
                  </service-item>
                    <service-item  v-else-if="currentProgress == PROGRESS.fifthSlide" 
                    class=""   :title="services[currentProgress - 1 ].title" 
                    :description="services[currentProgress - 1 ].description" >
                    <div  class="animate__animated img" :style="{backgroundImage : `url('${imgs[4]}')`}" >

                    </div>
                  </service-item>
                  <service-item  v-else-if="currentProgress >= PROGRESS.sixthSlide" 
                    class=""   :title="services[currentProgress - 1 ].title" 
                    :description="services[currentProgress - 1 ].description" >
                    <div  class="animate__animated img" :style="{backgroundImage : `url('${imgs[5]}')`}" >

                    </div>
                  </service-item>
                </template>
              </transition-group>
            </div>
              
        </CoreHomeSectionContainer>
  <!--  SOCIAL MEDIA MARKETING  Service -->
</template>

<script>
import imgs from "./servicesImages"
import servicesJson from "./services.json"
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
    [PROGRESS.titleZoomIn] : undefined , 
    [PROGRESS.firstSlide] : 26 ,
    [PROGRESS.secondSlide] : 54 ,  
    [PROGRESS.thirdSlide] : 74 ,  
    [PROGRESS.fourthSlide] : 87 ,  
    [PROGRESS.fifthSlide] : 100 ,  
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
          return imgs;
        },
        services(){
          return servicesJson;
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