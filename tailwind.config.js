const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akira: "akira",
      },
    },
    colors: {
      'transparent': colors.transparent,
      'midnight-blue': '#0d121d',
      'purple': '#7641ac',
      'dark-purple': '#4f1464',
      'white': '#FFFFFF',
      'gray': colors.gray,
      'luckperms': '#94df03',
      'minecraftoss': {
        100: '#2b9c56',
        200: '#42b883'
      },
      'essentialsx': {
        100: '#b20922',
        200: '#d61b18',
        300: '#ed411b'
      },

    }
  },
  plugins: [],
};
