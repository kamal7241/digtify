<template>
      <CoreHomeSection  class="home-sec--clients" >
            <transition mode="out-in" name="fade-delay-1" >
                <div class="animate__animated" 
                >
                    
                        <div class="home-sec--clients__title-wrapper pt-4 pb-4" >
                          <span class="text-secondary home-sec__title" >OUR</span>
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