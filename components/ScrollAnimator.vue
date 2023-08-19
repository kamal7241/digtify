<template>
    <div ref="animator">
        <div ref="observer" class="position-sticky top-0">
            <slot></slot>
        </div>
        <div  :style="{ height: (gap * breakPointsNumber +  startThresHold) + 'px' }"></div>
    </div>
</template>

<script>
// import { debounce } from "lodash"
export default defineNuxtComponent({
    emits:['next' , 'prev'] ,
    props: ['breakPointsNumber' ,  'gap'  ,'startThresHold' ,  ],
    data(){
        return {
            // stikyHeight: '50vh',
            isScrollReachedEl: false,
            y: this.startThresHold,
            currentBreakPoint: 0 , 
            thresHoldRatios:[0.1 , 0.8 , 1 ]
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
            addEventListener('scroll' , () => {
                // debounce(callback , 500 )
                const { y } = this.$refs.animator.getBoundingClientRect()
                // console.log(y)
                this.updatePosition(y)
            })
        },
        observer(){
        const root = document.querySelector('#root');
            // const rootSize = document.querySelector('#rootSize');
            const target = this.$refs.observer;
            // const targetSize = document.querySelector('#targetSize');
            // const output = document.querySelector('#output pre');
            const io_options = {
                root: root,
                rootMargin: '0px',
                threshold: [...this.thresHoldRatios]
            };
            let io_observer;

            const io_callback = (entries)=> {
                const ratio = entries[0].intersectionRatio;
                const boundingRect = entries[0].boundingClientRect;
                const intersectionRect = entries[0].intersectionRect;
                console.log(intersectionRect , boundingRect )
                console.log(ratio )
                if(!this.observerSetteled){
                    this.observerSetteled = true;
                    return
                }
                if(this.triggerFromTop){
                    if(intersectionRect.bottom == innerHeight )
                      this.getProgress(ratio , intersectionRect.bottom ,  )

                }else {
                    if(intersectionRect.bottom < innerHeight )
                      this.getProgress(ratio , intersectionRect.bottom ,  )
  
                }
             
            }
            io_observer = new IntersectionObserver(io_callback, io_options);
            io_observer.observe(target);
        }

    },
    mounted(){
        this.registerScrollAnimator()
        // this.observer()
    }

 })
</script>