<template>
           <div class="zoom-title" :style="{'--scale' : scale , '--origin': origin }" >
                <slot></slot>
        </div>  
</template>


<script>
export default defineNuxtComponent({
    props : ["scale" , 'origin'] , 

})

</script>