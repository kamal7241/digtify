<template>
    <section class="contact-us-info ">
    <div class="row gy-5">
      <div class="col-md-7">
        <div class="contact-us-info__img" >
                <slot  name="img" ></slot>
        </div>
      </div>
      <div class="col-md-5">
        <div class="email-details">
            <slot name="title" ></slot>
        </div>
      </div>
    </div>
</section>
</template>