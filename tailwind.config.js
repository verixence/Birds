/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#D9885D",
        clay: "#F4E9D7",
        olive: "#A3B18A",
        charcoal: "#2E2E2E",
        softwhite: "#FAF8F4"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2rem"
        },
        screens: {
          "2xl": "1200px"
        }
      }
    }
  },
  plugins: []
};

