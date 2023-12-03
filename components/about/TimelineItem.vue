<script setup lang="ts">
const props = defineProps({
  idx: {
    type: Number,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: true
  }
})
const isVisible = ref(false)
const timeline = ref<HTMLElement | null>(null)
const parentEl = useParentElement()

useIntersectionObserver(timeline, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
  if (isIntersecting) {
    emit('onActive', props.idx)
  }
}, {
  rootMargin: '-50% 0% -50% 0%',
  root: parentEl,
  threshold: 0
})

const emit = defineEmits<{
  onActive: [id: number]
}>()
</script>
<template>
  <div
    :class="[
      { 'is-active': isVisible}
    ]"
    class="item flex justify-center snap-always snap-center h-1/3 px-8"
  >
    <div class="year w-20 shrink-0 relative flex items-center border-r-2 border-black">
      <div class="text-lg mr-4 counter font-bold">
        {{ year }}
      </div>
    </div>
    <div ref="timeline" :class="isVisible ? '' : 'filter-grayscale'" class="grow px-3 py-8 flex transition-all duration-400 items-center justify-center snap-always snap-center">
      <img class="h-full aspect-video shrink-0 object-cover" src="https://lelogama.go-jek.com/prime/upload/image/2018_milestones.svg" alt="">
      <div class="pl-3">
        <div :class="isVisible ? 'text-white/90' : 'text-white/30'">
          <h3 class="title font-semibold text-lg tracking-wide mb-2">
            {{ title }}
          </h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.is-active .year::after {
  @apply bg-secondary absolute;
  content: "";
  width: 4px;
  height: 48px;
  border-radius: 2px;
  right: -3px;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .4s;
}
.item:not(.is-active) .year::after {
  @apply bg-black absolute rounded-full w-3 h-3;
  right: -7px;
  content: "";
}
.item:not(.is-active) .counter, .item:not(.is-active) .title {
  @apply text-white/40;
}
.is-active .counter, .is-active .title {
  @apply text-white;
}
</style>
