<template>
            <banner-mobile />
            <about-mobile/>
            <services-mobile/>
            <portfilio-mobile />
            <clients-mobile />
            <contact-us-mobile />
</template>

<script>
import AOS from "aos";
export default defineNuxtComponent({

    mounted() {
    AOS.init({
      duration: 1000
        });
  },

})

</script>