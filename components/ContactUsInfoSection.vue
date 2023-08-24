<template>
    <section class="contact-us-info ">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10" >
          <div class="row gx-xxl-5 ">
              <div class="col-md-6 col-12">
                <div class="contact-us-info__img"  >
                <slot  name="img" ></slot>
        </div>
              </div>
              <div class="col-md-6 col-12 h-md-auto m-md-auto">
                <div class="contact-us-title">
            <slot name="title" ></slot>
        </div>
              </div>
          </div>
      </div>
    </div>
</section>
</template>