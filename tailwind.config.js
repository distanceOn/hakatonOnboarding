/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#4F46E5',
        'black-primary': '#111827',
        'white-primary': '#ffffff',
        'grey-primary': '#4B5563',
        'grey-secondary': '#374151',
        'grey-third': '#D1D5DB',
        'grey-fourth': '#6B7280',
      },
    },
  },
  plugins: [],
}
