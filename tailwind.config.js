/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2",
        secondary: "#ad00ff",
        background: "#212121",
        background_2: "#22303c",
        text_color: "#fff",
        nav_active: "#2121215e",
        nav_toggle_color: "#121212",
      },
    },
  },
  plugins: [],
};
