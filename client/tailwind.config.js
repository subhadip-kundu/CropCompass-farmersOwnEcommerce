/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-us-topsection-bg-img":
          "linear-gradient(#15183f, #145b7b), url('../src/assets/Vegitable_background.jpg')",
      },
      animation: {
        "spin-once": "spin-once 3s ease-in-out 1",
      },
      keyframes: {
        "spin-once": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      fontFamily: {
        Rubik: ['"Rubik"'],
      },
    },
    plugins: [],
  },
};
