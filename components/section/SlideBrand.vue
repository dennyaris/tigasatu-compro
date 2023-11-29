<script setup lang="ts">
const props = defineProps({
  reverseDirection: {
    type: Boolean,
    default: false
  }
})
const brands = [
  {
    title: 'Medtronic',
    image: '/images/brands/medtronic.jpg'
  },
  {
    title: 'Biotronik',
    image: '/images/brands/biotronik.png'
  },
  {
    title: 'Kerr',
    image: '/images/brands/kerr.png'
  },
  {
    title: 'Kavo',
    image: '/images/brands/kavo.png'
  },
  {
    title: 'Leibinger Dental',
    image: '/images/brands/leibinger-dental.png'
  },
  {
    title: 'Denjoy',
    image: '/images/brands/denjoy.png'
  },
  {
    title: 'Nakamura Dental',
    image: '/images/brands/nakamura-dental.jpg'
  },
  {
    title: 'Mectron',
    image: '/images/brands/mectron.jpg'
  },
  {
    title: 'A-Dec',
    image: '/images/brands/a-dec.png'
  },
  {
    title: 'Andini',
    image: '/images/brands/andini.png'
  }
]

const shuffleBrandsDoubleIt = computed(() => {
  const shuffled = brands.sort(() => Math.random() - 0.5)
  return shuffled.concat(shuffled)
})
</script>
<template>
  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      :slides-per-view="'auto'"
      :free-mode="true"
      :loop="true"
      :speed="8000"
      :no-swiping="true"
      :space-between="16"
      :prevent-interaction-on-transition="false"
      :autoplay="{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: props.reverseDirection,
      }"
    >
      <SwiperSlide v-for="(b, i) in shuffleBrandsDoubleIt" :key="i" class="w-auto">
        <div class="bg-white h-20 aspect-[2/1] flex items-center justify-center rounded-2xl ring-1 ring-blue-light shadow px-3 py-2">
          <img class="object-contain max-w-full max-h-full" :src="b.image" :alt="b.title">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
