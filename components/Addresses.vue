<template>
  <contact-us-info-section class="contact-us-info" >
 <template #img >
         <img
         src="../assets/image/fox.png"
         alt="fox-image"
         :style="{'animation-delay' : delay || '1s' }"
       />
 </template>
 <template #title >
   <div class="branch-details">
   <h2 class="contact-us-branch-section__title"><span class="text-secondary">Digify </span>OFFICES</h2>
   <div class="contact-us-branch-section__desc">
    
  <p><span class="" >Egypt:</span>  82 AbdulAziz Fahmy Cairo Governorate , 11361.</p>
     <p><span class="" >Saudi Arabia :</span> Office #101 The Courtyard, Prince Saud Al Faisal ST. Jeddah.</p>
   </div>
 </div>
 </template>
</contact-us-info-section>
</template>

<script>
export default defineNuxtComponent({
  props:['delay']
})

</script>