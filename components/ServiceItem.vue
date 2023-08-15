<template>
     <core-img-text-section class="animate__animated" >
                  <template #img >
                    <slot></slot>
                  </template>
                  <template #title >
                        <h1>
                          {{ title }}
                      </h1>
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