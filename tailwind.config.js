/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,js,ts}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,js,ts}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,js,ts}",
    "./components/Hero.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

