<template>
<div ref="socialRef" class="social-links" :class="[
  dropDirection == DROP_DIRECTIONS.up ? 'social-links--dropup' :''  ,
  isDropped ? 'social-links--open' : ''
]">
    <div class="dropdown  ">
        <div id="menu">
  <div @click="dropIt" class="btn-dropdown">
    <img class="img-fluid" src="@/assets/image/digify-icon.svg"  />
  </div>
  <div class="arrow" v-show="!isDropped">
        <span></span>
        <span></span>
        <span></span>
    </div>
    



    <ul class=" list social-links__list" >
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
  </div>
  </div>
</div>

</template>

<script>
const DROP_DIRECTIONS = Object.freeze({
  down:0,
  up:1
})
export default {
    el: '#menu',
    props:['dropDirection'], // up , default down
  data: () => ({
    isDropped: false
  }),
  computed:{
    DROP_DIRECTIONS(){
      return DROP_DIRECTIONS
    },
  },
  methods: {
    onClickOut(){
      if(!this.isDropped)
        return
      this.isDropped = false;
    },
    dropIt() {
      this.isDropped = !this.isDropped
    }
  },
  mounted() {
    import("click-outside").then(({default : clickOutSide}) => {
      const unbind =  clickOutSide(this.$refs.socialRef , this.onClickOut)
    })
  },

}
</script>



