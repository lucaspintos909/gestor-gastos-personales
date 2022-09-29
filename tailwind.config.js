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
        'accent-transparent' : '#8ff0a480',
        'accent-desat' : '#8ff0a4',
        'danger' : '#e01b24',
        'danger-transparent' : '#e01b2580',
        'danger-desat' : '#f66151',
        'white-self' : '#d2d2d2',
        'blue' : '#3584e4',
        'blue-transparent' : '#3584e480',
        'blue-desat' : '#99c1f1',
      },
    },
  },
  plugins: [],
}
