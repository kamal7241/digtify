<template>
    <contact-us-info-section class="contact-us-info contact-us-info--contacts" >
    <template #img >
            <div class="contacts-img" :style="{backgroundImage: `url(${img})` }"  ></div>
    </template>
    <template #title >
        <div class="branch-details">
          <h2 class="contact-us-branch-section__title">contact <span class="text-secondary">us</span></h2>
          <p class="contact-us-branch-section__desc">
            info@digifymena.com <br>
            +20-22-774-8700 <br />
            +20-11-4444-7609 <br />
            +966-55-987-100
          </p>
    </div>
    </template>
</contact-us-info-section>
</template>
<script>
import img from "../assets/image/ring.png"
export default defineNuxtComponent({
    computed:{
        img(){
            return img
        }
    }
})

</script>