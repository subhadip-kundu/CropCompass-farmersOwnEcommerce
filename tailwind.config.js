/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "linear-gradient(rgba(220, 252, 231, 0.9), rgba(220, 252 ,231, 0.9)), url('../src/assets/GreenBackground.jpg')"
      }
    },
    fontFamily: {
      'Rubik': ['"Rubik"']
    },
  },
  plugins: [],
}

