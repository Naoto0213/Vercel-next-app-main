const colors = require(`tailwindcss/colors`);
module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: { colors: { lime: colors.lime } } },
  variants: {
    extend: {},
  },
  plugins: [],
};
