/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#5C6BC0",
        "light-orange": "#FFB74D",
        "light-gray": "#E0E0E0"
      },
      fontFamily: {
        "courier-prime": ['Courier Prime', "monospace"]
      },
      height: {
        "1/10": "10%",
        "9/10": "90%"
      }
    },
  },
  plugins: [],
}

