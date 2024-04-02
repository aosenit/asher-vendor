/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "11px",
        sm: "12px",
        base: "15px",
        lg: "18px",
        xl: "20px",
        "2xl": "26px",
        "3xl": "32px",
      },
      colors: {
        primary: {
          base: "#B80238",
        },
      },

      fontFamily: {
        exoLight: "exoLight",
        exoMedium: "exoMedium",
        exoBold: "exoBold",
      },

      padding: {
        Layout: "0 20px",
      },

      margin: {
        Layout: "0 20px",
      },
    },
  },
  plugins: [],
};
