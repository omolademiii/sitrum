/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        "bg-nav" : "#F5FFFA05"

      }
    },
  },
  plugins: [],
}

