/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'custom-green': '#71c7ca',
        primary: {
          dark: '#1EAE63',
          light: '#1EAE63',
          lighter: '#1eae63c4',
        },
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        semibold: 600,
      },
      fontFamily: {
        manrope: ['Dosis', 'Nunito', 'sans-serif'],
      },
    },
    screens: {
      xs: '300px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      xmd: '900px',
      '2xl': '1535px',
    },
  },
}
