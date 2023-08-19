<template>  
            <div 
            :class="[
                disable ? '' :  horizontal ?'scroll-snap-container scroll-snap-container--hz':'scroll-snap-container scroll-snap-container--vl'   , 
                ]"
            >
                <slot ></slot>
            </div>
</template>

<script>
export default defineNuxtComponent({
    props:['full-screen' , 'horizontal' , 'disable'],
    mounted(){
        if(this.fullScreen)
            document.documentElement().classList.add("overflow-hidden")
    },
    unmounted(){
        if(this.fullScreen)
            document.documentElement().classList.remove("overflow-hidden")
    }
})

</script>
