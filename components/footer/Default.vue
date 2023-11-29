<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const copyrightLinkClass = 'hover:underline'
const socialLinkClass = 'flex items-center w-10 h-10'
const socialIconClass = 'w-8 h-8 text-secondary'
const btnCTAClass = 'inline-block border-2 border-secondary py-2 px-8 rounded-full text-center sm:text-left'
</script>
<template>
  <footer class="relative">
    <div class="container overflow-hidden lg:translate-y-1/2 flex justify-between bg-slate-100 lg:h-60 rounded-2xl">
      <div class="flex items-center py-12 px-8">
        <div class="grow">
          <h2 class="text-xl md:text-3xl font-semibold mb-2">
            {{ $t('footer.cta.title') }}
          </h2>
          <p class="text-base md:text-lg max-w-3xl !leading-snug tracking-wide">
            {{ $t('footer.cta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 lg:gap-6 mt-6">
            <NuxtLink :class="btnCTAClass" class="text-white bg-secondary" :to="localePath('/contact', locale)">
              {{ $t('footer.cta.btnContact') }}
            </NuxtLink>
            <NuxtLink :class="btnCTAClass" class="text-secondary" :to="localePath('/career', locale)">
              {{ $t('footer.cta.btnCareer') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden sm:block shrink-0">
        <img class="h-full h-auto" src="/images/footer-doctor-cta.png" alt="Doctor Footer CTA">
      </div>
    </div>
    <div class="widget bg-primary text-white tracking-wide pb-14 pt-14 lg:pt-44">
      <div class="container flex gap-y-14 flex-col lg:flex-row justify-between">
        <div class="flex flex-col gap-4 lg:max-w-md">
          <img class="h-8 mb-3 snow-white object-contain w-fit" src="/images/logo-tigasatu.png" alt="Logo Tigasatu Medika Pratama">
          <p class="font-semibold text-lg">
            PT Tigasatu Medika Pratama
          </p>
          <p>
            Karawaci Office Park Blok G 36, Panunggangan Barat, Kec. Cibodas, Kota Tangerang, Banten 15811, Indonesia
          </p>
          <div class="mt-6">
            <div class="text-lg font-semibold tracking-normal mb-3">
              {{ $t('footer.also_here.title') }}
            </div>
            <div class="flex gap-4">
              <NuxtLink to="https://shopee.co.id/31medika" target="_blank" class="inline-flex bg-red-50 items-center rounded-lg border-3 border-[#F0582C] py-1 px-3">
                <img class="h-8 w-8 mr-2" src="images/shopee-square.png" alt="">
                <span class="text-lg font-semibold text-[#F0582C]">Shopee</span>
              </NuxtLink>
              <NuxtLink to="https://www.tokopedia.com/31medika" target="_blank" class="inline-flex bg-green-50 items-center rounded-lg border-3 border-[#5FBC54] py-1 px-3">
                <img class="h-8 w-8 mr-2" src="images/tokopedia-square.png" alt="">
                <span class="text-lg font-semibold text-[#5FBC54]">Tokopedia</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex gap-6 lg:gap-20">
          <div>
            <div class="text-lg font-semibold tracking-normal mb-4">
              {{ $t('footer.company_widget.title') }}
            </div>
            <div class="flex flex-col gap-3">
              <NuxtLink :to="localePath('/about', locale)">
                {{ $t('footer.company_widget.about') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contact', locale)">
                {{ $t('footer.company_widget.contact') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/career', locale)">
                {{ $t('footer.company_widget.career') }}
              </NuxtLink>
            </div>
          </div>
          <div class="max-w-md">
            <div class="widget">
              <div class="text-lg font-semibold tracking-normal mb-4">
                {{ $t('footer.connect_widget.title') }}
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
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
                <div class="flex items-center gap-4">
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
                <div class="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
    <div class="social py-2 lg:py-4">
      <div class="container flex justify-between items-center">
        <div>
          <LangSwitcher />
        </div>
        <div class="grid grid-cols-3 lg:flex flex-wrap items-center justify-end gap-x-2 md:gap-x-4">
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-youtube-logo-duotone" />
          </NuxtLink>
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-linkedin-logo-duotone" />
          </NuxtLink>
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-facebook-logo-duotone" />
          </NuxtLink>
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-twitter-logo-duotone" />
          </NuxtLink>
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-instagram-logo-duotone" />
          </NuxtLink>
          <NuxtLink :class="socialLinkClass" rel="nofollow">
            <span :class="socialIconClass" class="i-ph-tiktok-logo-duotone" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="copyright bg-primary text-white md:tracking-wide">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between py-6">
        <div class="flex justify-center md:items-center justify-start gap-x-6">
          <NuxtLink :to="localePath('/', locale)" :class="copyrightLinkClass">
            {{ $t('menu.privacy_policy') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/', locale)" :class="copyrightLinkClass">
            {{ $t('menu.terms_conditions') }}
          </NuxtLink>
        </div>
        <div class="flex justify-center items-center justify-end mt-4 sm:mt-0 text-sm md:text-base">
          <p>&copy; {{ new Date().getFullYear() }} PT Tigasatu Medika Pratama</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.snow-white {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}
</style>
