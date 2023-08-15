/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      { light: { ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"] } },
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=halloween]"] }
      }
    ]
  }
}

