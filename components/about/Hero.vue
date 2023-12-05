<template>
  <section id="hero" class="grid grid-cols-1 lg:grid-cols-2">
    <div class="relative">
      <img class="object-cover min-w-full min-h-full brightness-60" src="/images/teamwork.jpg" alt="hero">
      <div class="absolute top-1/2 -translate-y-1/2">
        <div class="bg-black/60 mx-6 lg:mx-12 py-8 lg:py-12 px-6 lg:px-8 rounded-2xl">
          <h1 class="text-2xl lg:text-4xl xl:text-6xl text-white font-bold">
            {{ $t('about.hero.title') }}
          </h1>
        </div>
      </div>
    </div>
    <div class="flex items-center f aspect-square py-20 px-12">
      <div class="relative ggwp text-lg md:text-2xl bg-blue-light px-8 py-10 rounded-2xl shadow">
        <p v-for="(p, i) in $tm('about.hero.paragraphs')" :key="i" class="paragraph">
          {{ $rt(p) }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
#hero .paragraph {
  @apply leading-normal font-normal;

  & + & {
    @apply mt-8;
  }
}

.ggwp::after {
  @apply rounded-2xl bg-primary;
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  z-index: -1;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  transform: rotate(4deg);
}
.ggwp::before {
  @apply rounded-2xl bg-secondary;
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  z-index: -1;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  transform: rotate(-4deg);
}
</style>
