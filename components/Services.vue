<template>
  <!-- <scroll-animator @next="currentProgress++" @prev="currentProgress--" :breakPointsNumber="8" :gap="500" :startThresHold="100" >
  </scroll-animator> -->
    <!-- <h1 class="text-secondary position-absolute top-0 left-0 z-10" >{{currentProgress}} : {{ PROGRESS.titleMoveUpAndFade }}</h1> -->
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
    <!-- <image-text-section  /> -->
  <!--  SOCIAL MEDIA MARKETING  Service -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/peacock.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>
              social <br />
              media <br />
              marketing
            </h1>
            <p>
              At Digify we understand that your brand's social media presence
              plays a critical role in establishing credibility. It serves as a
              platform for building trust with potential customers, increasing
              brand awareness, engaging with your target audience, and gaining
              valuable insights into their needs and interests. To effectively
              connect with your target audience, it is essential to leverage
              relevant social media platforms, speak their language, and address
              their specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- MOBILE APPS DEVELOPMENT Service  -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/monkey.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>MOBILE APPS DEVELOPMENT</h1>
            <p>
              At Digify we understand that your brand's social media presence
              plays a critical role in establishing credibility. It serves as a
              platform for building trust with potential customers, increasing
              brand awareness, engaging with your target audience, and gaining
              valuable insights into their needs and interests. To effectively
              connect with your target audience, it is essential to leverage
              relevant social media platforms, speak their language, and address
              their specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Creative-Designs Service  -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/duck.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>
              Creative <br />
              -Designs
            </h1>
            <p>
              Rely on Digify for the latest design trends across various
              mediums, including social media designs, graphic design,
              infographics, and dynamic 2D and 3D animation videos. Our team
              ensures that your brand's visual identity is visually appealing
              and strategically aligned with your marketing goals. With our
              expertise and creativity, we create designs that captivate and
              engage your audience. From eye-catching social media posts to
              visually stunning infographics and captivating animation videos,
              we bring your brand to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- DIGITAL PR Service  -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/giraffe.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>DIGITAL PR</h1>
            <p>
              Recent studies have revealed a significant shift in consumer
              behavior, with people placing more trust in influencers rather
              than traditional advertising. Approximately 60% of young
              individuals make purchases based on influencer recommendations.
              Leveraging influencer marketing can be a powerful strategy to
              boost your brand's visibility, create excitement, connect with
              your target audience, and cultivate a loyal following. This
              approach harnesses the power of "word of mouth" to drive more
              sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- website-development Service  -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/fox2.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>website-development</h1>
            <p>
              Having a website for your business is crucial in establishing
              credibility, especially since the majority of customers visit
              websites before making purchase decisions. This holds true not
              only for traditional businesses but also for e-commerce ventures.
              At Digify, we possess 20 years of experience in website
              development, allowing us to create customized websites tailored to
              your specific business goals. Whether you require a professional
              company website, an e-commerce platform, we've got you covered
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!--DIGITAL-ADVERTISING Service  -->
  <!-- <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 offset-1">
          <div class="services-img">
            <img
              src="@/assets/image/tiger.png"
              class="w-100"
              alt="image-duck"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="services-content">
            <h1>DIGITAL- <br> ADVERTISING</h1>
            <p>
              Online channels offer diverse opportunities for product launches,
              brand awareness, and sales. Online advertising excels in
              flexibility, precision, and measurable results. Digify specializes
              in various digital ad types, social media ads, search engine ads,
              mobile advertising and e-commerce campaigns. With our expertise,
              we maximize reach and conversions. Partnering with us provides
              access to comprehensive digital advertising solutions, driving
              your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->

</template>

<script>
import img1 from "@/assets/image/services/1.jpg";
import img2 from "@/assets/image/services/2.jpg";
import img3 from "@/assets/image/services/3.jpg";
import img4 from "@/assets/image/services/5.jpg";
import img5 from "@/assets/image/services/6.jpg";
import img6 from "@/assets/image/services/7.jpg";
const imgs = [img1,img2,img3,img4,img5,img6,]
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