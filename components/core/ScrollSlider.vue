<template>
        <core-scroll-stopper @up="onWheelUp" @down="onWheelDown" :disable-scroll="disableScroll" >
            <slot :slide="slide" ></slot>
        </core-scroll-stopper>
</template>

<script>
export default defineNuxtComponent({
    props:['slidesNumber' , 'firstReach', "modelValue" , "reset"  , "name"],
    emits:['next' , 'prev' , 'end' , 'start' , 'leave:next' , 'leave:prev' , "update:modelValue" , 'reset']  ,
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
        checkIsSliderActive(){
            if(!this.modelValue)
                this.$emit("update:modelValue" , true)
        },
        onWheelUp(e){
            this.checkIsSliderActive()
            // if(this.isStart){
            //     this.$emit("leave:prev")
            // }
            this.prev();
        },
        resetSlider(){
            this.slide = 0;
        },
        onWheelDown(e){
            this.checkIsSliderActive()
            if(this.isEnd){
               // this.resetSlider()
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
        initFirstStep(){
            if(this.firstReach && this.slide == 0){
                setTimeout(()=>{
                this.slide = 1
               } , 1000)
            }
        }
    },
    mounted(){
        // if(this.reach && this.slide == 0)
        //     this.slide = 1;
    } ,
    watch:{
        slide(curr , prev){
            if(curr == 0 && prev == 1 && !this.reset ){
                this.$emit("leave:prev")
            }
        },
        firstReach(){
            if(this.firstReach  && (this.slide == 0 || this.reset )){
                this.slide = 1;
            }
            if(this.reset){
                this.$emit("reset")
            }
        } ,
        reset(){
            if(this.reset){
                this.slide = 0;
            }
        }
    }

})
</script>