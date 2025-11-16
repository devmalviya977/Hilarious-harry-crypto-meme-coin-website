/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: '#EF771D',
        lightYellow: '#FFCC47',
        black: '#222831',
        bgYellow: '#F8EABA',
      },
      fontFamily: {
        tillana: ['Tillana', 'cursive'],
        pragati: ['Pragati Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
