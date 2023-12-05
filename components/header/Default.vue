<script setup lang="ts">
import {
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const { locale } = useI18n()
const localePath = useLocalePath()
const menuItemClass = 'font-semibold tracking-wide hover:text-secondary'
const mobileMenuItemClass = 'flex items-center gap-1.5 group rounded-lg border-2 border-blue-light px-2 py-2'
const mobileMenuItemIconClass = 'w-8 h-8 group-hover:text-secondary'
const mobileMenuItemTextClass = 'text-lg font-medium tracking-wide group-hover:text-primary group-hover:font-semibold'
const route = useRoute()

const isOpen = ref(false)
const isSolutionOpen = ref(false)

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}
const setIsOpen = (value: boolean) => {
  isOpen.value = value
}
const handleClick = () => {
  isOpen.value = false
}
</script>
<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/75 border-b border-blue-light">
    <div class="container mx-auto flex justify-between items-center gap-3 h-14">
      <div class="flex items-center justify-start">
        <NuxtLink :to="localePath('/')">
          <img class="h-8 w-auto" src="/images/logo-tigasatu.png" alt="Logo Tigasatu Medika Pratama">
        </NuxtLink>
      </div>
      <ul class="main-menu hidden lg:flex items-center justify-center gap-x-8">
        <li>
          <NuxtLink :class="menuItemClass" :to="localePath('/', locale)">
            {{ $t('menu.home') }}
          </NuxtLink>
        </li>
        <MenuSolution />
        <li>
          <NuxtLink :class="menuItemClass" :to="localePath('/about', locale)">
            {{ $t('menu.about') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :class="menuItemClass" :to="localePath('/contact', locale)">
            {{ $t('menu.contact') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :class="menuItemClass" :to="localePath('/team', locale)">
            {{ $t('menu.team') }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center justify-end gap-x-3">
        <LangSwitcher />
        <div class="lg:hidden">
          <button
            type="button"
            class="inline-flex items-center p-1 rounded bg-blue-light"
            :aria-label="isOpen ? 'Close Menu' : 'Open Menu'"
            @click="toggleMobileMenu"
          >
            <span v-if="isOpen" class="i-mdi-menu-open shrink-0 h-6 w-6" aria-hidden="true" />
            <span v-else class="i-mdi-menu-close shrink-0 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <Dialog :open="isOpen" class="relative z-50" @close="setIsOpen">
      <DialogPanel class="fixed inset-0 w-screen bg-white">
        <div class="container mx-auto flex justify-between items-center gap-3 h-14 border-b border-blue-light">
          <div class="flex items-center justify-start">
            <NuxtLink :to="localePath('/')">
              <img class="h-8 w-auto" src="/images/logo-tigasatu.png" alt="Logo Tigasatu Medika Pratama">
            </NuxtLink>
          </div>
          <div class="flex items-center justify-end gap-x-3">
            <LangSwitcher />
            <div class="lg:hidden">
              <button
                type="button"
                class="inline-flex items-center p-1 rounded bg-blue-light"
                :aria-label="isOpen ? 'Close Menu' : 'Open Menu'"
                @click="toggleMobileMenu"
              >
                <span v-if="isOpen" class="i-mdi-menu-open shrink-0 h-6 w-6" aria-hidden="true" />
                <span v-else class="i-mdi-menu-close shrink-0 h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div class="container mx-auto py-3">
          <nav class="space-y-3">
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/', locale)" @click="handleClick">
              <span :class="mobileMenuItemIconClass" class="i-ph-buildings-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.home') }}</span>
            </NuxtLink>
            <div :class="mobileMenuItemClass" class="flex-col">
              <button class="w-full flex" @click.prevent="isSolutionOpen = !isSolutionOpen">
                <div class="grow flex items-center gap-1.5">
                  <span :class="mobileMenuItemIconClass" class="i-ph-flask-duotone" />
                  <span :class="mobileMenuItemTextClass">{{ $t('menu.solution') }}</span>
                </div>
                <i
                  :class="!isSolutionOpen ? 'duration-200' : 'duration-200 rotate-180'"
                  class="inline-block -mr-1 ml-1 h-8 w-8 i-mdi-chevron-down text-primary"
                  aria-hidden="true"
                />
              </button>
              <div v-show="isSolutionOpen" class="w-full pl-4 pt-3">
                <div class="flex flex-col gap-y-4">
                  <NuxtLink v-for="(item, idx) in $tm('home.solution.items')" :key="idx" :to="localePath($rt(item.to), locale)" class="flex gap-2" @click="handleClick">
                    <img class="w-8 h-8 shrink-0" :src="$rt(item.image)" :alt="$rt(item.title)">
                    <span class="text-lg font-semibold tracking-wide">
                      {{ locale === 'en' ? $rt(item.title) + ' ' + $t('home.solution.solution') : $t('home.solution.solution') + ' ' + $rt(item.title) }}
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/about', locale)" @click="handleClick">
              <span :class="mobileMenuItemIconClass" class="i-ph-shooting-star-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.about') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/contact', locale)" @click="handleClick">
              <span :class="mobileMenuItemIconClass" class="i-ph-globe-hemisphere-east-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.contact') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/team', locale)" @click="handleClick">
              <span :class="mobileMenuItemIconClass" class="i-ph-users-three-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.team') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/career', locale)" @click="handleClick">
              <span :class="mobileMenuItemIconClass" class="i-ph-briefcase-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.career') }}</span>
            </NuxtLink>
          </nav>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<style scoped>
.main-menu .router-link-active {
  @apply text-primary underline;
}
</style>
