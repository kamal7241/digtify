<template>
  <div class="our-services ">
    <v-container >
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
        <v-switch v-model="model" :hide-details="true" 
         false-value="En"
          true-value="Ar"
        class="switch-style"
        @click="switchLanguage"
        >
          <template v-slot:label>
            <span v-if="model === 'Ar'">
              <img
                src="@/assets/image/flags/Ar.png"
                alt="Arabic"
                style="width: 30px; height: 30px"
              />
            </span>
            <span v-else>
              <img
                src="@/assets/image/flags/En.png"
                alt="English"
                style="width: 30px; height: 30px"
              />
            </span>
          </template>
        </v-switch>
      </div>
    </v-container>
    <v-container class="mb-6">
      <div class="our-services__title-and-subtitle">
        <h1 class="subtitle mt-3 mb-3">
          {{ $t('services.description') }}
        </h1>
      </div>
      <v-row
        align="flex-start"
        justify="space-between"
        no-gutters
      >
        <v-col cols="12" md="6">
          <v-sheet class="pa-2 ma-2 bg-transparent p-0 m-0">
            <div class="our-services-content">
              <div class="our-services__desc">
                <div class="mb-4" v-for="service in services" :key="service.id">
                  <h5 class="text-secondary">{{ service.title }}</h5>
                  <p class="mb-0">
                    {{ service.description }}
                  </p>
                  <p>
                    <NuxtLink 
                      class="inline-block text-white text-sm d-flex gap-2 fs-6" 
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
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2 bg-transparent pe-0 me-0 ps-4 ms-4">
            <div class="our-services-form">
              <OurServicesFields />
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-center gap-3">
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
const phoneNumber = "+201119858118";
const message = "";


export default {
  setup() {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL || ''; // Fallback to empty if baseURL is not defined
    return{
      baseURL,
    }
    },
  data() {
    return {
      // Use a regular function to access this
      model: this.$i18n.locale === "en" ? "En" : "Ar",
    };
  },
  computed: {
    services() {
      return this.$i18n.locale === "en" ? ENServices : ARServices;
    },
    phoneNumber(){
      return "+201119858118";
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
