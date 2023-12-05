<script setup lang="ts">
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
</script>
<template>
  <main class="mb-60">
    <section id="founders" class="py-24">
      <div class="container">
        <h2 class="text-center text-4xl font-semibold">
          Founders
        </h2>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <li v-for="(founder, idx) in founders" :key="idx" class="rounded-2xl bg-slate-100 px-8 py-10">
            <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="founder.image" :alt="founder.name">
            <h3 class="mt-8 mb-4 text-center text-xl font-semibold">
              {{ founder.name }}
            </h3>
            <p class="text-lg text-center">
              {{ founder.bio }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="leaders" class="py-24">
      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div class="col-span-1 sm:col-span-2 lg:col-span-1">
          <h2 class="text-4xl font-semibold mb-6">
            Meet our leadership
          </h2>
          <p class="text-lg">
            Our leadership team is comprised of experienced professionals with a passion for helping others achieve their goals.
          </p>
        </div>
        <div class="">
          <img v-if="true" class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src="images/peoples/hendrik-kianto.png">
          <img v-else class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-8 mb-1 text-center text-xl font-semibold">
            Hendrik Kianto
          </h3>
          <p class="text-primary text-center mb-4 font-semibold">
            Director
          </p>
          <p class="text-lg text-center">
            MBA, Harvard Business School. Prior experiences include P&G and McKinsey & Co in strategic management & finance. Business interest in steel, food, and distributions.
          </p>
        </div>
        <div>
          <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src="images/peoples/christian-van-schoote.png">
          <h3 class="mt-8 mb-1 text-center text-xl font-semibold">
            Christian Van Schoote
          </h3>
          <p class="text-primary text-center mb-4 font-semibold">
            Director
          </p>
          <p class="text-lg text-center">
            MBA, INSEAD. Prior experiences include Director at Delhaize Group, Chief Executive Officer at MAP, Chief Operating Officer at Bhinneka, and Engagement Manager at McKinsey &Co
          </p>
        </div>
      </div>
    </section>
    <section class="py-24">
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
  </main>
</template>
