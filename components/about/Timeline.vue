<script setup lang="ts">

const onActive = (id: number) => {
  console.log('onActive', id)
}
</script>
<template>
  <section class="bg-blue-light py-20">
    <div class="container">
      <h2 class="text-3xl text-center font-black mb-8">
        Milestones
      </h2>
      <div class="bg-primary rounded-4xl max-w-4xl mx-auto">
        <div class="h-50vh w-full relative overflow-y-auto scrollbar-hide snap-y snap-mandatory scroll-smooth">
          <AboutTimelineSpacer />
          <AboutTimelineItem
            v-for="(timeline, idx) in $tm('about.timelines')"
            :key="idx"
            :idx="idx"
            :title="$rt(timeline.title)"
            :year="$rt(timeline.year)"
            :description="$rt(timeline.description)"
            @on-active="onActive"
          />
          <AboutTimelineSpacer />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
