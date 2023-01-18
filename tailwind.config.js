/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bnb-pink": "#E94C60",
      },
      backgroundColor: {
        "bnb-pink": "#E94C60",
      },
      width: {
        88: "22rem",
      },
      height: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
