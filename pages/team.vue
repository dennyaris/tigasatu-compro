<script setup lang="ts">
import { ucwords } from '~/utils/string'

const { locale, t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: t('team.title'),
  description: t('team.description')
})
</script>
<template>
  <main class="mb-60">
    <section id="founders" class="py-24">
      <div class="container">
        <h2 class="text-center text-4xl font-semibold mb-6">
          {{ $t('team.founder_title') }}
        </h2>
        <p class="max-w-4xl mx-auto text-lg text-center">
          {{ $t('team.founder_subtitle') }}
        </p>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <li v-for="(founder, idx) in $tm('team.founders')" :key="idx" class="rounded-2xl bg-slate-100 px-8 py-10">
            <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="$rt(founder.image)" :alt="$rt(founder.name)">
            <h3 class="mt-8 mb-4 text-center text-xl font-semibold">
              {{ $rt(founder.name) }}
            </h3>
            <p class="text-lg text-center">
              {{ $rt(founder.bio) }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-24 bg-blue-light">
      <div class="container">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {{ $t('team.people_title') }}
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ $t('team.people_subtitle') }}
            </p>
          </div>
          <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
            <li v-for="(people, idx) in $tm('team.peoples')" :key="idx">
              <img v-if="false" class="mx-auto h-30 w-30 rounded-full object-cover" src="/images/peoples/test-pp.jpeg" :alt="$rt(people.name)">
              <div v-else class="mx-auto h-28 w-28 rounded-full tracking-widest bg-primary border-4 border-secondary text-white text-4xl font-bold flex flex-center">
                {{ getInitials($rt(people.name)) }}
              </div>
              <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {{ $rt(people.name) }}
              </h3>
              <p class="text-sm leading-tight text-gray-600">
                {{ $rt(people.title) }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <SectionFeaturedVacancies />
  </main>
</template>
