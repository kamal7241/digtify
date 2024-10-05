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
const rtlCdnLink  = computed(() => {
    return currentDir.value === 'rtl' ? '' : '';

});

useHead({
    htmlAttrs: {
      lang: currentLang.value,
      dir: currentDir.value,
    },
    link: [
        {
            rel: 'stylesheet',
            href: rtlCdnLink.value,
        },
    ],
});

const loadDirStyles = (dir:"ltr" | "rtl") => {
    if(dir === 'ltr'){
            console.log("loading ltr scss");
            import("@/assets/sass/main.ltr.scss");
            document.documentElement.classList.add("ltr")
            document.documentElement.classList.remove("rtl")
        }else{
            console.log("loading rtl scss");
            import("@/assets/sass/main.rtl.scss");
            document.documentElement.classList.add("rtl")
            document.documentElement.classList.remove("ltr")
        }
}
loadDirStyles(currentDir.value)
watch(currentDir, (dir) => {
    loadDirStyles(dir)
})
    
</script>
