<template>
  <div v-show="show" class="lds" >
    <img src="@/assets/image/lds.gif" />

  </div>
  </template>
  <script>
export default defineNuxtComponent({
  props:["show" ] , 

})

</script>
  
