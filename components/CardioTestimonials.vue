<template>
  <div class="relative isolate bg-white pb-32 pt-24">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-secondary">
          Testimonials
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          <span class="font-semibold">Transforming Lives:</span> Hear from Hundreds of Our Satisfied Users
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
            <p>{{ `“${featuredTestimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
            <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="">
            <div class="flex-auto">
              <div class="font-semibold">
                {{ featuredTestimonial.author.name }}
              </div>
              <div class="text-gray-600">
                {{ `@${featuredTestimonial.author.handle}` }}
              </div>
            </div>
            <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="">
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="testimony-body text-gray-900" v-html="testimonial.body" />
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="">
                <div>
                  <div class="font-semibold">
                    {{ testimonial.author.name }}
                  </div>
                  <div class="text-sm text-gray-600 leading-tight">
                    {{ testimonial.author.handle }}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      '/images/peoples/anonymous.png',
    logoUrl: '/images/clients/mayapada-hospital.png'
  }
}
const testimonials = [
  [
    [
      {
        body: 'Jauh lebih nyaman daripada suntik biasa. Insulin yang setiap beberapa menit masuk ke dalam tubuh saya membuat gula darah saya menjadi lebih stabil.',
        author: {
          name: 'Tasya, 34 Tahun',
          handle: 'DM1 sejak 11 tahun',
          imageUrl:
            '/images/peoples/anonymous.png'
        }
      },
      {
        body: 'The Insulin Pump has been a game-changer in managing my diabetes. Its precise control over insulin delivery has helped me maintain my blood sugar levels consistently.',
        author: {
          name: 'John, 28 Years Old',
          handle: 'Diabetic Type 1 for 15 years',
          imageUrl: '/images/peoples/anonymous.png'
        }
      }
      // {
      //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      //   author: {
      //     name: 'Leslie Alexander',
      //     handle: 'lesliealexander',
      //     imageUrl:
      //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      //   }
      // }
    ],
    [
      {
        body: '<p>Selama pakai pump, selain membantu mengurangi frekuensi suntik, juga membantu mengendalikan gula darah. Ngaa perlu khawatir lagi hipoglikemi Tengah malam atau tinggi di jam setelah sarapan.</p><p>arumnya (cannula) juga meskipun terbuat dari stainless tetapi ngga sakit dan setelah masuk ke kulit tidak berasa. Nyaman untuk dipakai bergerak.</p>',
        author: {
          name: 'Sarah, 28 Tahun',
          handle: 'DM1 sejak 6 tahun',
          imageUrl:
            '/images/peoples/anonymous.png'
        }
      }
      // More testimonials...
    ]
  ],
  [
    [
      {
        body: '<p>Insulin Pump sangat praktis dan memudahkan keseharian saya dalam beraktivitas, ga perlu rpot dan bingung suntuk di tempat umum.</p><p>Gula darahpun menjadi lebih terkontrol dan 70% berada di range target (80-170 mg/dl). Frekuensi hiperglikemi yang sebelumnya mencapai 30% dalam seminggu sekarang berubah menjadi 11%. Highly recommended!</p>',
        author: {
          name: 'Claudya, 28 Tahun',
          handle: 'DM1 sejak 21 tahun',
          imageUrl:
            '/images/peoples/anonymous.png'
        }
      }
      // More testimonials...
    ],
    [
      {
        body: "I've found a new sense of freedom since I started using the Insulin Pump. No more frequent injections, and I can enjoy my meals without worry.",
        author: {
          name: 'Sarah, 40 Years Old',
          handle: 'Diagnosed with Type 2 Diabetes',
          imageUrl: '/images/peoples/anonymous.png'
        }
      },
      {
        body: "The Insulin Pump has transformed the way I manage my diabetes. It's discreet, efficient, and has reduced the number of times I need to check my blood sugar levels.",
        author: {
          name: 'Alex, 50 Years Old',
          handle: 'Living with Diabetes for 20 years',
          imageUrl: '/images/peoples/anonymous.png'
        }
      }
      // More testimonials...
    ]
  ]
]
</script>
<style lang="postcss">
.testimony-body {
  @apply relative leading-snug;

  p {
    @apply mb-3;
  }
}
</style>
