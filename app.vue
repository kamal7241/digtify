<template>
    <v-app>
      <TestSendAction/>
    <NuxtPage />
    </v-app>
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
const { current} = locale;
current.value = i18n.locale.value;
watch(currentLang, (lang) => {
    current.value = lang
});


useHead({
    htmlAttrs: () => {
        return {
        lang: currentLang.value,
        dir: currentDir.value,
      }
    } 
});
    
</script>
<style lang="scss" >
/**
* @todo remove unneeded dir attribute on ltr styles that affected Error/404 page
*/
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  } ]
} */
  @import "bootstrap";
/*rtl:end:options*/


/*rtl:begin:ignore*/	
@import "@/assets/sass/main.scss";
/*rtl:end:ignore*/	

</style>