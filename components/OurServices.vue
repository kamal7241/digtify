<template>
  <div class="our-services ">
    <v-container class="mb-6">
      <div class="our-services__title-and-subtitle">
        <div
          class="our-services__header d-flex justify-content-between items-center"
        >
          <img
            class="logo"
            alt="digify-logo"
            src="@/assets/image/digify-logo.png"
          />
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
        <p class="subtitle mt-3 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, a.
          Maiores, culpa.
        </p>
      </div>
      <v-row
        align="flex-start"
        justify="space-between"
        style="height: 150px"
        no-gutters
      >
        <v-col cols="12" md="6">
          <v-sheet class="pa-2 ma-2 bg-transparent p-0 m-0">
            <div class="our-services-content">
              <div class="our-services__content-title">our services</div>
              <div class="our-services__desc ps-4">
            <h1>{{ $t('services.title') }}</h1>
                <p class="mb-5">
                  Praesent sodales vitae odio in lobortis. Morbi enim ligula,
                  egestas vitae justo quis.
                  <v-icon @click="openWhatsApp">mdi-whatsapp</v-icon>
                </p>
                <p class="mb-5">
                  Praesent sodales vitae odio in lobortis. Morbi enim ligula,
                  egestas vitae justo quis.
                  <v-icon @click="openWhatsApp">mdi-whatsapp</v-icon>
                </p>
                <p class="mb-5">
                  Praesent sodales vitae odio in lobortis. Morbi enim ligula,
                  egestas vitae justo quis.
                  <v-icon @click="openWhatsApp">mdi-whatsapp</v-icon>
                </p>
                <p class="mb-5">
                  Praesent sodales vitae odio in lobortis. Morbi enim ligula,
                  egestas vitae justo quis.
                  <v-icon @click="openWhatsApp">mdi-whatsapp</v-icon>
                </p>
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
          <div class="d-flex justify-center">
            <!-- <h1>{{ $t('welcome') }}</h1>
        <p>{{ $t('our-services.description') }}</p> -->
            <!-- <button @click="changeLanguage('ar')">Switch to Arabic</button> -->
            <NuxtLink to="/">
              <button class="btn btn-secondary text-uppercase fs-5 rounded-5">
                visit our website
              </button>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const phoneNumber = "+201119858118";
const message = "";


export default {
  data() {
    return {
      // Use a regular function to access this
      model: this.$i18n.locale === "en" ? "En" : "Ar",
    };
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
