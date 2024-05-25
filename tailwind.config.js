/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-section": "linear-gradient(90deg, #4c418f 66%, #ed779a 66%)",
      },
    },
    backgroundColor: {
      white: "#ffffff",
      gray: "f9f9f9",
      "primary-light": "#f7c6d5",
      secondary: "#4c418f",
    },
    borderColor: {
      white: "ffffff",
      "pink-light": "#f7c6d5",
    },
    textColor: {
      primary: "#ed779a",
      secondary: "#4c418f",
      gray: "#b4afd0",
      white: "#ffffff",
    },
    fontSize: {
      "body-1": [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "300",
          letterSpacing: "1px"
        },
      ],
      "body-2": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
    },
    colors: {
      "primary-100": "#f7c6d5",
      "primary-200": "#f4acc1",
      "primary-300": "#f191ae",
      "primary-400": "#ed779a",
      "secondary-100": "#b4afd0",
      "secondary-200": "#918bba",
      "secondary-300": "#6f66a5",
      "secondary-400": "#4c418f",
      "neutral-100": "#ffffff",
      "neutral-200": "#f9f9f9",
      "neutral-300": "#e9e9e9",
      "neutral-400": "#dadada",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: "64px",
          lineHeight: "70px",
          letterSpacing: "-1.901px",
          fontWeight: "700",
        },
        h2: {
          fontSize: "46px",
          lineHeight: "50px",
          letterSpacing: "-1.3px",
          fontWeight: "700",
        },
      });
    }),
  ],
};
