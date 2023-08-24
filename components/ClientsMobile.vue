<template>
      <CoreHomeSection  class="home-sec--clients" >
            <transition mode="out-in" name="fade-delay-1" >
                <div class="animate__animated" 
                >
                    
                        <div class="home-sec--clients__title-wrapper pt-4" >
                                <core-zoomed-title 
                                origin="30px 100px" 
                                class="home-sec__title"  
           >
                                            <span class="text-secondary" >OUR</span>
                                </core-zoomed-title>
                <h2 class="text-white home-sec__title" >CLIENTS</h2>
                        </div>
                 </div>
                 
                </transition>
                    <div class="clients animate__animated " 
                    >
                    <clients-slider class="mb-5" />
                    <clients-slider :reverseDirection="true" />
                    </div>
        </CoreHomeSection>
</template>