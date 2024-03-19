import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#224884",
      "secondary-teal": "#00C3CD",
      "secondary-blue": "#0FCBFF",
      "secondary-pink": "#FF969F",
      dark: "#343331",
      light: "#D9D9D9",
      white: "#FFFCF4",
    },
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
