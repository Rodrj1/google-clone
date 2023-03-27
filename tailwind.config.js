module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#101116',
      blue: {
        100: '#1a1b26',
        200: '#24283b',
        300: '#565f89',
        400: '#8689ac',
        500: "#5d96ec",
        600: "#302b63",
        700: "#24243e",
        800: "#001f3f",
      },
      pink: {
        100: '#c93dbf',
        200: '#eb1bdd',
      },
      yellow: '#fed243',
      orange: '#e84b3c',
      white: '#ebeef7',
      grey: {
        100: '#6c6c7c',
        200: '#c0caf5',
        300: "#a7a6cb",
        400: "#8989ba"
      },
      red: '#f03e3e',
      cyan: '#03edf9',
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
