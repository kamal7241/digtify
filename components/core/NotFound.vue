<template>
    <core-info-message class="text-center">
          <p class="text-light" >
            We are sorry, the page you requested cannot be found
        </p>   

    <template v-slot:title>
        <p class="text-secondary" >
          PAGE NOT FOUND
        </p>
      </template>
     <template v-slot:icon>
        <div  class="text-secondary" >
         404
        </div>
      </template>
      <template v-slot:btn >
        <NuxtLink to="/" >
          <button class="btn btn-secondary fs-3 px-4 mt-2">HOME</button>

        </NuxtLink>
      </template>
    </core-info-message>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
