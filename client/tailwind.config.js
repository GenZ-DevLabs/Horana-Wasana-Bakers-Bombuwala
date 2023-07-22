/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2b2b",
        secondary: "#e6e6fa",
        whatsappButton: "#00DA5F",
      },
      width: {
        20: "3rem",
        60: "10rem",
        62: "11rem",
        72: "16rem",
        80: "19rem",
        90: "23rem",
        128: "33rem",
      },
      height: {
        20: "3rem",
        60: "10rem",
        62: "11rem",
        72: "16rem",
        80: "19rem",
        90: "23rem",
        128: "33rem",
      },
    },
  },
  plugins: [],
};
