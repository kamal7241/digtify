<template>
      <div class="our-services">
  <v-container class="mb-6">
      <div class="our-services__title-and-subtitle">
          <img class="logo" alt="digify-logo" src="@/assets/image/digify-logo.png" />
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, a. Maiores, culpa.</p>
      </div>
      <v-row align="flex-start" justify="space-between" style="height: 150px" no-gutters>
       <v-col cols="12" md='6'>
        <v-sheet class="pa-2 ma-2 bg-transparent">
            <div class="our-services-content">
          <div class="our-services__content-title ">our services</div>
          <div class="our-services__desc ps-4">
            <p class="my-4 ">
              Praesent sodales vitae odio in lobortis. Morbi enim ligula,
              egestas vitae justo quis.
            </p>
            <p class="my-4">
              Praesent sodales vitae odio in lobortis. Morbi enim ligula,
              egestas vitae justo quis.
            </p>
            <p class="my-4">
              Praesent sodales vitae odio in lobortis. Morbi enim ligula,
              egestas vitae justo quis.
            </p>
            <p class="my-4">
              Praesent sodales vitae odio in lobortis. Morbi enim ligula,
              egestas vitae justo quis.
            </p>
     
          </div>
        </div>    
          </v-sheet>
      </v-col>
        <v-col>
        <v-sheet class="pa-2 ma-2 bg-transparent">
          <div class="our-services-form">
          <OurServicesFields />
        </div>
        </v-sheet>
      </v-col>
    <v-col cols="12" >
      <div class="d-flex justify-center mt-4">
          <NuxtLink to="/" >
          <button class="btn btn-secondary text-uppercase fs-5">visit our website</button>
        </NuxtLink>
      </div>
      </v-col>
      </v-row>
     
</v-container>
</div>
</template>
