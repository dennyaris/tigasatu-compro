<script setup lang="ts">
const { t, locale } = useI18n()
useSeoMeta({
  title: t('diabetic.title'),
  description: t('diabetic.description')
})
</script>
<template>
  <DiabeticFeature />
  <DiabeticProduct />
  <section class="bg-white py-24 sm:py-32">
    <CardioTestimonials v-if="locale === 'en'" />
    <CardioTestimonialsID v-else />
  </section>
</template>
