<script setup lang="ts">
import {
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const { locale } = useI18n()
const localePath = useLocalePath()
const menuItemClass = 'font-semibold tracking-wide hover:text-secondary'
const mobileMenuItemClass = 'flex items-center gap-1.5 group'
const mobileMenuItemIconClass = 'w-8 h-8 group-hover:text-secondary'
const mobileMenuItemTextClass = 'text-lg font-medium tracking-wide group-hover:text-primary group-hover:font-semibold'
const route = useRoute()

const isOpen = ref(false)

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}
const setIsOpen = (value: boolean) => {
  isOpen.value = value
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
      <ul class="hidden lg:flex items-center justify-center gap-x-6">
        <li>
          <NuxtLink :class="menuItemClass" :to="localePath('/', locale)">
            {{ $t('menu.home') }}
          </NuxtLink>
        </li>
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
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/', locale)">
              <span :class="mobileMenuItemIconClass" class="i-ph-buildings-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.home') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/about', locale)">
              <span :class="mobileMenuItemIconClass" class="i-ph-shooting-star-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.about') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/about', locale)">
              <span :class="mobileMenuItemIconClass" class="i-ph-globe-hemisphere-east-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.contact') }}</span>
            </NuxtLink>
            <NuxtLink :class="mobileMenuItemClass" :to="localePath('/about', locale)">
              <span :class="mobileMenuItemIconClass" class="i-ph-briefcase-duotone" />
              <span :class="mobileMenuItemTextClass">{{ $t('menu.career') }}</span>
            </NuxtLink>
          </nav>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
