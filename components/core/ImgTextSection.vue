<template>
  <section class="img-text-sec" >
      <div  class="row justify-content-center" >
        <div class="col-xl-4 col-lg-5 col-md-6 col-12">
          <div class="img-text-sec__img animate__animated animate__delay-1s animate__fast">
            <slot name="img" ></slot>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7 col-md-6 col-12">
          <div class="img-text-sec__content">
            <div class="img-text-sec__content__title animate__animated animate__delay-1s animate__fast " >
              <slot name="title" ></slot>
            </div>
            <p class="img-text-sec__content__desc animate__animated animate__delay-1s animate__fast" >
              <slot name="desc" ></slot>
            </p>
          </div>
        </div>
      </div>
  </section>
</template>