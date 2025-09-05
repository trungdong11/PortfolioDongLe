/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          light: '#60A5FA',   // blue-400
          dark: '#1E40AF',    // blue-900
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient, .bg-gradient': {
          background: 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
      })
    }
  ],
}
