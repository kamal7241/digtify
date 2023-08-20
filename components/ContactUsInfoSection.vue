<template>
    <section class="contact-us-info ">
    <div class="row justify-content-center">
      <div class="col-10" >
          <div class="row gx-5">
              <div class="col-6">
                <div class="contact-us-info__img" >
                <slot  name="img" ></slot>
        </div>
              </div>
              <div class="col-6 h-auto m-auto">
                <div class="contact-us-title">
            <slot name="title" ></slot>
        </div>
              </div>
          </div>
      </div>
    </div>
</section>
</template>