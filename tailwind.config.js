/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: ({
        fadeOut: {
          '0%': { opacity: "0%" },
          '100%': { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [],
};
