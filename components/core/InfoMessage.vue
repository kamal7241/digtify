<template>
    <div class="info-message" >
        <div class="info-message__icon" >
          <slot name="icon" ></slot>
        </div>
        <div class="info-message__title" >
            <slot name="title"></slot>
        </div>
        <div class="info-message__body" >
         <slot  ></slot>
        </div>
        <div class="info-message__btn" >
            <slot name="btn" ></slot>
        </div>
    </div>
</template>
