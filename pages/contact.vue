<script setup lang="ts">
const contactLabelClass = 'block text-sm font-medium leading-6 text-gray-900'

const mapSection = ref(null)
const mapIsVisible = ref(false)

useIntersectionObserver(mapSection, ([{ isIntersecting }]) => {
  setVisibleOnce(isIntersecting)
})

const setVisibleOnce = (isIntersecting: boolean) => {
  if (isIntersecting === true && mapIsVisible.value === false) {
    mapIsVisible.value = true
  }
}
</script>

<template>
  <div class="py-20">
    <h1>Contact Us</h1>
  </div>
  <div class="min-h-250" />
  <section ref="mapSection">
    <div class="container">
      <h2 class="text-4xl font-bold mb-8">
        View Our Location Here
      </h2>
    </div>
    <LazyContactIframeMap v-if="mapIsVisible" />
  </section>
  <section class="bg-slate-50 py-20 lg:pb-48">
    <div class="container">
      <div class="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow">
        <div class="flex flex-col py-20 px-12 md:max-w-1/2 bg-blue-light">
          <img class="h-8 mb-10 snow-white object-contain w-fit" src="/images/logo-tigasatu.png" alt="Logo Tigasatu Medika Pratama">
          <p class="font-semibold text-lg mb-4">
            PT Tigasatu Medika Pratama
          </p>
          <p class="tracking-wide">
            Karawaci Office Park Blok G 36, Panunggangan Barat, Kec. Cibodas, Kota Tangerang, Banten 15811, Indonesia
          </p>
          <div class="mt-10 flex flex-col gap-8">
            <div class="flex items-center gap-6">
              <span class="rounded-full w-10 h-10 bg-blue-100 flex items-center justify-center">
                <i class="text-primary i-ph-envelope w-6 h-6 shrink-0" />
              </span>
              <div>
                <p>
                  Email
                </p>
                <p class="font-semibold">
                  help@tigasatu.id
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
              <label for="first-name" :class="contactLabelClass">First name</label>
              <div class="mt-2">
                <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="form-input">
              </div>
            </div>
            <div class="sm:col-span-3">
              <label for="last-name" :class="contactLabelClass">Last name</label>
              <div class="mt-2">
                <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="form-input">
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="company" :class="contactLabelClass">Company / Organization</label>
              <div class="mt-2">
                <input id="company" type="text" name="company" autocomplete="organization" class="form-input">
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="email" :class="contactLabelClass">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="form-input">
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="comment" :class="contactLabelClass">Add your comment</label>
              <div class="mt-2">
                <textarea id="comment" rows="4" name="comment" class="form-input" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <button type="submit" class="inline-flex items-center justify-center w-full rounded-md border border-transparent py-2 px-4 text-base leading-6 font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:border-primary-dark focus:shadow-outline-primary transition duration-150 ease-in-out">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
