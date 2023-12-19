<script setup lang="ts">
import type { LocaleObject } from 'vue-i18n-routing'
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()

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
  meta: [
    {
      name: 'version',
      content: config.public.version
    }
  ],
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
<style>
.my-shadow {
  box-shadow: rgba(0, 19, 53, 0.06) 0px 9px 27px, rgba(0, 19, 53, 0.043) 0px 3.75998px 11.28px, rgba(0, 19, 53, 0.035) 0px 2.01027px 6.0308px, rgba(0, 19, 53, 0.03) 0px 1.12694px 3.38082px, rgba(0, 19, 53, 0.024) 0px 0.598509px 1.79553px, rgba(0, 19, 53, 0.016) 0px 0.249053px 0.747159px;
}
</style>
