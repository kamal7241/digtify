<template >
    <Transition>
        <div class="mouse-indicator " @wheel="eject" v-show="show" >
            <div class="mouse">
                <span class="mouse-wheel"></span>
            </div>
            <h1 class="postion-relative text-white mt-3" > Scroll to Explore Digify</h1>
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
        }


    },
    mounted(){
        this.checkIsFirstLoad()
    }
})

</script>