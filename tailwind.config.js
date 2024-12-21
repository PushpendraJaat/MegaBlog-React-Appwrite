/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#9290C3', 
        customdarkblue: '#50727B'
      },
    },
  },
  plugins: [],
}

