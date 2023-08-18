<template>
    <contact-us-info-section class="contact-us-info contact-us-info--contacts" >
    <template #img >
            <div class="contacts-img" ></div>
    </template>
    <template #title >
        <div class="branch-details">
          <h1 class="contact-us-branch-section__title">contact <span class="text-secondary">us</span></h1>
          <p class="contact-us-branch-section__desc">
            info@digifymena.com <br>
            +20227748700 <br />
            +201144447609
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