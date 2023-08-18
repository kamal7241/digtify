<template>
        <core-scroll-stopper @up="onWheelUp" @down="onWheelDown" :disable-scroll="disableScroll" >
            <slot :slide="slide" ></slot>
        </core-scroll-stopper>
</template>

<script>
export default defineNuxtComponent({
    props:['slidesNumber' ],
    emits:['next' , 'prev' , 'end' , 'start' , 'leave:next' , 'leave:prev'] ,
    data(){
        return {
            slide : 0 , 
            disableScroll: true
        }
    },
    computed:{
        isEnd(){
            return this.slide + 1 == this.slidesNumber
        },
        isStart(){
            return  this.slide == 0
        },
    },
    methods:{
        onWheelUp(e){
            if(this.isStart){
                this.$emit("leave:prev")
            }
            else {
                this.prev();
            }
        },
        onWheelDown(e){
            if(this.isEnd){
                this.$emit("leave:next")
            }
            else {
                this.next();
            }
        },
        next(){
            if(this.isEnd)
                return;
            this.slide++;
            this.$emit("next")
            if(this.slide + 1 == this.slidesNumber ){
                this.$emit("end")
            }
        },
        prev(){
            if(this.isStart)
                return;
            this.slide--;
            this.$emit("prev");
            if(this.slide == 0 ){
                this.$emit("start")
            }
        },
    },
    mounted(){

    }

})
</script>