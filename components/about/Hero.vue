<template>
  <section class="grid grid-cols-1 lg:grid-cols-2">
    <div class="relative">
      <img class="object-cover min-w-full min-h-full brightness-60" src="/images/teamwork.jpg" alt="hero">
      <div class="absolute top-1/2 -translate-y-1/2">
        <div class="bg-black/60 mx-12 py-12 px-8 rounded-2xl">
          <h1 class="text-2xl lg:text-4xl xl:text-6xl text-white font-bold">
            Advancing Indonesian Healthcare with PT Tigasatu Medika Pratama
          </h1>
        </div>
      </div>
    </div>
    <div class="flex items-center aspect-square py-8 px-12">
      <div class="relative ggwp text-lg md:text-2xl bg-blue-light px-8 py-10 rounded-2xl shadow">
        <p class="mb-8 leading-normal font-medium">
          PT Tigasatu Medika Pratama is a fast growing company engaged in marketing, distribution, and sales of medical equipment. Established in 2017, PT Tigasatu Medika Pratama dedicated advancing the healthcare in Indonesia.
        </p>
        <p class="leading-normal font-medium">
          We are bridging medical equipment manufacturers with consumers all over Indonesia. We provide leading-edge services in the healthcare industry through strong partnerships, quality products, and excellent service to deliver the best quality to our customers.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.ggwp::after {
  @apply rounded-2xl bg-primary;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  transform: rotate(4deg);
}
.ggwp::before {
  @apply rounded-2xl bg-secondary;
  content: '';
  position: absolute;
  top: 0;
  left: -4px;
  z-index: -1;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  transform: rotate(-4deg);
}
</style>
