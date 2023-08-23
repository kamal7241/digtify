<template>
        <core-scroll-stopper @up="onWheelUp" @down="onWheelDown" :disable-scroll="disableScroll" >
            <slot :slide="slide" ></slot>
        </core-scroll-stopper>
</template>

<script>
export default defineNuxtComponent({
    props:['slidesNumber' , 'firstReach', "modelValue" ],
    emits:['next' , 'prev' , 'end' , 'start' , 'leave:next' , 'leave:prev' , "update:modelValue"] ,
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
        onWheelDown(e){
            this.checkIsSliderActive()
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
        if(this.reach && this.slide == 0)
                this.slide = 1;
    } ,
    watch:{
        slide(curr , prev){
            if(curr == 0 && prev == 1)
                this.$emit("leave:prev")
        },
        firstReach(){
            if(this.firstReach  && this.slide == 0)
                this.slide = 1;
        }
    }

})
</script>