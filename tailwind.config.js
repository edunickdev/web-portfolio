const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#134B73",
        lightblue: "#E6F2FB",
        midblue: "#71B7E9",
        lightgray: "#D9D9D9",
      },
      fontFamily: {
        k2dR: ["K2D-Regular", "sans-serif"],
        k2dM: ["K2D-Medium", "sans-serif"],
        k2dB: ["K2D-Bold", "sans-serif"],
        k2dSB: ["K2D-SemiBold", "sans-serif"],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
