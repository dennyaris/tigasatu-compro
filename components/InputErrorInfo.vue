<template>
  <small v-show="show" class="text-danger">{{ text }}</small>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: false,
    default: false
  },
  text: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
