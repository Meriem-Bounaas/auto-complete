/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'borderSugg':'#A2A2A2',
        'searchColor':"#FFFFFF",
        'suggColor':'#666666'
      },
    },
  },
  plugins: [],
}
