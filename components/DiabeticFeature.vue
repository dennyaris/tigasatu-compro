<template>
  <div class="bg-white pt-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-lg font-semibold leading-7 text-secondary">
          {{ $t('diabetic.why.label') }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {{ $t('diabetic.why.title') }}
        </p>
        <p class="mt-6 text-xl leading-8 text-gray-600">
          {{ $t('diabetic.why.subtitle') }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in $tm('diabetic.features')" :key="feature.name" class="flex flex-col bg-slate-100 py-4 px-3 rounded-xl drop-shadow">
            <div class="flex gap-3 items-center">
              <div class="w-24 shrink-0">
                <img :src="$rt(feature.image)" :alt="$rt(feature.name)">
              </div>
              <dt class="grow mt-2 flex items-center gap-x-3 text-2xl font-bold leading-7 text-primary-900">
                {{ $rt(feature.name) }}
              </dt>
            </div>
            <dd class="mt-8 flex flex-auto flex-col text-lg leading-7 text-gray-600">
              <p class="flex-auto">
                {{ $rt(feature.description) }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'After Sales Service',
    description:
      'Our dedicated insulin pump support team is always ready to visit in case of any issues with your insulin pump. We provide comprehensive assistance, troubleshooting, and guidance to ensure your device functions optimally for effective diabetes management.',
    image: '/images/technical-support.png'
  },
  {
    name: 'WhatsApp Call Center',
    description:
      'Accessible call center services for any inquiries or concerns. Contact us via WhatsApp for prompt and personalized assistance with your diabetes care questions, product information, or any other support you might need.',
    image: '/images/customer-service.png'
  },
  {
    name: 'Fast Delivery',
    description:
      'Reliable and secure packaging and delivery services. We ensure your diabetes care products are delivered swiftly and safely, maintaining the highest standards of care from our facility to your doorstep.',
    image: '/images/delivery.png'
  }
]

// const features = [
//   {
//     name: 'After Sales Service',
//     description:
//       'Tim dukungan pompa insulin kami yang berdedikasi selalu siap mengunjungi apabila terdapat masalah dengan pompa insulin Anda. Kami menyediakan bantuan komprehensif, pemecahan masalah, dan panduan untuk memastikan perangkat Anda berfungsi secara optimal untuk pengelolaan diabetes yang efektif.',
//     href: '#'
//   },
//   {
//     name: 'WhatsApp Call Center',
//     description:
//       'Layanan call center yang mudah diakses untuk setiap pertanyaan atau kekhawatiran. Hubungi kami melalui WhatsApp untuk bantuan cepat dan personal dengan pertanyaan perawatan diabetes Anda, informasi produk, atau dukungan lain yang mungkin Anda butuhkan.',
//     href: '#'
//   },
//   {
//     name: 'Fast Delivery',
//     description:
//       'Layanan pengemasan dan pengiriman yang aman dan terpercaya. Kami memastikan produk perawatan diabetes Anda dikirim dengan cepat dan aman, menjaga standar perawatan tertinggi dari fasilitas kami ke depan pintu Anda.',
//     href: '#'
//   }
// ]

</script>
