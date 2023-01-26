/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '450px',
      // => @media (min-width: 450px) { ... }

      md: '640px',
      // => @media (min-width: 640px) { ... }

      lg: '768px',
      // => @media (min-width: 768px) { ... }

      xl: '836px',
      // => @media (min-width: 836px) { ... }

      '2xl': '1100px',
      // => @media (min-width: 1100px) { ... }

      '3xl': '1280px',
      // => @media (min-width: 1100px) { ... }
    },
    extend: {
      colors: {
        blueColor: 'hsl(220, 58%, 31%)',
        blackColor: 'hsl(224, 20%, 41%)',
        lightGreenColor: 'hsl(180, 60%, 51%)',
        backgroundColor: 'hsl(240, 18%, 97%)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        Volk: ['Volkhov', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
