<template>
  <section class="img-text-sec" >
      <div  class="row justify-content-center" >
        <div class="col-lg-5">
          <div class="img-text-sec__img animate__animated animate__delay-1s animate__fast">
            <slot name="img" ></slot>
          </div>
        </div>
        <div class="col-lg-7 col-xl-6">
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