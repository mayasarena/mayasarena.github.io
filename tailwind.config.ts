import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      button: '0.83rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.2rem',
      '6xl': '4rem'
    },
    colors: {
      transparent: 'transparent',
      primary: '#F02077',
      secondary: '#FFE9F2',
      lightbg: '#FFF7FA',
      darkgrey: '#3E3E3E',
      medgrey: '#636363',
      black: 'black',
      white: 'white',
    },
    borderRadius: {
      'full': '100%',
      'button': '20px',
      'sm': '10px',
      'md': '15px',
      'lg': '20px',
      'xl': '25px',
    },
    extend: {
      boxShadow: {
        'shadow': '0 0px 10px 0px rgba(72, 99, 82, 0.2)',
      },
      screens: {
        'md-lg': '1080px',
        'xl': '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

