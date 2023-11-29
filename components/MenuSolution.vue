<template>
  <Menu as="li" class="relative inline-block text-left">
    <div>
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
        <div class="flex flex-col gap-y-4">
          <NuxtLink :to="localePath('/solution/cardio', locale)" class="flex hover:bg-blue-light rounded-lg px-2 py-3">
            <img class="w-14 h-14 shrink-0" src="/images/solution-cardio.png" alt="Cardio Solution">
            <div class="grow pl-3">
              <p class="text-lg font-bold mb-1">
                Cardio
                <span class="text-base font-semibold">Solutions</span>
              </p>
              <p class="text-sm text-gray-600">
                Distributing major Western brands in Intervention Cardiology
                and Electrophysiology solutions requiring deep technical
                know-how / professional applicants 24/7.
              </p>
            </div>
          </NuxtLink>
          <NuxtLink :to="localePath('/solution/diabetic', locale)" class="flex hover:bg-blue-light rounded-lg px-2 py-3">
            <img class="w-14 h-14 shrink-0" src="/images/solution-diabetic.png" alt="Cardio Solution">
            <div class="grow pl-3">
              <p class="text-lg font-bold mb-1">
                Diabetic
                <span class="text-base font-semibold">Solutions</span>
              </p>
              <p class="text-sm text-gray-600">
                The only official distributor in the whole of Indonesia of
                technology solutions for Insulin-dependent diabetes patients
                and specialty clinics.
              </p>
            </div>
          </NuxtLink>
          <NuxtLink :to="localePath('/solution/dental', locale)" class="flex hover:bg-blue-light rounded-lg px-2 py-3">
            <img class="w-14 h-14 shrink-0" src="/images/solution-dental.png" alt="Cardio Solution">
            <div class="grow pl-3">
              <p class="text-lg font-bold mb-1">
                Dental
                <span class="text-base font-semibold">Solutions</span>
              </p>
              <p class="text-sm text-gray-600">
                Distributing major Western and Asian brands of capital
                equipment, hand tools and consumables for all dental
                specialties with a dedicated sales team and supporting
                category specialists in Greater Jakarta.
              </p>
            </div>
          </NuxtLink>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
