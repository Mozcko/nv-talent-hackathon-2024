import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C587A",
        secondary: "#618AAF",
        tertiary: "#D4F4FF",
        accent: "#E49D22",
        "accent-100": "#009BF9",
        "accent-200":"#265399",
        "fill-100": "#AED6FE",
        "fill-200": "#4B628E",
        "fill-300": "#6D6B9E",
        "fill-400": "#9172A8",
        "fill-500": "#B479AD",
        "fill-600": "#D681AC",
        "black-100": "#3B4856",
        "black-200": "#9EADBD",
        "white-100": "#F0FAFF",
        "white-200": "#F2FAFF",
      },
    },
  },
  plugins: [flowbite],
};
