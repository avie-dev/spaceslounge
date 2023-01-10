/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2",
        secondary: "#ad00ff",
        background: "#15202B",
        background_2: "#22303c",
        nav_active: "#2121215e",
        nav_toggle_color: "#121212",
      },
    },
  },
  plugins: [],
};
