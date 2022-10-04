module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        gray: '#8492a6',
        'gray-light': '#e4e4e4',
        'gray-dark': '#273444',
      },
      screens: {
        xxs: '320px',
        xs: '375px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
