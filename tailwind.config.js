/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['MyFont', 'ui-sans-serif', 'system-ui'],
        comic: ['ComicFont', 'cursive'],
        cherry: ['cherry'],
      },
      boxShadow: {
        'custom-11': '0px 4px 14px 0px rgba(0, 0, 0, 0.11)',
      },
    },
  },
  plugins: [],
}

