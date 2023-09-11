<template >
    <Transition>
        <div class="mouse-indicator " @wheel="eject" v-show="show" >
            <div class="d-flex justify-content-center align-items-center gap-5" >
                <div class="mouse">
                    <span class="mouse-wheel"></span>
                </div>
                <img style="width:10rem" src="@/assets/image/keyboard-arrows.png" />
            </div>
            <h1 class="postion-relative text-white mt-3" > Scroll or use Arrows to Explore Digify</h1>
        </div> 

    </Transition>
</template>

<script>
export default defineNuxtComponent({
    data() {
        return {
            show: false , 
        }
    },
    methods:{
        checkIsFirstLoad(){
            const preferences = JSON.parse(localStorage.getItem("preferences"));
            this.show = !preferences;
        } ,
        eject(){
            if(this.show){
                this.show = false
                localStorage.setItem("preferences" , true)
            }
        },
        registerArrowsEvent(){

        }


    },
    mounted(){
        this.checkIsFirstLoad()
        if(this.show)
            this.registerArrowsEvent()
    }
})

</script>