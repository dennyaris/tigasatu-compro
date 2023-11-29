import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#1e4388',
      secondary: '#b02930',
      'blue-light': '#eaf3ff'
    },
    width: {
      fit: 'fit-content'
    },
    borderRadius: {
      '4xl': '2rem',
      '6xl': '3rem',
      '8xl': '4rem'
    },
    lineHeight: {
      extreme: '1.125'
    },
    fontFamily: {
      sans: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      mono: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  shortcuts: {
    container: 'max-w-7xl mx-auto px-3 sm:px-4 lg:px-6'
  }
})
