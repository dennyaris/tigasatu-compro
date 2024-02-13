<script setup lang="ts">
import { FetchError } from 'ofetch'
import type { ValidationError } from '~/types/error'

const { t } = useI18n()
const { gtag } = useGtag()

const contactLabelClass = 'block text-base lg:text-lg font-medium leading-6 text-gray-900'

const mapSection = ref(null)
const mapIsVisible = ref(false)
const disableSubmitButton = ref(false)
const config = useRuntimeConfig()
const inputError = ref<ValidationError>({})
const response = ref<{ message: string } | null>(null)

const { hasError, firstError } = useValidationError(inputError)
const defaultData = {
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  comment: ''
}
const data = reactive({ ...defaultData })

const resetForm = () => {
  Object.assign(data, defaultData)
  inputError.value = {}
}

useIntersectionObserver(mapSection, ([{ isIntersecting }]) => {
  setVisibleOnce(isIntersecting)
})

const setVisibleOnce = (isIntersecting: boolean) => {
  if (isIntersecting === true && mapIsVisible.value === false) {
    mapIsVisible.value = true
  }
}

useSeoMeta({
  title: t('contact.title'),
  description: t('contact.description')
})

const handleSubmit = async () => {
  response.value = null
  disableSubmitButton.value = true

  try {
    const res = await $fetch<{ message: string}>('email/contact', {
      baseURL: config.public.apiBaseUrl,
      headers: {
        Accept: 'application/json'
      },
      method: 'POST',
      body: data
    })
    response.value = {
      message: res.message
    }
    gtag('event', 'contact_form', data)
    resetForm()
  } catch (error) {
    if (error instanceof FetchError) {
      if (error.response?.status === 422) {
        inputError.value = error.response._data?.errors || {}
      }
    } else {
      console.error(error)
    }
  } finally {
    disableSubmitButton.value = false
  }
}
</script>

<template>
  <section id="form" class="bg-slate-50 py-24">
    <div class="container">
      <div class="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow">
        <div class="flex flex-col py-20 px-12 md:max-w-1/2 bg-blue-light">
          <img class="h-12 mb-10 snow-white object-contain w-fit" src="/images/logo-tigasatu.png" alt="Logo Tigasatu Medika Pratama">
          <p class="font-semibold text-xl mb-4">
            PT Tigasatu Medika Pratama
          </p>
          <p class="tracking-wide">
            Karawaci Office Park Blok G 36, Panunggangan Barat, Kec. Cibodas, Kota Tangerang, Banten 15811, Indonesia
          </p>
          <div class="mt-10 flex flex-col gap-8 text-lg">
            <div class="flex items-center gap-6">
              <span class="rounded-full w-10 h-10 bg-blue-100 flex items-center justify-center">
                <i class="text-primary i-ph-envelope w-6 h-6 shrink-0" />
              </span>
              <div>
                <p>
                  Email
                </p>
                <p class="font-semibold">
                  info@tigasatumedika.com
                </p>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <span class="rounded-full w-10 h-10 bg-blue-100 flex items-center justify-center">
                <i class="text-primary i-ph-phone-call w-6 h-6 shrink-0" />
              </span>
              <div>
                <p>
                  Phone
                </p>
                <p class="font-semibold">
                  (+62) 21 5575 8298
                </p>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <span class="rounded-full w-10 h-10 bg-blue-100 flex items-center justify-center">
                <i class="text-primary i-ph-whatsapp-logo w-7 h-7 shrink-0" />
              </span>
              <div>
                <p>
                  Whatsapp
                </p>
                <p class="font-semibold">
                  (+62) 898 120 3131
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="py-20 px-10 grow">
          <form class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first_name" :class="contactLabelClass">First name</label>
              <div class="mt-2">
                <input
                  id="first_name"
                  v-model="data.first_name"
                  type="text"
                  name="first_name"
                  autocomplete="given-name"
                  class="form-input"
                  required
                >
                <InputErrorInfo :show="hasError('first_name')" :text="firstError('first_name')" />
              </div>
            </div>
            <div class="sm:col-span-3">
              <label for="last-name" :class="contactLabelClass">Last name</label>
              <div class="mt-2">
                <input
                  id="last-name"
                  v-model="data.last_name"
                  type="text"
                  name="last-name"
                  autocomplete="family-name"
                  class="form-input"
                  required
                >
                <InputErrorInfo :show="hasError('last_name')" :text="firstError('last_name')" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="company" :class="contactLabelClass">Company / Organization</label>
              <div class="mt-2">
                <input
                  id="company"
                  v-model="data.company"
                  type="text"
                  name="company"
                  autocomplete="organization"
                  class="form-input"
                  required
                >
                <InputErrorInfo :show="hasError('company')" :text="firstError('company')" />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="email" :class="contactLabelClass">Email address</label>
              <div class="mt-2">
                <input
                  id="email"
                  v-model="data.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="form-input"
                  required
                >
                <InputErrorInfo :show="hasError('email')" :text="firstError('email')" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="comment" :class="contactLabelClass">Add your comment</label>
              <div class="mt-2">
                <textarea
                  id="comment"
                  v-model="data.comment"
                  rows="4"
                  name="comment"
                  class="form-input"
                  required
                />
                <InputErrorInfo :show="hasError('comment')" :text="firstError('comment')" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <p v-if="response" class="text-success text-base mb-2 tracking-wide">
                {{ response.message }}
              </p>
              <button :disabled="disableSubmitButton" class="inline-flex items-center justify-center w-full rounded-md border border-transparent py-2 px-4 text-base leading-6 font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:border-primary-dark focus:shadow-outline-primary transition duration-150 ease-in-out" @click.prevent="handleSubmit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section ref="mapSection" class="py-24 lg:pb-48">
    <div class="container">
      <h2 class="text-heading mb-8">
        {{ $t('contact.map_title') }}
      </h2>
    </div>
    <LazyContactIframeMap v-if="mapIsVisible" />
  </section>
</template>
<style>
button:disabled {
  @apply !bg-opacity-50 cursor-not-allowed;
}
</style>
