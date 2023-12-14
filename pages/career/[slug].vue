<template>
  <section class="py-20 lg:pb-60">
    <div class="container">
      <ContentDoc v-slot="{ doc }" :query="{ locale }" :path="path">
        <div>
          <h1 class="text-3xl font-semibold">
            {{ doc.title }}
          </h1>
          <ContentRenderer id="content" :value="doc" />
        </div>
      </ContentDoc>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const path = `/career/${route.params.slug}`
</script>
<style>
#content h1, #content h2, #content h3, #content h4 {
  @apply mt-6 mb-3;
}
#content h2 {
  @apply text-xl font-bold;
}
#content h3 {
  @apply text-lg font-semibold;
}
#content h4 {
  @apply text-base font-bold;
}
#content ul {
  @apply list-disc list-inside;
}
#content p {
  @apply mb-3;
}
</style>
