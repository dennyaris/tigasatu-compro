import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#1e4388',
      secondary: '#b02930',
      'blue-light': '#eaf3ff',
      'gray-ash': '#edf4f9'
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
      heading: ['Barlow', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
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
    container: 'max-w-7xl mx-auto px-3 sm:px-4 lg:px-6',
    'form-input': 'block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
  }
})
