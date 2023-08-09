<template>
    <div ref="animator">
        <div class="position-sticky top-0">
            <slot></slot>
        </div>
        <div  :style="{ height: (gap * breakPointsNumber +  startThresHold) + 'px' }"></div>
    </div>
</template>

<script>
// import { debounce } from "lodash"
export default defineNuxtComponent({
    emits:['next' , 'prev'] ,
    props: ['breakPointsNumber' ,  'gap'  ,'startThresHold' ],
    data(){
        return {
            // stikyHeight: '50vh',
            isScrollReachedEl: false,
            y: this.startThresHold,
            currentBreakPoint: 0 , 
        }   
    },
    methods: {
        callBack() {
            console.log("new break point");
        },
        next() {
            this.y += this.gap
            this.currentBreakPoint++
            this.$emit("next" , this.currentBreakPoint)
        },
        prev() {
            this.y -= this.gap
            this.currentBreakPoint--
            this.$emit("prev" , this.currentBreakPoint)
        },
        updatePosition(y) {
            if (y > 0)
                return;
            else {
                const absY = Math.abs(y);
                // if(absY <   this.startThresHold  ){
                //     console.log("terminated")
                //     return;
                // }
                this.isScrollReachedEl = true;
                if (absY > this.y && (absY - this.y >= this.gap) && this.currentBreakPoint < this.breakPointsNumber ) {
                    this.next()
                }
                else if (absY < this.y && (this.y - absY >= this.gap) &&  this.currentBreakPoint > 0) {
                    this.prev()
                }
            }
        },
        registerScrollAnimator() {
            onscroll = () => {
                // debounce(callback , 500 )
                const { y } = this.$refs.animator.getBoundingClientRect()
                this.updatePosition(y)
            }
        },

    },
    mounted(){
    this.registerScrollAnimator()
    }

 })
</script>