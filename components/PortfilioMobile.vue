<template>
        <CoreHomeSectionContainer  class="home-sec--portfolio pt-4" >
            <div 
               >
            <div class="home-sec--portfolio__title-wrapper" >
                <div data-aos="fade-left">
                    <span class="home-sec__title text-secondary" >OUR</span>

                </div>
                    <div  data-aos="fade-right">
                        <core-text-progress-highlighter  class=" home-sec__title d-block"
                        >
                            <span class="text-white" >PORTFOLIO</span>
                    </core-text-progress-highlighter>
                    </div>
            </div>
        </div>
        <div class="home-sec__content" >
            <div class="row justify-content-center py-4" >
                        <PortfolioItem class=" col-xl-10 col-12 col-md-6 "   :title="portfolioList[0].title">
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/1.png"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[1].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/2.png"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[2].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/3.png"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[3].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/4.png"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[4].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/5.png"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[5].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div  data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/6.png"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[6].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/7.png"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[7].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  src="../assets/image/portfolio/8.png"  />
                            </div>
                        </PortfolioItem>
         
            </div>
        </div>
              
        </CoreHomeSectionContainer>


</template>

<script>
import portfolioJson from "./portfolio.json"
export default defineNuxtComponent({
    computed:{
        portfolioList(){
            return portfolioJson;
        },
    },

})

</script>
