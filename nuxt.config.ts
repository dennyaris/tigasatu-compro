import { transformerDirectives } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://tigasatumedika.com',
    name: 'Tigasatumedika'
  },
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
  runtimeConfig: {
    public: {
      version: process.env.TAG_VERSION || '0.0.0'
    }
  },
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
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
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ],
    autoLastmod: false
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
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  nitro: {
    output: process.env.APP_ENV === 'production'
      ? {
          dir: '.prod',
          serverDir: '.prod/server',
          publicDir: '.prod/public'
        }
      : undefined
  }
})
