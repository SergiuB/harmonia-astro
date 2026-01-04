import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#446260",
      secondary: "#876959",
      dark: "#3b3b3b",
      light: "#dad9ca",
      white: "#FFFCF4",
    },
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
