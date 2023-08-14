<template>
                <div class="portfolio-item" >
                    <div class="portfolio-item__img" >
                        <slot ></slot>
                    </div>
                    <h3 class="portfolio-item__title">{{title}}</h3>
                </div>

</template>

<script>
export default defineNuxtComponent({
    props:['title']
})
</script>