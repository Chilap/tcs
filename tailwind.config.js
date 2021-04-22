module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      primary: "#f2efe4",
      green: '#236b66',
      lightgreen: "#26ae61",
      red: "#de2910",
      lightred: "#da615c",
      gray: "#333333",
      black: "#000000",
      transparent: 'transparent',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
