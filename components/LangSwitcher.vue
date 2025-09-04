<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const changeLocale = (localeId: 'en' | 'id') => {
  const path = localePath(route.fullPath, localeId)
  window.location.href = path
}
const btnClass = 'flex items-center justify-center gap-1 border-2 border-blue-light py-1 px-2 hover:bg-blue-light cursor-pointer transition-colors duration-200'
</script>

<template>
  <div class="lang-switcher flex">
    <button class="rounded-l-lg" :class="[btnClass, { active: locale === 'en', 'pointer-events-none': locale === 'en' }]" @click="locale !== 'en' && changeLocale('en')">
      <img class="w-4 h-4" src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">
      <span class="font-semibold text-sm">EN</span>
    </button>
    <button class="rounded-r-lg" :class="[btnClass, { active: locale === 'id', 'pointer-events-none': locale === 'id' }]" @click="locale !== 'id' && changeLocale('id')">
      <img class="w-4 h-4" src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48">
      <span class="font-semibold text-sm">ID</span>
    </button>
  </div>
</template>
<style scoped>
.lang-switcher button {
  z-index: 10;
  position: relative;
  text-decoration: none;
  color: inherit;
  outline: none;
}

.lang-switcher button:focus-visible {
  outline: 2px solid var(--color-blue-light);
  outline-offset: 2px;
}

.lang-switcher button.active {
  background-color: var(--color-blue-light);
  --at-apply: bg-blue-light;
  cursor: default;
}
</style>
