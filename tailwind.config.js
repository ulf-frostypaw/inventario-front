/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A0E4',
        secondary: '#000000',
        daikinBlack: "#231F20",
        gray: '#eeeeee',
      },
    },
  },
  plugins: [],
}