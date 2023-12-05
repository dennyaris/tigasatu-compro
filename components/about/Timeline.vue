<script setup lang="ts">

const onActive = (id: number) => {
  console.log('onActive', id)
}
</script>
<template>
  <section class="relative bg-gray-ash pb-80 pt-0">
    <div class="container flex gap-x-4 gap-y-6 flex-col lg:flex-row">
      <div class="text-left">
        <h2 class="text-3xl !leading-tight font-black mb-6">
          Milestones: Charting Our Path of Progress and Innovation
        </h2>
        <p class="text-lg">
          A retrospective look at the key moments that define our journey. From small steps to giant leaps, each milestone marks a chapter in our story of growth, determination, and success. Join us in celebrating the landmarks that have shaped our legacy.
        </p>
      </div>
      <div class="bg-primary rounded-4xl lg:min-w-3xl mx-auto">
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
section::before {
  content: "";
  background-image: url(/images/pattern-grey.png);
  position: absolute;
  width: 100%;
  height: 200px;
  top: -199px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  left: 0;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
