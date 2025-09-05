<script setup lang="ts">
import type { CareerParsedContent } from '~/types/career'
const { locale } = useI18n()
const localePath = useLocalePath()

const { data } = await useAsyncData(
  'jobs',
  () => {
    const query = queryContent<CareerParsedContent>('career').locale(locale.value).where({ _draft: false }).limit(3)
    return query.find()
  },
  {
    deep: false
  }
)
</script>
<template>
  <section class="py-24" :class="[$attrs.class]">
    <div class="container">
      <div class="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div class="w-full lg:max-w-xl lg:flex-auto">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ $t('vacancies.title') }}
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600">
            {{ $t('vacancies.subtitle') }}
          </p>
          <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80" alt="" class="mt-8 aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover">
        </div>
        <div class="w-full lg:max-w-xl lg:flex-auto">
          <h3 class="sr-only">
            Job openings
          </h3>
          <ul class="-my-8 divide-y divide-gray-100">
            <li v-for="(job, idx) in data" :key="idx" class="py-8">
              <dl class="relative flex flex-col flex-wrap gap-x-3">
                <div>
                  <dt class="sr-only">
                    Role
                  </dt>
                  <dd class="w-full flex-none text-2xl font-semibold tracking-tight text-gray-900">
                    <NuxtLink :to="localePath(job._path as string, locale)">
                      {{ job.title }}
                    </NuxtLink>
                  </dd>
                </div>
                <div class="flex-inline items-center mt-3">
                  <i class="i-ph-map-pin w-5 h-5 mr-2 block" />
                  <dt class="sr-only">
                    Location
                  </dt>
                  <dd class="text-base font-medium">
                    <a href="#">
                      {{ job.jobLocation }}
                    </a>
                  </dd>
                </div>
                <div class="flex-inline items-center mt-1">
                  <i class="i-ph-briefcase w-5 h-5 mr-2 block" />
                  <dt class="sr-only">
                    Type
                  </dt>
                  <dd>
                    <span class="label capitalize bg-primary">{{ job.jobLocationType }}</span> &bull; <span class="label capitalize bg-secondary">{{ job.employmentType }}</span>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">
                    Description
                  </dt>
                  <ExpandableText :max-lines="3" class="mt-2 w-full flex-none text-gray-600">
                    {{ job.description }}
                  </ExpandableText>
                </div>
              </dl>
            </li>
          </ul>
          <div class="mt-8 flex border-t border-gray-100 pt-8">
            <NuxtLink :to="localePath('/career', locale)" class="text-lg font-semibold leading-6 text-primary hover:text-secondary">
              {{ $t('vacancies.see_all') }} <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
