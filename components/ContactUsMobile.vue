<template>
  <CoreHomeSectionContainer class="home-sec--contact-us py-4">
    <div>
      <div class="home-sec--contact-us__title-wrapper">
        <core-zoomed-title origin="3rem 1.89rem" class="home-sec__title" >
          <div data-aos="fade-left">

            <span class="text-white">CONTACT</span>
          </div>
        </core-zoomed-title>
        <div data-aos="fade-right">

          <h2 class="text-secondary home-sec__title">US</h2>
        </div>
      </div>
    </div>
    <Addresses  data-aos="fade-right"     data-aos-anchor-placement="top-center"/>
    <Contacts data-aos="fade-right"     data-aos-anchor-placement="top-center"/>
    <ContactUsFormSection class="py-5" data-aos="fade-right"     data-aos-anchor-placement="top-center"/>
  </CoreHomeSectionContainer>
</template>


