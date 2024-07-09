/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#0C0C0C",
        mainButton : "#121212",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"]
      },
      colors: {
        second: "#DADADA"
      },
      borderColor: {
        main : "#242424"
      }
    },
  },
  plugins: [],
}

