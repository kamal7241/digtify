<template>
    <CoreHomeSectionContainer class="bg-light home-sec--services py-4">
      <div class="home-sec--services__title-wrapper text-center">
        <div>
          <core-text-progress-highlighter class="home-sec__title d-block" data-aos="zoom-out">
            <span class="text-primary">SERVICES</span>
          </core-text-progress-highlighter>
        </div>
      </div>
  
      <div class="home-sec__content flex-grow-1 py-5">
          <template v-for="(_ , index) in services" :key="'service' + index">

            <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 0">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/peacock.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1" data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[0].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left" >
                            {{ services[0].description }}
                            </p>
                        </template>
                </core-img-text-section>
                <!--  -->
          <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 1">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/monkey.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1"  data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[1].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left">
                            {{ services[1].description }}
                            </p>
                        </template>
                </core-img-text-section>
          <!--  -->
          <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 2">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/giraffe.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1" data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[2].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left">
                            {{ services[2].description }}
                            </p>
                        </template>
                </core-img-text-section>
          <!--  -->

          <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 3">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/fox2.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1"  data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[3].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left">
                            {{ services[3].description }}
                            </p>
                        </template>
                </core-img-text-section>
          <!--  -->
          <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 4">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/tiger.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1"  data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[4].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left">
                            {{ services[4].description }}
                            </p>
                        </template>
                </core-img-text-section>
          <!--  -->

        <core-img-text-section class="animate__animated mb-md-4 mb-xl-0"   v-if="index == 4">
                        <template #img >
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" >
                                        <img class="img" src="@/assets/image/tiger.png" alt="service-img" />
                            </div>
                        </template>
                        <template #title >
                                <h2 class="h1"  data-aos="fade-up"
                                data-aos-easing="ease-out-cubic" >
                                {{ services[4].title }}
                            </h2>
                        </template>
                        <template #desc >
                            <p  data-aos="fade-up-left">
                            {{ services[4].description }}
                            </p>
                        </template>
                </core-img-text-section>
    </template> 
      </div>
    </CoreHomeSectionContainer>
  </template>
  
  <script>
  import servicesJson from "./services.json";
  export default defineNuxtComponent({
    computed: {
      services() {
        return servicesJson;
      },
    }
  });
  </script>
  