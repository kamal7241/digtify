<template>
    <span class="text-highlighter-wrapper position-relative d-inline-block" >
        <!-- <slot v-for="_ in 2" :key="_" ></slot> -->
        <span class="text-highlighter__faded" style="opacity: 0.4;" :key="1 + 'fade'">
            <slot></slot>
        </span>
        <span class="text-highlighter__highlighted position-absolute overflow-hidden start-0 top-0 " :style="{'--width':50}" :key="2 + 'highlight'" >
            <slot ref="highlighter" ></slot>
        </span>
    </span>
    
</template>

<script>
export default defineNuxtComponent({
    props : ['text'] ,

})
</script>

--width: 50;
display: inline-block;
max-width: fit-content;
width: calc(1% * var(--width ));
white-space: nowrap;
transition: width 1s ease;