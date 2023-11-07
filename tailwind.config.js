/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#4F46E5',
        'black-primary': '#111827',
        'white-primary': '#ffffff',
      },
    },
  },
  plugins: [],
}
