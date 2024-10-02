<template>
    <v-app>
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
const { current } = useLocale()
current.value = i18n.locale.value;
watch(currentLang, (lang) => {
    current.value = lang
});



useHead({
    htmlAttrs: {
      lang: currentLang.value,
      dir: currentDir.value,
    },
});
if(currentDir.value === 'rtl'){
    console.log("loading rtl scss");
    import("@/assets/sass/main.rtl.scss");
}else{
    console.log("loading ltr scss");
    import("@/assets/sass/main.ltr.scss");
}
</script>
