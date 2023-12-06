<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const founders = [
  {
    name: 'Hendrik Kianto',
    title: 'Founder',
    image: '/images/peoples/hendrik-kianto.png',
    bio: 'MBA, Harvard Business School. Prior experiences include P&G and McKinsey & Co in strategic management & finance. Business interest in steel, food, and distributions.'
  },
  {
    name: 'Erwin Tenggono',
    title: 'Co-Founder',
    image: '/images/peoples/erwin-tenggono.jpg',
    bio: 'MBA, Prasetya Mulya Business School. Has 31 years senior executive at healthcare Industry. Sought after speaker on management and organization'
  },
  {
    name: 'David Utama',
    title: 'Co-Founder',
    image: '/images/peoples/david-utama.png',
    bio: 'MSc. in Industrial Engineering, Texas A&M University. Prior experiences include 17 years in GE and 12 years in ASEAN. Have a strong ASEAN network.'
  }
]

const jobs = [
  {
    title: 'Sales Development Representative',
    overview: "Join our team as a Sales Development Representative where you'll be instrumental in driving our business growth. Your role involves engaging with potential clients, identifying opportunities, and nurturing leads to set the stage for successful sales. You'll harness your communication skills and strategic thinking to create a robust pipeline, contributing directly to our company's success in the competitive healthcare sector.",
    location: 'Jakarta, Indonesia',
    workPlace: 'On-site'
  },
  {
    title: 'Software Engineer',
    overview: "As a Software Engineer, you'll play a pivotal role in developing innovative software solutions that advance healthcare technology. You'll collaborate with cross-functional teams to design, build, and maintain efficient, reusable, and reliable code. Your expertise will be crucial in solving complex technical challenges and delivering high-quality products that make a meaningful impact in the healthcare industry.",
    location: 'Jakarta, Indonesia',
    workPlace: 'Remote'
  }
]
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
              Our team
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
          <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
            <li v-for="n in 10" :key="n">
              <img class="mx-auto h-30 w-30 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
              <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                Michael Foster
              </h3>
              <p class="text-sm leading-6 text-gray-600">
                Designer
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <SectionFeaturedVacancies />
  </main>
</template>
