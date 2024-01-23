<template>
  <div class="bg-white pt-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-lg font-semibold leading-7 text-secondary">
          {{ $t('cardio.why.label') }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {{ $t('cardio.why.title') }}
        </p>
        <p class="mt-6 text-xl leading-8 text-gray-600">
          {{ $t('cardio.why.subtitle') }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in $tm('cardio.features')" :key="feature.name" class="flex flex-col bg-slate-100 py-4 px-3 rounded-xl drop-shadow">
            <div class="flex gap-3 items-center">
              <div class="w-24 shrink-0">
                <img :src="$rt(feature.image)" :alt="$rt(feature.name)">
              </div>
              <dt class="grow mt-2 flex items-center gap-x-3 text-2xl font-bold leading-7 text-primary-900">
                {{ $rt(feature.name) }}
              </dt>
            </div>
            <dd class="mt-8 flex flex-auto flex-col text-lg leading-7 text-gray-600">
              <p class="flex-auto">
                {{ $rt(feature.description) }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
