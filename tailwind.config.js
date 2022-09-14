/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary' : '#242424',
        'dark-secundary' : '#363636',
        'accent' : '#33d17a',
        'accent-desat' : '#8ff0a4',
        'danger' : '#e01b24',
        'danger-desat' : '#f66151',
        'white-self' : '#d2d2d2',
        'blue-accent' : '#3584e4',
        'blue-accent-desat' : '#99c1f1',
      },
    },
  },
  plugins: [],
}
