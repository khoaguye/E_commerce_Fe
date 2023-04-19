/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey' : '#f6f6f6',
        'light-pink' : '#fcf0e4',
        "sand": '#fdefe8'
      },
    },
  },
  plugins: [],
}
