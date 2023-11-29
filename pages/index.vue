<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('home.title')
})
const { locale } = useI18n()
const localePath = useLocalePath()
const solutionItemClass = 'flex flex-col bg-white rounded-3xl shadow-xl py-8 px-6 ring-2 ring-transparent hover:ring-primary'
const testimonials = [
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/eka-hospital.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/mayapada-hospital.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/rscm-hospital.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/rsud-dr-soetomo.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/siloam-hospital.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/omni-hospital.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  },
  {
    name: 'Dr. Siti Setiati, SpPD-KEMD',
    title: 'Owner',
    company: 'Klinik Setia Dihati',
    image: '/images/clients/mitra-keluarga.png',
    testimony: 'Kami sangat senang dengan pelayanan dari Tigasatu Medika Pratama. Mereka sangat responsif dan selalu siap membantu kami dalam menyelesaikan masalah. Kami sangat merekomendasikan Tigasatu Medika Pratama untuk menjadi mitra bisnis Anda.'
  }
]

const swiperModules = [SwiperFreeMode, SwiperNavigation, SwiperThumbs]
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <section class="relative w-full min-h-xl">
    <img class="object-cover brightness-50 min-h-screen" src="/images/laboratory-bg.jpg" alt="Laboratory">
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="container w-full h-full text-white flex items-center">
        <div class="max-w-4xl mx-auto text-center min-h-">
          <div class="relative mb-6 inline-flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-2 ring-white">
            <span class="font-bold tracking-wide">We’re hiring</span>
            <span class="h-4 w-px bg-blue-light" aria-hidden="true" />
            <NuxtLink :to="localePath('/career', locale)" class="flex items-center gap-x-1">
              <span class="absolute inset-0" aria-hidden="true" />
              See open positions
              <i class="i-mdi-chevron-double-right -mr-2 h-5 w-5" aria-hidden="true" />
            </NuxtLink>
          </div>
          <h1 class="font-mono font-semibold !leading-extreme text-3xl lg:text-6xl">
            Advancing Healthcare in Indonesia with Premier Medical Equipment Solutions
          </h1>
          <p class="hidden tracking-wide text-lg my-8">
            Bridging the Gap Between Medical Equipment Manufacturers and Healthcare Professionals: Delivering Quality, Innovation, and Excellence in Healthcare Services Throughout Indonesia Since 2017
          </p>
          <p class="tracking-wide lg:text-lg my-8">
            We are bridging medical equipment
            manufacturers with medical professionals and
            consumers all over Indonesia. We provide
            leading-edge services in the healthcare
            industry through strong partnerships, quality
            products, and excellent service to deliver the
            best quality to our customers.
          </p>
          <div class="flex justify-center gap-3 md:gap-6">
            <NuxtLink :to="localePath('/about', locale)" class="font-medium text-base tracking-wide py-2 px-6 rounded-full border-2 border-white text-white bg-secondary">
              More Detail
            </NuxtLink>
            <NuxtLink :to="localePath('/contact', locale)" class="font-medium text-base tracking-wide py-2 px-6 rounded-full border-2 border-white text-white bg-transparent ">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-blue-50 py-20">
    <div class="container">
      <h2 class="text-4xl font-black !leading-none text-center">
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
  <section class="pb-16 md:pb-8 pt-20">
    <div class="container">
      <h2 class="text-4xl font-black !leading-none text-left mb-8">
        Our Client Testimonials
      </h2>
      <div id="testimoni" class="shadow bg-blue-light rounded-6xl px-12 py-16">
        <div>
          <Swiper
            class="swiper-summary mb-8"
            :modules="[SwiperAutoplay, ...swiperModules]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 5000 }"
            :thumbs="{ swiper: thumbsSwiper }"
          >
            <SwiperSlide v-for="(testy, index) in testimonials" :key="index">
              <div class="flex flex-col md:flex-row">
                <div class="shrink-0 flex flex-col w-80 text-[#123049] md:text-white mb-6 md:mb-0">
                  <div>
                    <span class="w-24 h-24 inline-block bg-white rounded-full flex items-center justify-center">
                      <i class="block i-ph-user-circle-duotone w-20 h-20 text-secondary" />
                    </span>
                  </div>
                  <div class="text-xl font-bold mt-4">
                    {{ testy.name }}
                  </div>
                  <div class="font-semibold">
                    {{ testy.title }} - {{ testy.company }}
                  </div>
                </div>
                <div class="grow md:pl-30 md:pr-10 text-[#123049] text-lg italic">
                  <i class="w-5 h-5 inline-block i-mdi-format-quote-open" />
                  {{ testy.testimony }}
                  <i class="w-5 h-5 inline-block i-mdi-format-quote-close" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            class="bg-white shadow-sm rounded-4xl py-2 px-3"
            :modules="swiperModules"
            :space-between="10"
            :slides-per-view="2"
            :free-mode="true"
            :breakpoints="{
              '768': {
                slidesPerView: 5
              },
              '1024': {
                slidesPerView: 8
              }
            }"
            @swiper="setThumbsSwiper"
          >
            <SwiperSlide v-for="(testy, index) in testimonials" :key="index">
              <div class="cursor-pointer flex items-center justify-center">
                <img class="max-w-24" :src="testy.image">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
#testimoni {
  --at-apply: relative overflow-hidden;
}
#testimoni::before {
  --at-apply: bg-primary rounded-full absolute hidden md:block;
  content: '';
  width: 500px;
  height: 500px;
  left: -72px;
  top: -48px;
}
#testimoni::after {
  --at-apply: bg-secondary rounded-full absolute;
  content: '';
  width: 480px;
  height: 480px;
  left: -99px;
  bottom: -380px;
}

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
.swiper-slide-thumb-active {
  --at-apply: rounded-lg bg-blue-50 border-1 border-primary;
}
</style>
