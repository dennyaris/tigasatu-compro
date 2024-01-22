<script setup lang="ts">
const { t, locale } = useI18n()
useSeoMeta({
  title: t('cardio.title'),
  description: t('cardio.description')
})
</script>
<template>
  <CardioFeature />
  <DiabeticProduct />
  <section class="bg-white py-24 sm:py-32">
    <CardioTestimonials v-if="locale === 'en'" />
    <CardioTestimonialsID v-else />
  </section>
</template>
