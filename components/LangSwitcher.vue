<script setup lang="ts">
const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()
const changeLocale = (localeId: 'en' | 'id') => {
  router.push(localePath(route, localeId))
}
const btnClass = 'flex items-center justify-center gap-1 border-2 border-blue-light py-1 px-2 hover:bg-blue-light'
</script>
<template>
  <div class="lang-switcher flex">
    <button class="rounded-l-lg" :class="[btnClass, { active: locale === 'en' }]" @click="changeLocale('en')">
      <img class="w-4 h-4" src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">
      <span class="font-semibold text-sm">EN</span>
    </button>
    <button class="rounded-r-lg" :class="[btnClass, { active: locale === 'id' }]" @click="changeLocale('id')">
      <img class="w-4 h-4" src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48">
      <span class="font-semibold text-sm">ID</span>
    </button>
  </div>
</template>
<style scoped>
button.active {
  --at-apply: bg-blue-light;
}
</style>
