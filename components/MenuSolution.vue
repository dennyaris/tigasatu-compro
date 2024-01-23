<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const { locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <Menu as="li" class="relative inline-block text-left">
    <div class="dropdown-btn px-2 py-1.5" :class="{'active': $route.matched.some(({ path }) => path.startsWith('/solution'))}">
      <MenuButton
        class="flex items-center font-semibold tracking-wide hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/75"
      >
        {{ $t('menu.solution') }}
        <i
          class="inline-block -mr-1 ml-1 h-5 w-5 i-mdi-chevron-down"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="px-4 py-8 absolute right-0 mt-2 w-140 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <MenuItem v-slot="{ close }" as="div" class="flex flex-col gap-y-4">
          <NuxtLink v-for="(item, idx) in $tm('home.solution.items')" :key="idx" :to="localePath($rt(item.to), locale)" class="flex hover:bg-blue-light rounded-lg px-2 py-3" @click="close">
            <img class="w-14 h-14 shrink-0" :src="$rt(item.image)" :alt="$rt(item.title)">
            <div class="grow pl-3">
              <p v-if="locale === 'en'" class="text-lg font-bold mb-1">
                {{ $rt(item.title) }}
                <span class="text-base font-semibold">{{ $t('home.solution.solution') }}</span>
              </p>
              <p v-else class="text-lg font-bold mb-1">
                <span class="text-base font-semibold">{{ $t('home.solution.solution') }}</span>
                {{ $rt(item.title) }}
              </p>
              <p class="text-sm text-gray-600">
                {{ $rt(item.subtitle) }}
              </p>
            </div>
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<style>
.dropdown-btn.active {
  @apply bg-primary text-white rounded-lg;
}
</style>
