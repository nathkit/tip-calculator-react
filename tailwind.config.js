/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'body-bg': '#c4e4e7',
      'green-dark': '#00474b',
      'green-active': '#7e5bef',
      'green-text-input': '#03393f',
      'green-hover': '#9ee8df',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    screens: {
      'tablet': '821px'
    },
    extend: {},
  },
  plugins: [],
}

