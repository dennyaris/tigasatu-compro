<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">

</script>
<template>
  <section class="bg-[#f7fcff] pt-24 pb-80">
    <div class="container">
      <div class="max-w-3xl mx-auto mb-20">
        <h2 class="text-4xl tracking-wide text-center font-black mb-6">
          {{ $t('about.vision.title') }}
        </h2>
        <p class="text-center text-xl" v-html="$t('about.vision.subtitle')" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(value, idx) in $tm('about.vision.values')" :key="idx" class="bg-white rounded-2xl shadow px-2 py-2">
          <div class="relative bg-primary text-white rounded-lg px-2 py-6 text-center">
            <span class="bg-secondary rounded-full flex items-center justify-center text-5xl font-bold w-16 h-16 absolute top-2 left-4 md:left-2 -translate-y-1/2 -translate-x-1/2">{{ $rt(value.title).charAt(0) }}</span>
            <h3 class="text-3xl font-heading font-bold">
              {{ $rt(value.title) }}
            </h3>
          </div>
          <div class="text-center py-6 text-lg">
            {{ $rt(value.description) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
