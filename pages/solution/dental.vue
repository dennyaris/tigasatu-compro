<script setup lang="ts">
const { t, locale } = useI18n()
useSeoMeta({
  title: t('dental.title'),
  description: t('dental.description')
})
</script>
<template>
  <h1 class="text-center text-4xl font-bold mt-40 mb-80">
    Dental Solution
  </h1>
</template>
