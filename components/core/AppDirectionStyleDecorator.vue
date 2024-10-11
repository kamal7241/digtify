<script setup lang="ts" >
defineProps<{
  dir:"rtl" | "ltr"
}>();
</script>
<template>
  <Loader 
  :show="!dir"
  />
  <CoreAppRTL v-if="dir === 'rtl'" />
  <CoreAppLTR v-if="dir === 'ltr'" />
</template>