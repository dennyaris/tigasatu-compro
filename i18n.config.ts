import en from './locales/en.json'
import id from './locales/id.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    id
  },
  // Pastikan fungsi ini berjalan dengan baik
  onBeforeLanguageSwitch: (newLocale: string, _initialSetup: boolean, _context: unknown) => {
    return newLocale
  }
}))
