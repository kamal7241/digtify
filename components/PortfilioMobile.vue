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
                                <img  alt="portfolio-img1" :src="imgs[0]"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[1].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img2" :src="imgs[1]"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[2].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img3" :src="imgs[2]"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[3].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img4" :src="imgs[3]"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[4].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img5" :src="imgs[4]"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[5].title" class=" col-xl-10 col-12 col-md-6"  >
                            <div  data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img6" :src="imgs[5]"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem   :title="portfolioList[6].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-left"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img7" :src="imgs[6]"  />

                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[7].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img8" :src="imgs[7]"  />
                            </div>
                        </PortfolioItem>
                        <PortfolioItem  :title="portfolioList[8].title" class=" col-xl-10 col-12 col-md-6"   >
                            <div data-aos="fade-up-right"     data-aos-anchor-placement="top-center">
                                <img  alt="portfolio-img9" :src="imgs[8]"  />
                            </div>
                        </PortfolioItem>
            </div>
        </div>
              
        </CoreHomeSectionContainer>


</template>

<script>
import portfolioJson from "./portfolio.json"
import imgs from "./portfolioImages"
export default defineNuxtComponent({
    computed:{
        imgs(){
            return imgs;
        },
        portfolioList(){
            return portfolioJson;
        },
    },

})

</script>
