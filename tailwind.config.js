/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "992px" },
        md: { max: "768px" },
        sm: { max: "576px" },
        min2xl: { min: "1535px" },
      },
      colors: {
        primary: "#1da1f2",
        secondary: "#ad00ff",
        background: "#212121",
        background_2: "#22303c",
        nav_active: "#2121215e",
        nav_toggle_color: "#121212",
      },
    },
  },
  plugins: [],
};
