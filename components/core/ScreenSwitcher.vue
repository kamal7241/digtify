<template>
    <slot v-if="isLoaded && targetDesktop && !isMobile && !isTablet" ></slot>
    <slot v-else-if="isLoaded && targetTablet  && isTablet" ></slot>
    <slot v-else-if="isLoaded && targetMobile && isMobile " ></slot>
</template>


<script>
const SCREENS = Object.freeze({
    desktop : 0 , 
    tablet : 1 , 
    mobile : 2 ,
})
export default defineNuxtComponent({
    emits:["mobile"],
    props:['screens'] ,
    data(){
        return {
            isLoaded : false , 
        }
    },
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
    mounted(){
            if(this.isMobile)
                this.$emit("mobile")
            this.isLoaded = true;
    },
    watch:{
        isMobile(){
            if(this.isMobile)
                this.$emit("mobile")
        }
    }
})

</script>