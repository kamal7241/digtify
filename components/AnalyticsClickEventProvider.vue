<template>
  <div @click="handleClick">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    eventName: {
      type: String,
      default: "Event_click",
    },
    eventCategory: {
      type: String,
      default: "Button Actions",
    },
    eventLabel: {
      type: String,
      default: "Track Button Click",
    },
  },
  methods: {
    handleClick() {
      trackEventsClick(this.eventName, this.eventCategory, this.eventLabel);
    },
  },
};
</script>
