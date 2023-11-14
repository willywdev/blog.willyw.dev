import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      accent: "#06d6a0",
      comp: "#46cffa",
      ...colors,
    },
  },
  plugins: [],
};
