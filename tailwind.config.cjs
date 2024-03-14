/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: "1rem",
      "@screen xl": {
        padding: "2rem",
      },
    },
    extend: {
      colors: {
        red: "#FF0029",
        luckypoint: "#293459",
        bastille: "#2B2B35",
        nero: "#1E1E1E",
      },
      screens: {
        xs: "375px",
        "3xl": "1800px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen 3xl": {
            maxWidth: "1800px",
          },
        },
      });
    },
  ],
};
