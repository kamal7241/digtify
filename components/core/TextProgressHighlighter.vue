<template>
    <span class="text-highlighter-wrapper" >
        <!-- <slot v-for="_ in 2" :key="_" ></slot> -->
        <span class="text-highlighter__faded" :key="1 + 'fade'">
            <slot></slot>
        </span>
        <span class="text-highlighter__highlighted  " :style="{'--width':highlightRatio}" :key="2 + 'highlight'" >
            <slot ref="highlighter" ></slot>
        </span>
    </span>
    
</template>

<script>
export default defineNuxtComponent({
    props : ['highlight-ratio'] ,


})
</script>

