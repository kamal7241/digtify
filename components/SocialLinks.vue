<template>
<div class="social-links" >
    <div class="dropdown  ">
        <div id="menu">
  <div @click="dropIt" class="btn-dropdown"><span class="icon-info" ></span> 
  </div>
  <div class="arrow" v-show="!isDropped">
        <span></span>
        <span></span>
        <span></span>
    </div>
    



  <transition name="slide">
    <ul class=" list" v-if="isDropped">
      <li class="drop-item "><a target="_blank" href="https://www.linkedin.com/company/digifymena"> 
        <span class="icon-linkedin-outline" >
        </span>
    
      </a></li>
      <li class="drop-item "><a target="_blank"  href="https://www.facebook.com/DigifyMena"> 
        <span class="icon-facebook-outline" >
        </span>

      </a></li>
      <li class="drop-item "><a target="_blank" href="https://www.behance.net/digify-mena">
        <span class="icon-behance-outline" >
        </span>

      </a></li>
      <li class="drop-item "><a target="_blank" href="https://www.instagram.com/digifymena"> 
        <span class="icon-instgram-outline" >
        </span>
  
      </a></li>
    </ul>
  </transition>
  </div>
  </div>
</div>

</template>

<script>
export default {
    el: '#menu',
  data: () => ({
    isDropped: false
  }),
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped
    }
  }

}
</script>



