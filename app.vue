<template>
   <CoreAppDirectionStyleDecorator  :dir="currentDir" :lang="currentLang" />
</template>

<script  setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLocale } from 'vuetify'
import {watch} from "vue";
const i18n = useI18n();
const currentDir = computed(() => {
    return i18n.locale.value === 'ar' ? 'rtl' : 'ltr';;
})
const currentLang = computed(() => {
    return i18n.locale.value;
})
const locale = useLocale()
console.log(locale);
const { current} = locale;
current.value = i18n.locale.value;
console.log("locale:" , current.value);
watch(currentDir, (lang) => {
    current.value = lang
    console.log("locale:" , current.value);
});


useHead({
    htmlAttrs: {
      lang: currentLang.value,
      dir: currentDir.value,
    },

});
    
</script>
<style lang="scss">
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap": [{
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  }]
} */
// .ltr{
//   @import "bootstrap";
// }

// .rtl{
//   @import "bootstrap";
// }
</style>
