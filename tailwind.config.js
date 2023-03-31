/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors:{
      primary: {
        light: "#a68f48"
      },
      base: {
        light: "#FDFDFD",
        dark: "#1F2937"
      }
    },
    backgroundImage:{
      "main-banner": "url(../assets/images/placeholders/32_9.svg)"
    }
  },
  plugins: [],
}
