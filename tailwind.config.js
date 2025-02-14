/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: "inter, sans-serif"
    },
    extend: {
      keyframes: {
        elementIn: {
          '0%': {transform: 'translate(0, 48px)', opacity : '0'},
          '100%': {transform: 'translate(0)', opacity: '1'},
        },
        slideRight: {
          '0%': {transform: 'translateX(-100px)', opacity : '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        slideLeft: {
          '0%': {transform: 'translateX(100px)', opacity : '0'},
          '100%': {transform: 'translateX(-0px)', opacity: '1'},
        },
        elementInRight: {
          '0%': {transform: 'translate(-480px, 0)', opacity : '0'},
          '100%': {transform: 'translate(0)', opacity: '1'},
        },
      },
      animation: {        
        elementIn: '.5s elementIn  .5s ease-in-out both',
        elementInLow: '.5s elementIn  .75s ease-in-out both',
        elementInVeryLow: '.5s elementIn  1s ease-in-out both',
        elementInMaxLow: '.5s elementIn  1.25s ease-in-out both',
        elementInRightFast: '1s elementInRight  .6s ease both',
        elementInRightLow: '1s elementInRight  .8s ease both',
        elementInRightVeryLow: '1s elementInRight  1s ease both',
        slideRight1000MS: '1s slideRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideRight2000MS: '1s slideRight 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideLeft1000MS: '1s slideLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideLeft2000MS: '1s slideLeft 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      colors: {
        'pink': '#BD71FF',
        'purple': '#6A6CFF',
        'gray': '#828282',
        'dark-gray': '#3C3C3C',        
        'black': '#262626',
        'white': '#fafafa',
        'blue': '#1973E8',
        'dark-blue': '#225378',
        'light-blue': '#018EFF',
      },
    },
  },
  plugins: [],
}

