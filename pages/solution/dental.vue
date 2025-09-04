<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
useSeoMeta({
  title: t('dental.title'),
  description: t('dental.description')
})

const brochureLink = 'https://drive.google.com/file/d/1m3I04Al4cA1PoPGcytgMNnn8aMx12yFZ/view?usp=sharing'
const products = [
  {
    brand: 'Denjoy',
    name: 'Rotary File - i3 Gold',
    description: 'i3 Gold Rotary File brings a more structured, multi-step approach, guiding practitioners from orifice enlargement through to final taper with precision and control.',
    images: [
      'denjoy-i3-gold.png',
      'denjoy-i3-gold_2.png',
      'denjoy-i3-gold_3.png',
      'denjoy-i3-gold_4.png'
    ]
  },
  {
    brand: 'Denjoy',
    name: 'Free File',
    description: 'Free File excels in simplicity and safety—with its snakelike design it’s especially effective for challenging canal anatomy, offering better debris clearance and less risk of instrument failure.',
    images: [
      'denjoy-free-file.png',
      'denjoy-free-file_2.png',
      'denjoy-free-file_3.png',
      'denjoy-free-file_4.png',
      'denjoy-free-file_5.png'
    ]
  },
  {
    brand: 'Denjoy',
    name: 'FreePex Apex Locator',
    description: 'The 6th generation multi-frequency chip: Measures in both wet or dry canal conditions with class-leading accuracy. Ergonomics design: Foldable body enable comfortable vision. Large capacity lithium rechargeable battery: Universal quick charging interface. Automatic Calibration: Automatic Calibration ensures accuracy and eliminates the effect of changes in temperature, moisture, etc.',
    images: [
      'denjoy-freepex-apex-locator.png',
      'denjoy-free-apex-locator_2.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'OptiBond™ Universal',
    description: 'OptiBond™ Universal is the one-bottle dental bonding agent that combines the reliability of patented OptiBond GPDM technology with the ease of use of a universal solution.',
    images: [
      'optibond-universal.png',
      'optibond-universal_2.png',
      'optibond-universal_3.png',
      'optibond-universal_4.png'
    ]
  },
  {
    brand: 'Denjoy',
    name: 'Endo Motor IMate II C',
    description: 'Endo motor function is a kind of endodontic micromotor to drive Ni-Ti instruments, which can assist the dentists to shape more standard root-canal in the process of root-canal treatment based on the micro-electronic control technology.',
    images: [
      'endo-motor-imate-2c.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'SimpliShade™',
    description: 'SimpliShade™ Universal Composite streamline your restoration workflow and inventory management, without compromising strength or esthetics.',
    images: [
      'kerr-simplishade.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'Herculite',
    description: 'Herculite Classic is a microhybrid composite developed using the Vita color scale. Easily perform anatomical shaping with Herculite Classic. The proven clinical efficacy of Herculite Classic for over 15 years, its long-lasting aesthetic results and excellent wear rates are a testament to the reliability and durability of the composite.',
    images: [
      'kerr-herculite.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'Revolution',
    description: 'Revolution fluoride releasing flowable light-cured hybrid composite for dental restorations. Revolution dental composite is strong yet flexible and provides a balanced surface finsih.',
    images: [
      'kerr-revolution.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'Dyad™ Flow',
    description: 'Dyad™ Flow, the first self-adhering composite powered by OptiBond™, greatly simplifies your direct restorative procedures by incorporating a bonding agent into a flowable. So, no need to bond separately. Fewer steps saves you time.',
    images: [
      'kerr-dyad-flow.png'
    ]
  },
  {
    brand: 'Kerr',
    name: 'Harmonize™',
    description: 'Meet the next generation of nanohybrid universal composites—Harmonize. Infused with Adaptive Response Technology, Harmonize helps you achieve lifelike restorations with more ease and simplicity than ever before.',
    images: [
      'kerr-harmonize.png',
      'kerr-harmonize_2.png',
      'kerr-harmonize_3.png',
      'kerr-harmonize_4.png',
      'kerr-harmonize_5.png',
      'kerr-harmonize_6.png'
    ]
  }
]
</script>
<template>
  <section class="max-w-7xl mx-auto py-24 sm:py-32">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-0">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-lg font-semibold leading-7 text-secondary">
            {{ $t('solution.subtitle') }}
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {{ $t('solution.title') }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ $t('solution.description') }}
            <NuxtLink class="underline text-primary font-medium lowercase" :to="localePath('/contact', locale)">
              {{ $t('solution.contact_btn') }}
            </NuxtLink>.
          </p>
        </div>
      </div>
      <div class="mt-6 px-3 md:px-0 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-6 lg:gap-x-8">
        <div v-for="(product, idx) in products" :key="idx" class="flex flex-col group relative rounded-lg overflow-hidden p-1 bg-slate-100 shadow-md">
          <div class="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <img :src="`/products/${product.images[0]}`" loading="lazy" :alt="product.name" class="h-full w-full object-cover object-center">
          </div>
          <div class="grow px-3 mt-4">
            <div class="font-bold md:text-lg text-primary !leading-none">
              {{ product.brand }}
            </div>
            <h3 class="text-lg md:text-xl font-semibold">
              {{ product.name }}
            </h3>
            <p class="mt-3 text">
              {{ product.description }}
            </p>
          </div>
          <div class="flex gap-3 mt-4 pb-4 px-3">
            <NuxtLink target="_blank" rel="nofollow noopener" class="inline-flex flex-center px-3 py-2 text-sm font-semibold leading-5 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" :to="brochureLink">
              <i class="i-ph-file-pdf w-6 h-6 inline-block text-white" />
              <span class="ml-2">E-Brochure</span>
            </NuxtLink>
            <NuxtLink :to="generateWaURL(`${product.brand} - ${product.name}`)" target="_blank" class="inline-flex flex-center px-3 py-1.5 text-sm font-medium leading-5 text-secondary border-2 border-secondary rounded-md focus:outline-none">
              <i class="i-ph-whatsapp-logo w-6 h-6 inline-block text-secondary" />
              <span class="ml-2">{{ $t('solution.contact_btn') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white py-24 sm:py-32">
    <DentalTestimonials />
  </section>
</template>
