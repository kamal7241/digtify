<template>
    <NuxtLayout   >
      <div class="bg-primary h-100vh">
        <CoreNotFound />
      </div>
    </NuxtLayout>
  </template>
<script setup lang="ts" >
  defineProps<{
    error:any
  }>();
    useHead({
        htmlAttrs: () => {
          /**
           * @todo bind with current lang
           */
            return {
            lang: "en",
            dir: "ltr",
          }
        } 
    });
</script>
