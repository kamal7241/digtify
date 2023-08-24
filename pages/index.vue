<template>
        <div class=" navigators-btns w-100  position-fixed bottom-0 end-0" >
                <div class="container-fluid text-end" >
                        <div class="pe-4 pb-3 d-inline-flex flex-column gap-3" >
                                <button @click="index=0" :disabled="index == 0" class="navigators-btns__up btn-primary btn  rounded-circle icon-up-chevron-svgrepo-com"  ></button>
                                <button @click="index=5" :disabled="index == 5" class="navigators-btns__down btn-primary btn  rounded-circle icon-down-chevron-svgrepo-com"  ></button>
                        </div>
                </div>
        </div>
        <core-screen-switcher :screens="[0]" >
                <core-scroll-snap-container :disable="false" full-screen >
                        <core-scroll-snap-item ref="snapItems" v-for="key in 6" :key="'scroll-snap'+ key"  >
                                                <core-scroll-slider  :model-value="index == index" @update:model-value="index = 0"  v-if="key == 1" class="h-100"  @leave:next="next"    :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <Banner  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                <!--  -->
                                                <core-scroll-slider   :model-value="index == 0" @update:model-value="index = 1" v-else-if="key == 2" class="h-100"  :first-reach="index == 1" @leave:next="next" @leave:prev="prev"  :slidesNumber="3" >
                                                        <template v-slot="{slide}" >
                                                                <AboutUs  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider   :model-value="index == 1" @update:model-value="index = 2" v-else-if="key == 3" class="h-100" :first-reach="index == 2" @leave:next="index++" @leave:prev="index--"  :slidesNumber="7" >
                                                        <template v-slot="{slide}" >
                                                                <services  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider   :model-value="index == 2" @update:model-value="index = 3" v-else-if="key == 4" class="h-100" :first-reach="index == 3" @leave:next="index++" @leave:prev="index--"  :slidesNumber="4" >
                                                        <template v-slot="{slide}" >
                                                                <portfolio  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider   :model-value="index == 3" @update:model-value="index = 4" v-else-if="key == 5" class="h-100" :first-reach="index == 4" @leave:next="index++" @leave:prev="index--"  :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <clients  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                                <core-scroll-slider :model-value="index == 4" @update:model-value="index = 5" v-else-if="key == 6" class="h-100" :first-reach="index == 5"  @leave:prev="index--"  :slidesNumber="4" >
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
        <core-screen-switcher @mobile="runCountDown" :screens="[1 , 2]" >
                <div class="container">
                                <div class="row">
                                <div class="col">
                                        <div class="comming-soon" >
                                        <img src="@/assets/image/digify-logo.png" alt="Logo" class="logo">
                                        <h1 class="title" >Coming Soon ...</h1>
                                        <p class="sub-title" >We are working hard to bring you an amazing website.</p>
                                        <div class="countdown" id="countdown"></div>
                                        </div>
                                </div>
                                </div>
                        </div>
                </core-screen-switcher>      
</template>
<script >

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
                        index : 0 , 
                        activeIndex : 0 , 
                }
        } ,
        watch:{
                index(curr , prev){
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
                runCountDown(){
                var countdownDate = new Date("2023-09-01T00:00:00Z").getTime();
                        var countdown = setInterval(function() {
                        var now = new Date().getTime();
                        var distance = countdownDate - now;

                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        document.getElementById("countdown").innerHTML = "<span class='time days' >" + days + "</span>d <span class='time hours' >" + hours + "</span>h <span class='time min'>" + minutes + "</span>m <span class='time sec'>" + seconds + "</span>s ";
                        if (distance < 0) {
                                clearInterval(countdown);
                                document.getElementById("countdown").innerHTML = "Website is live!";
                        }
                        }, 1000);
                }
        } ,
})
</script>
<style lang="scss"  >
@use "@/assets/sass/main.ltr.scss";

</style>