/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["IBM Plex Sans", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
      },
    },
    extend: {},
  },
  plugins: [],
};
