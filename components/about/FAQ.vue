<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const elements = ref<any>([])
function hideOther (index: number) {
  elements.value.filter((_:any, key: number) => key !== index).forEach((close: () => any) => close())
}
</script>

<template>
  <section class="relative pb-24 pt-0">
    <div class="container flex flex-col lg:flex-row gap-y-8">
      <div class="grow lg:pr-6">
        <Disclosure
          v-for="(item, idx) in $tm('about.faqs')"
          :key="idx"
          v-slot="{ open, close }"
          :default-open="idx === 0"
        >
          <DisclosureButton
            :ref="_ => (elements[idx] = close)"
            :class="open ? 'bg-[#d2eaff] text-black' : 'mb-4 bg-white text-primary border-b border-b-gray-200'"
            class="accordion flex w-full justify-between rounded-t-3xl px-8 py-6 text-left text-xl !leading-none tracking-wide font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
            @click="hideOther(idx)"
          >
            <span>{{ $rt(item.question) }}</span>
            <i
              :class="open ? 'rotate-180 transform' : ''"
              class="h-6 w-6 i-mdi-chevron-down-circle-outline shrink-0"
            />
          </DisclosureButton>
          <DisclosurePanel :class="open ? 'mb-4' : ''" class="px-6 py-6 text-base text-gray-500 bg-blue-light rounded-b-3xl">
            {{ $rt(item.answer) }}
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="lg:w-100 shrink-0">
        <p class="text-3xl font-semibold mb:4 md:mb-6">
          Selalu ada untuk membantu Anda
        </p>
        <p class="text-base mb:4 md:mb-6">
          Apabila Anda ingin mengetahui lebih lanjut mengenai produk pembayaran, pendaftaran, atau solusi atas kendala yang dialami, kami selalu siap membantu Anda. Hubungi kami lewat media sosial atau tombol chat di sebelah kanan. Anda juga dapat mengunjungi Pusat Bantuan kami.
        </p>
        <NuxtLink class="inline-block border-2 border-secondary bg-secondary text-white py-2 px-8 rounded-full text-center sm:text-left">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped>
section::before {
  content: "";
  background-image: url(/images/pattern-clear-white.png);
  position: absolute;
  width: 100%;
  height: 200px;
  top: -199px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  left: 0;
}
</style>
