<template>
  <section class="py-20 lg:pb-60">
    <div class="container">
      <ContentDoc v-slot="{ doc }: { doc: CareerParsedContent }" :query="{ locale }" :path="path">
        <div>
          <div class="flex border-b-2 border-primary pb-10">
            <img class="h-12 lg:h-24 shrink-0 aspect-square" src="/android-chrome-192x192.png">
            <div class="grow md:pl-4 lg:pl-6">
              <h1 class="text-3xl font-semibold mb-3">
                {{ doc.title }}
              </h1>
              <div class="flex items-center mb-2">
                <i class="i-ph-map-pin w-6 h-6 mr-4 block" />
                <span property="jobLocation" class="font-semibold">{{ doc.jobLocation }}</span>
              </div>
              <div class="flex items-center">
                <i class="i-ph-briefcase w-6 h-6 mr-4 block" />
                <div>
                  <span property="jobLocationType" class="label bg-primary capitalize">{{ doc.jobLocationType }}</span> &bull; <span property="employmentType" class="label bg-secondary capitalize">{{ doc.employmentType }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-2 flex gap-y-6 flex-col lg:flex-row">
            <ContentRenderer id="content" :value="doc" class="grow pr-4 text-lg" />
            <div class="md:min-w-sm bg-blue-light px-4 py-6 rounded-lg">
              <h2 class="text-xl font-bold mb-6">
                How to Apply
              </h2>
              <p>
                Please send your CV by email to <a href="mailto:info@tigasatumedika.com" class="text-primary font-semibold">info@tigasatumedika.com</a>
              </p>
              <p class="mt-6 font-bold">
                Subject:
              </p>
              <p class="font-medium">
                Application for {{ doc.title }} - [YOUR_NAME]
              </p>
            </div>
          </div>
        </div>
      </ContentDoc>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CareerParsedContent } from '~/types/career'
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const path = `/career/${route.params.slug}`
</script>
<style lang="postcss">
#content {
  h2, h3, h4 {
    @apply mt-6 mb-4;
  }

  h2 {
    @apply text-xl font-bold;
  }

  h3 {
    @apply text-lg font-semibold;
  }

  h4 {
    @apply text-base font-bold;
  }

  ul {
    @apply list-disc list-inside;
  }

  ol {
    @apply list-decimal list-inside;
  }

  p {
    @apply mb-4;
  }

  img {
    @apply w-full h-auto mb-4;
  }
}
</style>
