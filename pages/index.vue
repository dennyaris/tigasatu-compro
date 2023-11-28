<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('home.title')
})
const { locale } = useI18n()
const localePath = useLocalePath()
const solutionItemClass = 'flex flex-col bg-white rounded-3xl shadow-xl py-8 px-6'
</script>

<template>
  <div class="py-20 text-center">
    <h1 class="text-xl font-bold">
      {{ $t('home.title') }}
    </h1>
  </div>
  <section class="bg-blue-50">
    <div class="container">
      <h2 class="text-3xl font-black text-center">
        Our Solution Specialization Focus
      </h2>
      <div id="solution-grid" class="grid gap-y-8 gap-3 md:gap-6 grid-cols-1 md:grid-cols-3 mt-12">
        <div :class="solutionItemClass">
          <div class="flex items-center gap-3 mb-6">
            <img class="w-14 h-14 shrink-0" src="/images/solution-cardio.png" alt="Cardio Solution">
            <h3 class="text-[#123049] text-3xl font-black">
              Cardio
              <span class="text-2xl font-bold">Solutions</span>
            </h3>
          </div>
          <p class="text-[#7686ab] !leading-snug tracking-wide">
            Distributing major Western brands in Intervention Cardiology
            and Electrophysiology solutions requiring deep technical
            know-how / professional applicants 24/7.
          </p>
          <div class="flex justify-end items-end grow pt-4">
            <NuxtLink :to="localePath('/solution/cardio', locale)" class="inline-block font-medium underline py-1 px-6 rounded-full text-secondary">
              Learn More
            </NuxtLink>
          </div>
        </div>
        <div :class="solutionItemClass">
          <div class="flex items-center gap-3 mb-6">
            <img class="w-14 h-14 shrink-0" src="/images/solution-diabetic.png" alt="Cardio Solution">
            <h3 class="text-[#123049] text-3xl font-black">
              Diabetic
              <span class="text-2xl font-bold">Solutions</span>
            </h3>
          </div>
          <p class="text-[#7686ab] !leading-snug tracking-wide">
            The only official distributor in the whole of Indonesia of
            technology solutions for Insulin-dependent diabetes patients
            and specialty clinics.
          </p>
          <div class="flex justify-end items-end grow pt-4">
            <NuxtLink :to="localePath('/solution/diabetic', locale)" class="inline-block font-medium underline py-1 px-6 rounded-full text-secondary">
              Learn More
            </NuxtLink>
          </div>
        </div>
        <div :class="solutionItemClass">
          <div class="flex items-center gap-3 mb-6">
            <img class="w-14 h-14 shrink-0" src="/images/solution-dental.png" alt="Cardio Solution">
            <h3 class="text-[#123049] text-3xl font-black">
              Dental
              <span class="text-2xl font-bold">Solutions</span>
            </h3>
          </div>
          <p class="text-[#7686ab] !leading-snug tracking-wide">
            Distributing major Western and Asian brands of capital
            equipment, hand tools and consumables for all dental
            specialties with a dedicated sales team and supporting
            category specialists in Greater Jakarta.
          </p>
          <div class="flex justify-end items-end grow pt-4">
            <NuxtLink :to="localePath('/solution/dental', locale)" class="inline-block font-medium underline py-1 px-6 rounded-full text-secondary">
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h2>Our Client Testimonials</h2>
    </div>
  </section>
</template>
<style>
#solution-grid > div {
  position: relative;
  overflow: hidden;
}
#solution-grid > div::before {
  --at-apply: bg-primary rounded-full absolute;
  content: '';
  bottom: -40px;
  left: -16px;
  width: 90px;
  height: 90px;
}
#solution-grid > div::after {
  --at-apply: bg-secondary rounded-full absolute;
  content: '';
  left: 60px;
  bottom: -15px;
  width: 30px;
  height: 30px;
}
</style>
