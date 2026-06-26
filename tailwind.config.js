/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        // Exact brand colors
        brand: {
          // Primary — corporate blue
          DEFAULT: '#024f9e',
          50: '#eef5fc',
          100: '#d6e6f6',
          200: '#aecdee',
          300: '#7caee2',
          400: '#3f86cf',
          500: '#1f6bbd',
          600: '#024f9e',
          700: '#023f7e',
          800: '#03325f',
          900: '#04284b',
        },
        // Secondary — premium gold accent
        gold: {
          DEFAULT: '#d3a637',
          light: '#e6c878',
          dark: '#a8821f',
        },
        // Tertiary — fresh wellness green
        wellness: {
          DEFAULT: '#67b622',
          light: '#8fd14f',
          dark: '#4e8d18',
        },
      },
      fontFamily: {
        // Headings
        heading: ['"Plus Jakarta Sans"', 'Sora', 'system-ui', 'sans-serif'],
        // Body
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(2, 79, 158, 0.18)',
        card: '0 12px 36px -14px rgba(2, 79, 158, 0.22)',
        gold: '0 10px 30px -10px rgba(211, 166, 55, 0.45)',
        glow: '0 0 0 4px rgba(2, 79, 158, 0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'water-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -16px) scale(1.06)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'water-drift': 'water-drift 14s ease-in-out infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
