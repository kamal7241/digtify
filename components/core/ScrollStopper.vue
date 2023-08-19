<template>
    <div ref="scrollStopper" @wheel="optimizer"  >
           <slot></slot>
    </div>
</template>

<script>
import {debounce} from "lodash"
export default defineNuxtComponent({
    props:['disable-scroll'],
    emits:['up' , 'down'],
    data(){
       return {
        scrollStopper : undefined ,
        debounced : undefined ,
       }
    },
    methods:{
        optimizer (e){
            if(!this.debounced)
                this.debounced = debounce((e)=> this.handleWheel(e) , 500 );
            return this.debounced(e)
        },
        handleWheel(e){
            if(e.deltaY > 0){
                this.$emit("down" , e)
            }
            else {
                this.$emit("up" , e)
            }
        } , 
        updateScrollState(){
            if(this.disableScroll)
                this.scrollStopper.disable()
            else 
            this.scrollStopper.enable()
        }
    },
    mounted(){
        this.scrollStopper =   scrollStopper(this.$refs.scrollStopper)
        this.scrollStopper.init()
       this.updateScrollState()
        
    },
    watch:{
        disableScroll(){
            this.updateScrollState()
        }
    }
})
</script>