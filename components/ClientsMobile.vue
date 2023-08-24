<template>
  <CoreHomeSection class="home-sec--clients">
    <transition mode="out-in" name="fade-delay-1">
      <div class="animate__animated">
        <div class="home-sec--clients__title-wrapper pt-4 pb-4">
          <div data-aos="fade-left">
            <span class="text-secondary home-sec__title">OUR</span>
          </div>
          <div data-aos="fade-right">
            <h2 class="text-white home-sec__title">CLIENTS</h2>
          </div>
        </div>
      </div>
    </transition>
    <div class="clients animate__animated">
      <clients-slider class="mb-5" />
      <clients-slider :reverseDirection="true" />
    </div>
  </CoreHomeSection>
</template>
