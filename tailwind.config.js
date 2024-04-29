// import { colors } from './src/assets/constants/colors' import colors

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    //insert colors imported
    extend: {},
  },
  plugins: [],
}