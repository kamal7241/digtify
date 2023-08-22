<template>
        <core-screen-switcher :screens="[0]" >
                <core-scroll-snap-container :disable="false" full-screen >
                        <core-scroll-snap-item ref="snapItems" v-for="key in 6" :key="'scroll-snap'+ key"  >
                                <core-scroll-observer v-if="key == 1" @reach="index = 0"  :thresHoldRatio="0.1" :observe="true" class="h-100" >
                                                <core-scroll-slider @leave:next="index++"    :slidesNumber="2" >
                                                        <template v-slot="{slide}" >
                                                                <Banner  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                </core-scroll-observer>
                                <!--  -->
                                <core-scroll-observer v-else-if="key == 2"  @reach="index = 1"   :thresHoldRatio="0.1" :observe="true"  >
                                                <core-scroll-slider :first-reach="index == 1" @leave:next="index++" @leave:prev="index--"  :slidesNumber="3" >
                                                        <template v-slot="{slide}" >
                                                                <AboutUs  :current-progress="slide" />
                                                        </template>
                                                </core-scroll-slider>
                                </core-scroll-observer>
                                <core-scroll-observer  v-else-if="key == 3"  @reach="index = 2"   :thresHoldRatio="0.1" :observe="true"  >
                                                <core-scroll-slider :first-reach="index == 2" @leave:next="index++" @leave:prev="index--"  :slidesNumber="7" >
                                                        <template v-slot="{slide}" >
                                                                <services  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                 </core-scroll-observer>
                             <core-scroll-observer  v-else-if="key == 4"  @reach="index = 3"   :thresHoldRatio="0.1" :observe="true"  >
                                                <core-scroll-slider :first-reach="index == 3" @leave:next="index++" @leave:prev="index--"  :slidesNumber="5" >
                                                        <template v-slot="{slide}" >
                                                                <portfolio  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                </core-scroll-observer>
                               <core-scroll-observer  v-else-if="key == 5"  @reach="index = 4"   :thresHoldRatio="0.1" :observe="true"  >
                                                <core-scroll-slider :first-reach="index == 4" @leave:next="index++" @leave:prev="index--"  :slidesNumber="3" >
                                                        <template v-slot="{slide}" >
                                                                <clients  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                </core-scroll-observer>
                                <core-scroll-observer   v-else-if="key == 6"  @reach="index = 5"   :thresHoldRatio="0.1" :observe="true"  >
                                                <core-scroll-slider :first-reach="index == 5"  @leave:prev="index--"  :slidesNumber="5" >
                                                        <template v-slot="{slide}" >
                                                                <contact-us  :current-progress="slide"  />
                                                        </template>
                                                </core-scroll-slider>
                                </core-scroll-observer>
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
        data(){
                return {
                        index : undefined , 
                        currentIndexSlide : 0 , 
                }
        } ,
        watch:{
                index(curr , prev){
                        console.log("index change" , this.index)
                        if(curr !=  prev)
                                this.$refs.snapItems[this.index].$el.scrollIntoView({block: "start", behavior: "smooth"});
                                
                }
        } ,
        methods:{
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