/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    fontFamily: {
      atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
      garet: ['Garet', 'sans-serif'],
    },
    colors: {
      blue: {
        600: '#09004f', 
      },
    },
  } },
  plugins: [],
};


