<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true
  }
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 md:pb-60 lg:px-8">
        <div class="text-center">
          <p class="text-3xl md:text-5xl font-semibold text-indigo-600">
            {{ error.statusCode || '500' }}
          </p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {{ error.statusMessage || error.message || 'Something went wrong' }}
          </h1>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
