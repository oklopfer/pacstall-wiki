/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#38b2ac',
        'brand-yellow': '#ffbd42',
        'adwaita-dark': '#2d2d2d',
        'off-white': '#fefefe',
        'overlay': 'rgba(15, 0, 20, 0.4);',
        'site-400': '#1a202c',
        'site-300': '#2d3748',
        'site-200': '#4a5568',
        'site-100': '#718096',
        'brand-dark': '#2d2d2d44',
        'brand-light': '#fefefe11',
      },
      backgroundImage: {
        'blobs': "url('/img/blobs.png')",
        'banner': "url('/img/ecosystem.png')"
      },
      boxShadow: {
        'header-box': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      dropShadow: {
        'header-drop': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      fontFamily: {
        'serif': ['Open Sans', 'sans-serif'],
        'mono': ['FiraCodeNF', 'mono'],
      },
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem',}],
      sm: ['0.875rem', {lineHeight: '1.25rem',}],
      base: ['1rem', {lineHeight: '1.5rem',}],
      btn: ['1.15rem', {lineHeight: '1.6rem',}],
      lg: ['1.125rem', {lineHeight: '1.75rem',}],
      xl: ['1.25rem', {lineHeight: '1.75rem',}],
      '2xl': ['1.5rem', {lineHeight: '2rem',}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem',}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem',}],
    },
  },
  plugins: [],
}
