<template>
    <section class="contact-us-info ">
    <div class="row gy-5">
      <div class="col-md-5 offset-1">
        <div class="contact-us-info__img" >
                <slot  name="img" ></slot>
        </div>
      </div>
      <div class="col-md-4 offset-1">
        <div class="contact-us-title">
            <slot name="title" ></slot>
        </div>
      </div>
    </div>
</section>
</template>