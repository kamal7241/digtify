<template>
        <loader :show="isLoader" />
        <core-screen-switcher :screens="[SCREENS.desktop]" >
                <core-mouse-indicator />
                <div class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                        <div class="container-fluid text-end" >
                                <div class="pe-0 pb-3 d-inline-flex flex-column gap-3" >
                                        <social-links :drop-direction="1" />
                                        <button @click="index=0" v-show="index>0" :disabled="index == 0" class="navigators-btns__up btn-primary btn  rounded-circle icon-up-chevron-svgrepo-com"  ></button>
                                        <!-- <button @click="index=5" :disabled="index == 5" class="navigators-btns__down btn-primary btn  rounded-circle icon-down-chevron-svgrepo-com"  ></button> -->
                                </div>
                        </div>
                </div>
                <core-scroll-snap-container :disable="false" full-screen >
                        <core-scroll-snap-item ref="snapItems" v-for="key in 6" :key="'scroll-snap'+ key"  >
                                                <core-scroll-slider name="banner" :reset="slidersReset[0] && index == 0"  :model-value="index == index" @update:model-value="index = 0"  v-if="key == 1" class="h-100"  @leave:next="index++"    :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <Banner @reset=" slidersReset[0] ? slidersReset[0]  = false : ''" :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                <!--  -->
                                                <core-scroll-slider name="about us" :reset="slidersReset[1]" @reset="slidersReset[1] = false" :model-value="index == 1" @update:model-value="index = 1" v-else-if="key == 2" class="h-100"  :first-reach="index == 1 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <AboutUs  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider  :reset="slidersReset[2]" @reset="slidersReset[2] = false" :model-value="index == 2" @update:model-value="index = 2" v-else-if="key == 3" class="h-100" :first-reach="index == 2 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="7" >
                                                        <template v-slot="{slide}" >
                                                                <services  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider  :reset="slidersReset[3]" @reset="slidersReset[3] = false" :model-value="index == 3" @update:model-value="index = 3" v-else-if="key == 4" class="h-100" :first-reach="index == 3 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="4" >
                                                        <template v-slot="{slide}" >
                                                                <portfolio  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider name="clients" :reset="slidersReset[4]" @reset="slidersReset[4] = false" :model-value="index == 4" @update:model-value="index = 4" v-else-if="key == 5" class="h-100" :first-reach="index == 4 ? true : false " @leave:next="index++" @leave:prev="index--"  :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <clients  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider name="contact us"  :model-value="index == 5" @update:model-value="index = 5" v-else-if="key == 6" class="h-100" :first-reach="index == 5 ? true : false "  @leave:prev="index--"  :slidesNumber="4" >
                                                        <template v-slot="{slide}" >
                                                                <contact-us  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                        </core-scroll-snap-item>
                        <!-- <core-scroll-snap-item :key="'scroll-snap'+ 2"  >
                                <core-scroll-observer @reach="index = 1"   :thresHoldRatio="0.1" :observe="true"  > -->
                                        <!-- <core-scroll-stopper  class="h-100" > -->
                                                <!-- <core-scroll-slider @leave:next="index++" @prev="index--"  :slidesNumber="7" >
                                                        <template v-slot="{slide}" >
                                                                <AboutUs  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider> -->
                                                <!-- </core-scroll-stopper> -->
                                <!-- </core-scroll-observer>
                        </core-scroll-snap-item> -->
                       <!-- <core-scroll-snap-item :key="'scroll-snap'+ 3" >
                                <div class="bg-danger h-100" ></div>
                       </core-scroll-snap-item> -->
                       <!-- <core-scroll-snap-item :key="'scroll-snap'+ 4" > -->
                         <!-- <Banner  /> -->
                       <!-- </core-scroll-snap-item>
                       <core-scroll-snap-item :key="'scroll-snap'+ 5" > -->
                          <!-- <about-us  /> -->
                       <!-- </core-scroll-snap-item> -->
                       <!-- <core-scroll-snap-item :key="'scroll-snap'+ 6" >
                        <services  />
                       </core-scroll-snap-item> -->
                       <!-- <portfolio  />
                       <clients  />
                       <contact-us  /> -->
                </core-scroll-snap-container>
        </core-screen-switcher>
        <core-screen-switcher :screens="[SCREENS.tablet ]" >
                <div class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                        <div class="container-fluid text-end" >
                                <div class="pe-0 pb-3 d-inline-flex flex-column gap-3" >
                                        <social-links :drop-direction="1" />
                                </div>
                        </div>
                </div>
                <tablet-container />
        </core-screen-switcher>  
        <core-screen-switcher  :screens="[ SCREENS.mobile]" >
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
    import { mapState } from 'pinia'
    import { useMainStore } from '~/store'
    // import {mapGetters} from "vuex"
    // console.log(mapGetters)
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
                        }
                ],
                link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        },
        data(){
                return {
                        show:true,
                        index : 0 , 
                        slidersReset : [] , 
                        
                }
        } ,
        computed:{
                // ...mapGetters("loader" , ["isLoader"]),
                SCREENS(){
                        return SCREENS
                },
                ...mapState(useMainStore, ['isLoader'])
        },
        watch:{
                index(curr , prev){
                        if(this.index > 0 ){
                                this.slidersReset[this.index - 1] = true
                        }
                        if(curr !=  prev)
                                this.$refs.snapItems[this.index].$el.scrollIntoView({block: "start", behavior: "smooth"});
                                
                }
        } ,
        methods:{
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
    
        } ,
    })
    </script>
    <style lang="scss"  >
    @use "@/assets/sass/main.ltr.scss";
    
    </style>