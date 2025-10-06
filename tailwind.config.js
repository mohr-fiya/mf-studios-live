/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          900: '#1E1E1E',
          800: '#232323',
          700: '#2B2B2B',
        },
        brand: {
          600: '#1D4ED8',
          500: '#2563EB',
          400: '#60A5FA'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}