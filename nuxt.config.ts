import { transformerDirectives } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased'
      }
    }
  },
  // debug: process.env.NODE_ENV !== 'production',
  debug: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  i18n: {
    debug: false,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'id', iso: 'id-ID', file: 'id.json' }
    ],
    lazy: false,
    langDir: 'locales/'
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Inter: [600, 700],
      Barlow: [700]
    },
    preconnect: true,
    prefetch: true
  },
  unocss: {
    preflight: true,
    attributify: true,
    icons: true,
    transformers: [
      transformerDirectives()
    ]
  }
})
