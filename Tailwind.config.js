/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        keyframes: {
          slideAnimation: {
            '0%, 20%': { transform: 'translateX(0)' },
            '25%, 45%': { transform: 'translateX(-100%)' },
            '50%, 70%': { transform: 'translateX(-200%)' },
            '75%, 95%': { transform: 'translateX(-300%)' },
            '100%': { transform: 'translateX(0)' },
          }
        },
        animation: {
          slideAnimation: 'slideAnimation 15s infinite',
        }
      },
    },
    plugins: [],
  }