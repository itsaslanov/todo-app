<script>
const COLORS = ["default", "primary", "danger"];
</script>

<script setup>
import { computed } from "@vue/runtime-core";

const { color } = defineProps({
  color: {
    type: String,
    default: () => "default",
    validation: (value) => COLORS.includes(value),
  },
});

const classes = computed(() => {
  return {
    [`is-${color}`]: true,
  };
});
</script>

<template>
  <button class="app-button transition-colors duration-150" :class="classes">
    <slot></slot>
  </button>
</template>

<style lang="postcss">
.app-button.is-default {
  @apply bg-light-gray-20 hover:bg-light-gray-30 text-white;
}

.app-button.is-primary {
  @apply bg-purple text-white;
}

.app-button.is-danger {
  @apply bg-light-red hover:bg-light-red-30 text-white;
}
</style>
