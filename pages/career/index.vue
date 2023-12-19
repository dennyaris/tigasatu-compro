<template>
  <section class="py-20 lg:pb-60">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between pb-4 mb-12 gap-y-4">
        <div>
          <div class="relative">
            <label for="name" class="absolute -top-3 left-2 inline-block bg-gray-100 rounded-t px-1 text-sm font-medium text-gray-900">Title</label>
            <input
              id="name"
              v-model="title"
              type="text"
              name="name"
              class="block min-w-xs w-full rounded-md border-0 py-2 px-3 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Sales, Operation, etc"
            >
          </div>
        </div>
        <PopoverGroup class="-mx-4 flex items-center divide-x divide-gray-200">
          <Popover v-for="section in filters" :key="section.name" class="relative inline-block px-4 text-left">
            <PopoverButton class="group inline-flex justify-center font-medium text-gray-700 hover:text-gray-900">
              <span class="text-sm md:text-base">{{ section.name }}</span>
              <i class="i-mdi-chevron-down -mr-1 ml-1 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <PopoverPanel class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <form class="space-y-4">
                  <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                    <input
                      :id="`filter-${section.id}-${optionIdx}`"
                      v-model="option.checked"
                      :name="`${section.id}[]`"
                      :value="option.value"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    >
                    <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">{{ option.label }}</label>
                  </div>
                </form>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
      </div>
      <div v-for="job in data" :key="job._path" vocab="https://schema.org/" typeof="JobPosting" class="jobItem">
        <img class="hidden md:block h-20 shrink-0 aspect-square" src="/android-chrome-192x192.png">
        <div class="grow md:pl-6">
          <div class="mb-4">
            <div class="relative inline pr-2">
              <NuxtLink class="inline" :to="localePath(job._path as string, locale)">
                <h2 property="title" class="inline font-semibold text-xl md:text-2xl hover:underline">
                  {{ job.title }}
                </h2>
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center mb-2">
            <i class="i-ph-map-pin w-5 h-5 mr-2 block" />
            <span property="jobLocation" class="font-semibold">{{ job.jobLocation }}</span>
          </div>
          <div class="flex items-center">
            <i class="i-ph-briefcase w-5 h-5 mr-2 block" />
            <div>
              <span property="jobLocationType" class="label capitalize bg-primary">{{ job.jobLocationType }}</span> &bull; <span property="employmentType" class="label capitalize bg-secondary">{{ job.employmentType }}</span>
            </div>
          </div>
          <p class="max-w-4xl mt-4 text-lg" itemprop="description">
            {{ job.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import type { CareerParsedContent } from '~/types/career'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const jobLocationTypeFilter = [
  {
    label: 'Remote',
    value: 'remote',
    checked: false
  },
  {
    label: 'On-site',
    value: 'on-site',
    checked: false
  },
  {
    label: 'Hybrid',
    value: 'hybrid',
    checked: false
  }
]

const departmentsFilter = [
  {
    label: 'Cardio',
    value: 'cardio',
    checked: false
  },
  {
    label: 'Diabetic',
    value: 'diabetic',
    checked: false
  },
  {
    label: 'Dental',
    value: 'dental',
    checked: false
  },
  {
    label: 'Technology',
    value: 'technology',
    checked: false
  }
]

const employmentTypeFilter = [
  {
    label: 'Full-time',
    value: 'full-time',
    checked: false
  },
  {
    label: 'Part-time',
    value: 'part-time',
    checked: false
  },
  {
    label: 'Contract',
    value: 'contract',
    checked: false
  },
  {
    label: 'Internship',
    value: 'internship',
    checked: false
  }
]

const title = ref('')
const filters = reactive([
  {
    id: 'employmentUnit',
    name: 'Department',
    options: departmentsFilter
  },
  {
    id: 'employmentType',
    name: 'Type',
    options: employmentTypeFilter
  },
  {
    id: 'jobLocationType',
    name: 'Workplace',
    options: jobLocationTypeFilter
  }
])

const checkedDepartments = computed(() => {
  const departmentFilter = filters.find(filter => filter.id === 'employmentUnit')
  return departmentFilter
    ? departmentFilter.options.filter(option => option.checked).map(option => option.value)
    : []
})

const checkedEmploymentTypes = computed(() => {
  const employmentTypeFilter = filters.find(filter => filter.id === 'employmentType')
  return employmentTypeFilter
    ? employmentTypeFilter.options.filter(option => option.checked).map(option => option.value)
    : []
})

const checkedWorkplaces = computed(() => {
  const jobLocationTypeFilter = filters.find(filter => filter.id === 'jobLocationType')
  return jobLocationTypeFilter
    ? jobLocationTypeFilter.options.filter(option => option.checked).map(option => option.value)
    : []
})

watch([checkedDepartments, checkedEmploymentTypes, checkedWorkplaces], () => {
  refresh()
})

watchDebounced(
  title,
  () => { refresh() },
  { debounce: 500, maxWait: 1000 }
)

const { data, refresh } = await useAsyncData(
  'jobs',
  () => {
    let query = queryContent<CareerParsedContent>('career').locale(locale.value)

    if (title.value.trim() !== '') {
      const pattern = new RegExp('\\b' + title.value.split(' ').join('\\b.*\\b'), 'i')
      query = query.where({ title: pattern })
    }

    if (checkedEmploymentTypes.value.length > 0) {
      query = query.where({ employmentType: { $in: checkedEmploymentTypes.value } })
    }

    if (checkedDepartments.value.length > 0) {
      query = query.where({ employmentUnit: { $in: checkedDepartments.value } })
    }

    if (checkedWorkplaces.value.length > 0) {
      query = query.where({ jobLocationType: { $in: checkedWorkplaces.value } })
    }

    return query.find()
  },
  {
    deep: false
  }
)

useSeoMeta({
  title: t('career.title'),
  description: t('career.subtitle')
})
</script>
<style lang="postcss" scoped>
.jobItem {
  @apply flex py-4 px-4 lg:py-8 lg:px-8;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    @apply bg-blue-light;
  }

  &:nth-child(even) {
    @apply bg-slate-50;
  }
}
</style>
