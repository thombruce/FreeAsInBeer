/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      { light: { ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"] } },
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=halloween]"] }
      }
    ]
  }
}

