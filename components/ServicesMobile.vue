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
        <service-item
        class="mb-md-4 mb-xl-0"
            v-if="index == 0"
          :title="services[0].title"
          :description="services[0].description"
          
        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
            <img class="img" :src="imgs[0]" alt="service-img" />
          </div>
        </service-item>
        <service-item
        class="mb-md-4 mb-xl-0"
        v-if="index == 1"
          :title="services[1].title"
          :description="services[1].description"
        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
            <img class="img" :src="imgs[1]" alt="service-img" />
          </div>
        </service-item>
        <service-item
        class="mb-md-4 mb-xl-0"
        v-if="index == 2"
          :title="services[2].title"
          :description="services[2].description"
        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
            <img class="img" :src="imgs[2]" alt="service-img" />
          </div>
        </service-item>
        <service-item
        class="mb-md-4 mb-xl-0"
        v-if="index == 3"
        :title="services[3].title"
          :description="services[3].description"
        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">

            <img class="img" :src="imgs[3]" alt="service-img" />
          </div>
        </service-item>
        <service-item
        class="mb-md-4 mb-xl-0"
        v-if="index == 4"
        :title="services[4].title"
          :description="services[4].description"
        
        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
            <img class="img" :src="imgs[4]" alt="service-img" />
          </div>
        </service-item>
        <service-item
        v-if="index == 5"
        :title="services[5].title"
          :description="services[5].description"

        >
          <div data-aos="fade-up-right" data-aos-anchor-placement="top-center">
            <img class="img" :src="imgs[5]" alt="service-img" />
          </div>
        </service-item>
      </template> 
    </div>
  </CoreHomeSectionContainer>
</template>

<script>
import imgs from "./servicesImages"
import servicesJson from "./services.json";
export default defineNuxtComponent({
  computed: {
    services() {
      return servicesJson;
    },
    imgs(){
      return imgs;
    }
  }
});
</script>
