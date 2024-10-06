<template>
  <div class="our-services ">
    <v-container   >
      <div
        class="our-services__header d-flex justify-content-between items-center"
      >
      <NuxtLink to="/en" >
        <img
          class="logo"
          alt="digify-logo"
          src="@/assets/image/digify-logo.png"
        />
      </NuxtLink>
      <div 
      :class="[
      'd-flex flex-nowrap align-items-center gap-3',
      lang === 'ar' ? 'flex-row-reverse' : 'flex-row',
      ]" 
      >
          <span 
          class="text-sm text-white fw-bold"
          :class="lang === 'en' ? '' : 'opacity-50'"
          
          >EN</span>
          <v-switch :modelValue="lang" :hide-details="true" 
           false-value="en"
            true-value="ar"
            class="switch-style"
          @click="switchLanguage"
          >
          </v-switch>
          <span class="text-sm text-white fw-bold"
          :class="lang === 'ar' ? '' : 'opacity-50'"
          >ع</span>
     

      </div>
      </div>
    </v-container>
    <v-container class="mb-6">
      <div class="our-services__title-and-subtitle">
        <h1 class="subtitle mt-3 mb-3">
          {{ $t('services.description') }}
        </h1>
      </div>
      <v-row
      >
        <v-col cols="12" md="6">
          <v-sheet class="bg-transparent p-0 m-0">
            <div class="our-services-content">
              <div class="our-services__desc">
                <div class="mb-4" v-for="service in services" :key="service.id">
                  <h5 class="text-secondary">{{ service.title }}</h5>
                  <p class="mb-0">
                    {{ service.description }}
                  </p>
                  <p>
                    <NuxtLink 
                      class="d-inline-flex text-white text-sm gap-2 fs-6 mt-2" 
                      :to="`https://wa.me/${phoneNumber}`"

                      >
                      <span class="" >{{ $t('contactForMoreDetails') }}</span>
                        <v-icon class="text-xs" >mdi-whatsapp</v-icon>
                  </NuxtLink>
                  </p>
                </div>
              </div>
            </div>
          </v-sheet>
          <v-sheet class="bg-transparent">
            <div class="our-services-form">
              <OurServicesFields />
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="6">
          <img
          class="mw-100"
          alt="digify-logo"
          src="@/assets/image/our-services/landing-page.png"
        />
      
          <div class="d-flex justify-center gap-3 mt-4">
            <!-- <h1>{{ $t('welcome') }}</h1>
        <p>{{ $t('our-services.description') }}</p> -->
            <!-- <button @click="changeLanguage('ar')">Switch to Arabic</button> -->
            <NuxtLink to="/en">
              <button class="btn btn-secondary text-uppercase fs-5 rounded-5 px-5">
                {{$t('visitOurWebsite')}} 
              </button>
            </NuxtLink>
            <a 
            :href="`${baseURL}/digify-portfolio.pdf`"
            target="_blank"
            download="digify-portfolio.pdf"
            >
              <button class="btn btn-success text-uppercase fs-5 rounded-5 px-5">
                {{$t('downloadPortfolio')}} 
                <v-icon class="text-xs" >mdi-arrow-down-thin</v-icon>
              </button>
            </a>
          </div>
        </v-col>
     
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ENServices from "@/static/en/services.json";
import ARServices from "@/static/ar/services.json";
const phoneNumber = "+966 56 471 5121";
const message = "";


export default {
  setup() {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL || ''; // Fallback to empty if baseURL is not defined
    return{
      baseURL,
    }
  },
  computed: {
    lang(){
      return this.$i18n.locale === "en" ? "en" : "ar";
    },
    services() {
      return this.$i18n.locale === "en" ? ENServices : ARServices;
    },
    phoneNumber(){
      return phoneNumber;
    }
  },
  methods: {
     switchLanguage() {
      const newLocale = this.$i18n.locale === 'en' ? 'ar' : 'en';
      this.$i18n.setLocale(newLocale);
    },
    openWhatsApp() {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    },
  },
};
</script>
