<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const generateWaURL = (name: string) => {
  const message = encodeURIComponent(`Hai, saya tertarik dengan ${name}. Bisakah Anda memberi saya rincian lebih lanjut?`)
  return `https://api.whatsapp.com/send?phone=628981203131&text=${message}`
}
</script>
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="text-lg font-semibold leading-7 text-secondary">
          Featured Products
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Your Partner in Advanced Medical Solutions
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          At Tigasatu Medika Pratama, we're committed to providing innovative medical products that enhance patient care and improve outcomes. Explore our range of featured products and discover how we're making a difference in healthcare. For more information, please
          <NuxtLink class="underline text-primary font-medium" :to="localePath('/contact', locale)">
            contact us
          </NuxtLink>.
        </p>
      </div>
    </div>
    <div class="mt-12 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div v-for="(product, idx) in $tm('diabetic.products')" :key="idx" class="w-full flex border rounded-lg px-3 sm:px-4 py-4 sm:py-6 bg-slate-50 drop-shadow overflow-hidden">
          <img class="hidden md:block md:w-48 h-auto object-cover" :src="$rt(product.image)" :alt="$rt(product.name)">
          <div class="pl-3 md:pl-4 grow">
            <img class="w-38 h-auto block md:hidden  object-cover" :src="$rt(product.image)" :alt="$rt(product.name)">
            <h3 class="product-name text-primary font-semibold text-xl mb-3">
              {{ $rt(product.name) }}
            </h3>
            <p class="text-base md:text-lg text-gray-600 leading-snug">
              {{ $rt(product.description) }}
            </p>
            <div class="flex gap-3 mt-4">
              <NuxtLink target="_blank" rel="nofollow noopener" class="inline-flex flex-center px-3 py-2 text-sm font-semibold leading-5 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" :to="$rt(product.brochure)">
                <i class="i-ph-file-pdf w-6 h-6 inline-block text-white" />
                <span class="ml-2">E-Brochure</span>
              </NuxtLink>
              <NuxtLink :to="generateWaURL($rt(product.name))" target="_blank" class="inline-flex flex-center px-3 py-1.5 text-sm font-medium leading-5 text-secondary border-2 border-secondary rounded-md focus:outline-none">
                <i class="i-ph-whatsapp-logo w-6 h-6 inline-block text-secondary" />
                <span class="ml-2">Contact Us</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.product-name {

  &::before {
    @apply absolute left-0 top-0 h-full w-1.5 bg-primary;
    content: '';
  }
}
</style>
