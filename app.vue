<script setup lang="ts">
import type { LocaleObject } from 'vue-i18n-routing'
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const locObj = computed(() => {
  return locales.value.find((l) => {
    const loc = l as LocaleObject
    return loc.code === locale.value
  })
})
const hrefLangs = computed(() => {
  return locales.value.map((l) => {
    const loc = l as LocaleObject
    return {
      rel: 'alternate',
      hreflang: loc.iso,
      href: useAbsoluteUrl(localePath(route, loc.code))
    }
  })
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Tigasatu Medika Pratama` : 'Tigasatu Medika Pratama'
  },
  htmlAttrs: {
    lang: () => locObj.value?.iso
  },
  link: [
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: useAbsoluteUrl(localePath(route, 'en'))
    },
    ...hrefLangs.value
  ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
