/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'c-primary': '#131B20',
        'c-second': '#222C32',
        'c-gray': '#2C3840',
        'c-green': '#4BA586'
      },
    }
  },
  plugins: [],
}

