<script setup lang="ts">

const props = defineProps({
  maxLines: {
    type: Number,
    default: 3
  }
})

const expandText = () => {
  expanded.value = true
}

const className = `line-clamp-${props.maxLines}`

const expanded = ref(false)
</script>
<template>
  <div class="text-lg" :class="[{ [className]: !expanded }, $attrs.class]">
    <slot />
  </div>
  <button v-if="!expanded" class="text-primary text-left text-sm font-semibold py-1.5" @click.prevent="expandText">
    Show more
  </button>
</template>
