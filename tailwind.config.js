/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nabla': ['Nabla'],
        'open-sans': ['Open Sans'],
        'montserrat': ['Montserrat'],
      },
      colors: {
        'black-blue': '#000A11',
      },
    },
  },
  plugins: [],
}
