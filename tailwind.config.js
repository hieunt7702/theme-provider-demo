/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['MyFont', 'ui-sans-serif', 'system-ui'],
        comic: ['ComicFont', 'cursive'],
        cherry: ['cherry'],
        vtv323: ['vt323'],
      },
      boxShadow: {
        'custom-11': '0px 4px 14px 0px rgba(0, 0, 0, 0.11)',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'scale(2.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        ripple: 'ripple 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

