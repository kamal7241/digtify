<template>
    <NuxtLayout   >
      <div class="bg-primary h-100vh">
        <CoreNotFound />
      </div>
    </NuxtLayout>
  </template>
<script>
export default {
  props:["error"]
}
</script>

  <style lang="scss"  >
  @use "@/assets/sass/main.ltr.scss";
  
  </style>