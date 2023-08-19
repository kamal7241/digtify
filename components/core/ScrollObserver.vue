<template>
    <div  ref="observer">
        <slot></slot>
    </div>
</template>

<script>
const TARGET_STATE = Object.freeze({
    leaveBottom : "leaveBottom" , 
    reach : 'reach' ,
    leaveTop: 'leaveTop' , 
})
const EVENTS = Object.freeze({
    [TARGET_STATE.leaveBottom] :'leave:bottom' ,
    [TARGET_STATE.reach] : 'reach',
    [TARGET_STATE.leaveTop] : 'leave:top'
})
const reachActions = {
    next : TARGET_STATE.leaveTop , 
    prev : TARGET_STATE.leaveBottom ,
    isNext : (intersectingTop , boundingTop ) => intersectingTop > boundingTop
}
const leaveBottomActions = {
    next : TARGET_STATE.reach , 
    prev : TARGET_STATE.leaveBottom ,
    isNext : () => true

}
const leaveTopActions = {
    next : TARGET_STATE.leaveTop , 
    prev : TARGET_STATE.reach ,
    isNext : () => false
}
const TARGET_STATE_ACTIONS = Object.freeze({
    [TARGET_STATE.leaveBottom] : leaveBottomActions , 
    [TARGET_STATE.leaveTop] : leaveTopActions , 
    [TARGET_STATE.reach] : reachActions , 
})
// from leave bottom can go to reach 
// from leave top can go to reach
// from reach can go to leave top or bottom
export default defineNuxtComponent({
    props:['thresHoldRatio' , 'observe'] , 
    emits:[EVENTS.reach , EVENTS.leaveBottom , EVENTS.leaveTop] ,
    data(){
        return {
            observer:undefined ,
            observerSetteled : false ,
            ratio: 0 , 
            isIntersecting : false , 
            state : TARGET_STATE.leaveBottom , 
        }
    },
    methods:{
        initObserver(){
            const root = document.querySelector('#root');
            // const rootSize = document.querySelector('#rootSize');
            // const targetSize = document.querySelector('#targetSize');
            // const output = document.querySelector('#output pre');
            const io_options = {
                root: root,
                rootMargin: '0px',
                threshold: [ this.thresHoldRatio ]
            };
            const io_callback = (entries)=> {
                const ratio = entries[0].intersectionRatio;
                const boundingRect = entries[0].boundingClientRect;
                const intersectionRect = entries[0].intersectionRect;
                // console.log(ratio )
                // console.log(intersectionRect , boundingRect )
                this.ratio = ratio
                if(!ratio )
                    return;
                if( TARGET_STATE_ACTIONS[this.state].isNext(intersectionRect.top , boundingRect.top) ){
                    console.log("is next to " , this.state , TARGET_STATE_ACTIONS[this.state])
                    this.state = TARGET_STATE_ACTIONS[this.state].next
                }
                else{
                    console.log("is prev to " , this.state , TARGET_STATE_ACTIONS[this.state] )
                    this.state = TARGET_STATE_ACTIONS[this.state].prev
                } 
                this.$emit(EVENTS[this.state] , this.state)
                    // if (ratio === 0) {
                    //     console.log('not reached') 
                    // } else if (ratio < 1) {
                    //     if (boundingRect.top < intersectionRect.top) {
                    //     console.log('on the top ', 'reached')                        
                    // } else {
                    //     console.log('on the bottom' , 'reached')  
                    //     }
                    // } else {
                    //     console.log('inside')               
                    //  }
                // if(!this.observerSetteled ){
                //     this.observerSetteled = true;
                //     if( !entries[0].isIntersecting)
                //         return
                // }
                // this.updateState()
                // if(intersectionRect.bottom == innerHeight )
                //       this.$emit("reach" , this.ratio)

                // if(this.triggerFromTop){
                //     if(intersectionRect.bottom == innerHeight )
                //       this.getProgress(ratio , intersectionRect.bottom ,  )

                // }else {
                //     if(intersectionRect.bottom < innerHeight )
                //       this.getProgress(ratio , intersectionRect.bottom ,  )
  
                // }
             
            }
            this.observer = new IntersectionObserver(io_callback, io_options);
        },
        startObservet(){
            this.observer.observe(this.$refs.observer);
        },
        stopObserver(){
            this.observer.unobserve()
        },
        getProgress( ratio , yDist  ){
        let progress;
        if(this.triggerFromTop)
            progress =  (ratio - this.startThresHold + Number.EPSILON) /  this.gapRatio
        else {
            const test =  (ratio - this.startThresHold + Number.EPSILON) 
            progress = Math.abs(test  - (this.gapRatio * this.thresHoldNumber) ) / this.gapRatio
            // console.log(progress)
        }

        // if(yDist < this.distFromTop)
        //     forward
        // else 
        //     backward
        console.log("prog: " , progress , "prev:" ,  this.currentProgress )
        if(progress > this.currentProgress){
            // console.log("forward")
            this.next()
        }
        else {
            // console.log('backward')
            this.prev()
        }
     },

    } ,
    mounted(){
        this.initObserver()
        if(this.observe)
            this.startObservet()
    },
    watch:{
        observe(){
            if(this.observe)
                this.startObservet()
            else 
                this.stopObserver()
        }
    }

})
</script>