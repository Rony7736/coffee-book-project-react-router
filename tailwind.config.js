/** @type {import('tailwindcss').Config} */

// import koreo daisy ui sue kora jay
// import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  // import kore ei vabe likhte hoy
  // plugins: [daisyui],
}

