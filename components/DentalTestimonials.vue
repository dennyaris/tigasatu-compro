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
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
        <div class="bg-white" v-for="(t, idx) in testimonials" :key="idx">
          <div class="relative aspect-square rounded-md overflow-hidden">
            <img class="object-cover w-full h-full" :src="t.image" :alt="t.name">
            <div class="absolute top-0 left-0 w-full h-full">
              <button @click.prevent="handleShowVideo(t)" class="absolute w-18 h-18 flex flex-center bg-primary rounded-full cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 fill-secondary translate-x-0.5">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div class="py-4 px-3 text-lg font-semibold">
            {{ t.name }}
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-3 sm:p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-semibold leading-6 text-gray-900 mb-6"
              >
                Testimonial from {{ modalData.name }}
              </DialogTitle>
              <div class="mt-2">
                <div class="youtube-container">
                  <iframe ref="iframe" :src="`https://www.youtube.com/embed/${modalData.video}?autoplay=1&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

const isOpen = ref(false)
type Data = {
  image: string
  name: string
  video: string
}
const modalData = ref<Data>({
  image: '',
  name: '',
  video: ''
})

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

const handleShowVideo = (data: Data) => {
  console.log('data', data)
  modalData.value = data
  openModal()
}
const testimonials = [
  {
    image: '/images/testimonials/Testimoni_drg-Asta.jpg',
    name: 'Drg. Asta',
    video: 'n5YtNhCn5Pg'
  },
  {
    image: '/images/testimonials/Testimoni_drg-Dimas-Mahardika.jpg',
    name: 'Drg. Dimas Mahardika',
    video: 'AdYG7PWmbBE'
  },
  {
    image: '/images/testimonials/Testimoni_drg-Kurnia.jpg',
    name: 'Drg. Kurnia',
    video: '4uDvtqgGj8w'
  }
]
</script>
<style lang="postcss">
.youtube-container {
	overflow: hidden;
	width: 100%;
	/* Keep it the right aspect-ratio */
	aspect-ratio: 1/1;
	/* No clicking/hover effects */
	pointer-events: none;
	
	iframe {
		/* Extend it beyond the viewport... */
		width: 300%;
		height: 100%;
		/* ...and bring it back again */
		margin-left: -100%;
	}
}
.testimony-body {
  @apply relative leading-snug;

  p {
    @apply mb-3;
  }
}
</style>
