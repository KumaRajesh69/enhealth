/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to right, #2E72ED, #5B8DF0, #41B0F8, #5B8DF0, #2E72ED)",
        "welcome-bg": "url('/images/bgcard.svg')",
      },
    },
    fontFamily: {
      "serif-display": ["DM Serif Display", "serif"],
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
