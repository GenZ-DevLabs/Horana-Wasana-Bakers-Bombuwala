/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2b2b",
        secondary: "#e6e6fa",
        pink: "#fca5a5",
        pink2: "#f5d0fe",
      },
    },
  },
  plugins: [],
};
