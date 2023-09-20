<template>

        <loader  :show="isLoader" />
        <core-screen-switcher v-show="!isLoader" :screens="[SCREENS.desktop]" >
                <core-mouse-indicator />
                <!-- control btns -->

                <!-- social items -->
                <div   class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                        <div class="container-fluid text-end" >
                                <div class="pe-0 pb-3 d-inline-flex flex-column gap-3" >
                                        <social-links :drop-direction="1" /> 
                                <div class="control-navs__btns d-flex flex-column align-items-center gap-3"  >
                                        <button @click="onSlidePrev" 
                                                        :disabled="index == 0 && activeSlideIndex == 0"
                                                        class="pointer-events-auto show fade shadow-primary animate__animated  btn btn-outline-light p-2 border-2 rounded-circle square-size  z-1"  >
                                                                <span class="icon-up-chevron-svgrepo-com h5" ></span>
                                        </button>
                                        <button 
                                        :disabled="index == 5  && activeSlideIndex ==  slidersNumbers[slidersNumbers.length -1 ] - 1"
                                        @click="onSlideNext" class="pointer-events-auto show  fade shadow-primary animate__animated  btn btn-outline-light p-2 border-2 rounded-circle square-size  z-1" >
                                                <span class="icon-down-chevron-svgrepo-com h5 " ></span>
                                        </button>
                                </div>
                                </div>
                        </div>
                </div>
                <!-- slides -->
                <core-scroll-snap-container   :disable="false" full-screen >
                        <core-scroll-snap-item ref="snapItems" v-for="key in 6" :key="'scroll-snap'+ key"  >
                                                <core-scroll-slider 
                                                :press-next="index == 0 ? isPressNext : false " @update:press-next="isPressNext = false" 
                                                :press-prev="index == 0 ? isPressPrev : false " @update:press-prev="isPressPrev = false" 
                                                name="banner" @slide-change="updateActiveSlide($event , 0)" :reset="slidersReset[0] && index == 0"  :model-value="index == index" @update:model-value="index = 0"  v-if="key == 1" class="h-100"  @leave:next="index++"    :slidesNumber="slidersNumbers[0]" >
                                                        <template v-slot="{slide}" >
                                                                <Banner @reset=" slidersReset[0] ? slidersReset[0]  = false : ''" :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                <!--  -->
                                                <core-scroll-slider 
                                                :press-next="index == 1 ? isPressNext : false" @update:press-next="isPressNext = false" 
                                                :press-prev="index == 1 ? isPressPrev : false" @update:press-prev="isPressPrev = false" 

                                                @slide-change="updateActiveSlide($event , 1)" name="about us" :reset="slidersReset[1]" @reset="slidersReset[1] = false" :model-value="index == 1" @update:model-value="index = 1" v-else-if="key == 2" class="h-100"  :first-reach="index == 1 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="slidersNumbers[1]" >
                                                        <template v-slot="{slide}" >
                                                                <AboutUs  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider  
                                                :press-next="index == 2 ? isPressNext : false" @update:press-next="isPressNext = false" 
                                                :press-prev="index == 2 ? isPressPrev : false" @update:press-prev="isPressPrev = false" 

                                                @slide-change="updateActiveSlide($event , 2)" :reset="slidersReset[2]" @reset="slidersReset[2] = false" :model-value="index == 2" @update:model-value="index = 2" v-else-if="key == 3" class="h-100" :first-reach="index == 2 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="slidersNumbers[2]" >
                                                        <template v-slot="{slide}" >
                                                                <services  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider  
                                                :press-next="index == 3 ? isPressNext : false" @update:press-next="isPressNext = false" 
                                                :press-prev="index == 3 ? isPressPrev : false" @update:press-prev="isPressPrev = false" 

                                                @slide-change="updateActiveSlide($event , 3)" :reset="slidersReset[3]" @reset="slidersReset[3] = false" :model-value="index == 3" @update:model-value="index = 3" v-else-if="key == 4" class="h-100" :first-reach="index == 3 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="slidersNumbers[3]" >
                                                        <template v-slot="{slide}" >
                                                                <portfolio  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider 
                                                :press-next="index == 4 ? isPressNext : false" @update:press-next="isPressNext = false" 
                                                :press-prev="index == 4 ? isPressPrev : false" @update:press-prev="isPressPrev = false" 

                                                @slide-change="updateActiveSlide($event , 4)" name="clients" :reset="slidersReset[4]" @reset="slidersReset[4] = false" :model-value="index == 4" @update:model-value="index = 4" v-else-if="key == 5" class="h-100" :first-reach="index == 4 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="slidersNumbers[4]" >
                                                        <template v-slot="{slide}" >
                                                                <clients  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider 
                                                :press-next="index == 5 ? isPressNext : false" @update:press-next="isPressNext = false" 
                                                :press-prev="index == 5 ? isPressPrev : false" @update:press-prev="isPressPrev = false" 
                                                :reset="slidersReset[5]" @reset="slidersReset[5] = false"
                                                @slide-change="updateActiveSlide($event , 5)" name="contact us"  :model-value="index == 5" @update:model-value="index = 5" v-else-if="key == 6" class="h-100" :first-reach="index == 5 ? true : false "  @leave:prev="index--"  :slidesNumber="slidersNumbers[5]" >
                                                        <template v-slot="{slide}" >
                                                                <contact-us  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                        </core-scroll-snap-item>
                
                </core-scroll-snap-container>
        </core-screen-switcher>
        <core-screen-switcher  :screens="[SCREENS.tablet ]" >
                <div class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                        <div class="container-fluid text-end" >
                                <div class="pe-0 pb-3 d-inline-flex flex-column gap-3" >
                                        <social-links :drop-direction="1" />
                                </div>
                        </div>
                </div>
                <tablet-container />
        </core-screen-switcher>  
        <core-screen-switcher   :screens="[ SCREENS.mobile]" >
                <div class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                        <div class="container-fluid text-end" >
                                <div class="pe-0 pb-3 d-inline-flex flex-column gap-3" >
                                        <social-links :drop-direction="1" />
                                </div>
                        </div>
                </div>
                <mobile-container />
        </core-screen-switcher>     
    </template>
    <script >
    import { mapState , mapStores } from 'pinia'
    import { useMainStore } from '~/store'
    import _ from "lodash";
    const SCREENS = Object.freeze({
        desktop : 0 , 
        tablet : 1 , 
        mobile : 2 ,
    })
    export default defineNuxtComponent({
        head: {
                title: 'Digify',
                meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        {
                                hid: 'Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services.',
                                name: 'Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services.',
                                content: 'Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services.'
                        } , 
                        {
                                property : 'og:title' ,
                                content : 'DIGIFY' ,
                        } ,
                        {
                                property : 'og:description' ,
                                content : 'Digify is a full-featured digital media consultancy house founded in 2014 that provides all aspects of digital marketing & advertising services.' ,
                        },
                        // {
                        //         property : 'og:image' ,
                        //         content : 'https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png' ,
                        // }
                ],
                link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }] ,
                script: [
                        {
                                src: "https://smtpjs.com/v3/smtp.js",
                                body: true,
                        },
                ],
        },
        data(){
                return {
                        show:true,
                        index : 0 , 
                        slidersReset : [undefined , undefined , undefined , undefined , undefined , undefined , ] , 
                        isPressNext:false , 
                        isPressPrev:false , 
                        slidersNumbers:[
                                2 , 2 , 7 , 4 , 2 , 4 
                        ] , 
                        activeSlideIndex : 0 , 
                        keyboardDebouncedHandler : undefined , 
                        prevArrowDebouncedHandler : undefined , 
                        nextArrowDebouncedHandler : undefined , 
                        
                }
        } ,
        computed:{
                // ...mapGetters("loader" , ["isLoader"]),
                SCREENS(){
                        return SCREENS
                },
                ...mapState(useMainStore, ['isLoader']) ,
                ...mapStores(useMainStore),
        },
        watch:{
                index(curr , prev){
                                //this.slidersReset[this.index - 1] = true
                                this.slidersReset =  this.slidersReset.map((isReset , index) => {
                                        return index != this.index ? true : this.slidersReset[this.index];
                                }) 
                                
                                this.activeSlideIndex = 0
                              // this.slidersReset[this.index + 1] = true
                        if(curr !=  prev)
                                this.$refs.snapItems[this.index].$el.scrollIntoView({block: "start", behavior: "smooth"});
                                
                }
        } ,
        methods:{
                onSlidePrev(){
                        if(!this.debouncedHandler)
                                this.prevArrowDebouncedHandler = _.debounce(()=> this.slidePrev() , 500 );
                        this.prevArrowDebouncedHandler()
              
                },
                onSlideNext(){
                        if(!this.debouncedHandler)
                                this.nextArrowDebouncedHandler = _.debounce(()=> this.slideNext() , 500 );

                                this.nextArrowDebouncedHandler()
              
                },
                slidePrev(){
                        this.isPressPrev = true
                },
                slideNext(){
                        this.isPressNext = true
                },
                onKeyDown(e){
                        const [KeyDown , KeyUp  ] = Object.freeze(["ArrowDown" , "ArrowUp"])
                                if(e.key == KeyDown )
                                        this.isPressNext = true
                                else if(e.key == KeyUp)
                                        this.isPressPrev = true
                },
                registerArrowsScroll(){
                        onkeydown = (e)=>{
                                const eventKeys = Object.freeze(["ArrowDown" , "ArrowUp"])
                                if( eventKeys.some(key => e.key == key ))
                                        e.preventDefault()
                                if(!this.debouncedHandler)
                                        this.keyboardDebouncedHandler = _.debounce((e)=> this.onKeyDown(e) , 500 );
                                this.keyboardDebouncedHandler(e);
                        }
                },
                updateActiveSlide(index , sliderindex){
                        if(this.index == sliderindex )
                         this.activeSlideIndex = index;
                },
                onReach(_index){
                        this.$nextTick(()=>{
                                this.index = _index
                        })
                },
                next(){
                        this.$nextTick(()=>{
                                this.index++
                        })
                },
                prev(){
                        this.$nextTick(()=>{
                                this.index--
                        })
                },
                async loadUntilFontsReady() {
                        this.showLoader()
                        await document.fonts.ready;
                        this.hideLoader()
                },
                showLoader(){
                this.mainStore.showLoader()
                },
                hideLoader(){
                this.mainStore.hideLoader()
                },
    
        } ,
        mounted() {
                this.registerArrowsScroll()
                import("bootstrap").then(({Tooltip}) =>{
                        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                        return new Tooltip(tooltipTriggerEl)
                        })
                        this.loadUntilFontsReady()
                })
        },
    })
    </script>
    <style lang="scss"  >
    @use "@/assets/sass/main.ltr.scss";
    
    </style>