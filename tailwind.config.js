/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

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
    screens: {
      xs: "0px",
      ...defaultTheme.screens,
    },
    borderColor: {
      white: "var(--color-white)",
      "pink-light": "var(--color-primary-light)",
      "secondary-100": "var(--color-secondary-100)",
    },
    textColor: {
      primary: "var(--color-primary-400)",
      secondary: "var(--color-secondary-400)",
      gray: "var(--color-secondary-100)",
      white: "var(--color-white)",
    },
    fontSize: {
      h1: [
        "64px",
        {
          lineHeight: "70px",
          letterSpacing: "-1.9px",
          fontWeight: 700,
        },
      ],
      h2: [
        "46px",
        {
          lineHeight: "50px",
          fontWeight: 700,
        },
      ],
      "body-1": [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "300",
          letterSpacing: "1px",
        },
      ],
      "body-2": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      label: [
        "12px",
        {
          lineHeight: "19px",
          fontWeight: "300",
        },
      ],
      "h1-mb": [
        "42px", 
        {
          lineHeight: "46px",
          letterSpacing: "-1.2px",
          fontWeight: 700
        }
      ],
      "h2-mb": [
        "36px", 
        {
          lineHeight: "40px",
          letterSpacing: "-1px",
          fontWeight: 700
        }
      ],
      "body-1-mb": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: 300,
        },
      ],
      "body-2-mb": [
        "16px",
        {
          ineHeight: "20px",
          fontWeight: 300,
        },
      ],
    },
    colors: {
      "primary-100": "var(--color-primary-100)",
      "primary-200": "var(--color-primary-200)",
      "primary-300": "var(--color-primary-300)",
      "primary-400": "var(--color-primary-400)",
      "secondary-100": "var(--color-secondary-100)",
      "secondary-200": "var(--color-secondary-200)",
      "secondary-300": "var(--color-secondary-300)",
      "secondary-400": "var(--color-secondary-400)",
      "neutral-100": "var(--color-neutral-100)",
      "neutral-200": "var(--color-neutral-200)",
      "neutral-300": "var(--color-neutral-300)",
      "neutral-400": "var(--color-neutral-400)",
      white: "var(--color-white)",
      gray: "var(--color-gray)",
      "primary-light": "var(--color-primary-light)",
      secondary: "var(--color-secondary)",
      "dark-400": "var(--color-dark-400)",
    },
  },
  plugins: [
    // plugin(function ({ addBase }) {
    //   addBase({
    //     h1: {
    //       fontSize: "64px",
    //       lineHeight: "70px",
    //       letterSpacing: "-1.901px",
    //       fontWeight: "700",
    //     },
    //     h2: {
    //       fontSize: "46px",
    //       lineHeight: "50px",
    //       fontWeight: "700",
    //     },
    //   });
    // }),
  ],
};
