<template>
<div class="social-links" >
    <div class="dropdown  ">
        <div id="menu">
  <button @click="dropIt" class="btn-dropdown  rounded-pill">Pet </button>
  <transition name="slide">
    <ul class=" list" v-if="isDropped">
      <li class="drop-item rounded-pill"><a href=""><img src= '../assets/image/facebook.svg'    ></a></li>
      <li class="drop-item rounded-pill"><a href=""> <img src="../assets/image/linkedin.svg" ></a></li>
      <li class="drop-item rounded-pill"><a href=""> <img src="../assets/image/youtube.svg"> </a></li>
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



