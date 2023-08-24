<template>
            <banner-mobile   />
            <about-mobile/>
            <services-tablet/>
            <portfolio-tablet />
            <clients-mobile   />
            <contact-us-mobile/>
</template>

<script>
import AOS from "aos";
export default defineNuxtComponent({

    mounted() {
    AOS.init({
      duration: 800 
    });
  },

})

</script>