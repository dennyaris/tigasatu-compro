import { transformerDirectives } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased'
      },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
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
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'nuxt-simple-sitemap',
    'nuxt-gtag'
  ],
  gtag: {
    id: process.env.NODE_ENV === 'production' ? process.env.GTAG_ID : undefined
  },
  content: {
    locales: ['en', 'id'],
    defaultLocale: 'en'
  },
  i18n: {
    debug: false,
    compilation: {
      strictMessage: false
    },
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'id', iso: 'id-ID', file: 'id.json' }
    ],
    lazy: false,
    langDir: 'locales/'
  },
  swiper: {
    modules: ['pagination', 'autoplay', 'free-mode', 'thumbs', 'navigation']
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
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
  },
  nitro: {
    output: process.env.NODE_ENV === 'production'
      ? {
          dir: '.prod',
          serverDir: '.prod/server',
          publicDir: '.prod/public'
        }
      : undefined
  }
})
