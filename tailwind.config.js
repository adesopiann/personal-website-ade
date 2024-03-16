/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","contact.html"],
  theme: {
    container: {
      padding: "16px",
      margin: "2rem"
    },

    extend: {
      colors: {
        primary: "#00AFB9",
        secondary: "#F07167",
      },
    },
  },
  plugins: [],
};

