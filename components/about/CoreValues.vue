<script setup lang="ts">

</script>
<template>
  <section class="bg-gray-ash py-20">
    <div class="container">
      <h2 class="text-3xl text-center font-black mb-8">
        Our Core Values
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(value, idx) in $tm('about.values')" :key="idx" class="bg-white rounded-2xl shadow px-2 py-2">
          <div class="relative bg-primary text-white text-2xl font-bold rounded-lg px-2 py-6 text-center">
            <span class="bg-primary rounded-full flex items-center justify-center text-5xl w-16 h-16 absolute top-2 left-4 md:left-2 -translate-y-1/2 -translate-x-1/2">{{ $rt(value.title).charAt(0) }}</span>
            <h3>{{ $rt(value.title) }}</h3>
          </div>
          <div class="text-center py-6 text-lg">
            {{ $rt(value.description) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
