/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-us-topsection-bg-img': "linear-gradient(#15183f, #145b7b), url('../src/assets/Vegitable_background.jpg')"
      }
    },
    fontFamily: {
      'Rubik': ['"Rubik"']
    },
  },
  plugins: [],
}

