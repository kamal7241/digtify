<template>
    <v-btn
      :disabled="loading"
      :loading="loading"
      :class="{ 'active-hover': activeHover }"
      class="base-btn base-btn--submit rounded-pill position-relative mt-5"
      color="rgb(81 81 81)"
      type="submit"
      @click="handleClick"
    >
      <span class="base-btn__title text-light text-capitalize text-center">
        {{ $t("sendMsg") }}
      </span>
      <span class="base-btn__arrow btn btn-secondary">
        <img src="../assets/image/arrow-right.png" alt="" />
      </span>
    </v-btn>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  activeHover: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit"]);

function handleClick() {
  emit("submit");
}
</script>
