<template>
     <core-img-text-section class="animate__animated" >
                  <template #img >
                    <slot></slot>
                  </template>
                  <template #title >
                        <h2 class="h1" >
                          {{ title }}
                      </h2>
                  </template>
                  <template #desc >
                    <p>
                      {{ description }}
                    </p>
                  </template>
                </core-img-text-section>
</template>

<script>
export default defineNuxtComponent( {
  props:['description' , 'title']  
})
</script>