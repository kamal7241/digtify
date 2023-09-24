<template >
    <Transition>
        <div class="mouse-indicator " @wheel="eject" v-show="show" >
            <div class="d-flex justify-content-center align-items-center gap-5" >
                <div class="mouse">
                    <span class="mouse-wheel"></span>
                </div>
            </div>
            <p class="postion-relative text-white mt-3 h1 " > Scroll to Explore Digify</p>
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