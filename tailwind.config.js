module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#101116',
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
          300: '#a7a6cb',
          400: '#8989ba',
        },
        cyan: '#03edf9',
        navy: "#2927524d",
        cdark: "#0d1117"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
