/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['"Source Serif 4"', 'serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'Marko': ['"Marko One"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}