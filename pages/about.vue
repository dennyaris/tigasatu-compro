<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t('about.title'),
  description: t('about.description')
})
</script>
<template>
  <div class="pb-20">
    <AboutHero />
    <AboutCoreValues />
    <AboutTimeline />
    <!-- <AboutFaq /> -->
  </div>
</template>
<style>
.swiper > .swiper-wrapper{
  padding-top: 12px;
  padding-bottom: 12px;
  transition-timing-function : linear !important;
}
</style>
