<template>
    <slot v-if="targetDesktop && !isMobile && !isTablet" ></slot>
    <slot v-else-if="targetTablet  && isTablet" ></slot>
    <slot v-else-if="targetMobile && isMobile " ></slot>
</template>


<script>
const SCREENS = Object.freeze({
    desktop : 0 , 
    tablet : 1 , 
    mobile : 2 ,
})
export default defineNuxtComponent({
    props:['screens'] ,
    computed:{
        targetDesktop(){
            return this.screens.some(sc => sc == SCREENS.desktop)
        },
        targetMobile(){
            return this.screens.some(sc => sc == SCREENS.mobile)
        },
        targetTablet(){
            return this.screens.some(sc => sc == SCREENS.tablet)
        },
    },
    setup(){
        return  useResponsive()
    } ,
})

</script>