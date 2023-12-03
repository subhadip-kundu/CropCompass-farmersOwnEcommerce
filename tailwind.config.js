/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider-background-image': "linear-gradient(rgba(220, 252, 231, 0.9), rgba(220, 252 ,231, 0.9)), url('../src/assets/GreenBackground.jpg')",
        'about-us-topsection-bg-img': "linear-gradient(rgba(252, 161, 3, 0.9), rgba(252, 161, 3, 0.9)), url('../src/assets/Vegitable_background.jpg')"
      }
    },
    fontFamily: {
      'Rubik': ['"Rubik"']
    },
  },
  plugins: [],
}

