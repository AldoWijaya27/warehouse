module.exports = {
  purge: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#9DC4FF",
        secondary: "#F3F8FF",
        textColor: "#181923",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
