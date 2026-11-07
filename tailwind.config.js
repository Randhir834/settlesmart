/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Settsmartly design system — keep in sync with the mobile app
        brand: {
          DEFAULT: '#4D08A6', // Primary
          50: '#F5EEFF', // Background
          100: '#EBDDFF',
          200: '#D8BFFE',
          300: '#BC92FB',
          400: '#9D63F6',
          500: '#7C3AED', // Accent
          600: '#6420CE',
          700: '#4D08A6', // Primary
          800: '#3D0786',
          900: '#2A055E',
        },
        ink: {
          DEFAULT: '#171329', // Text
          900: '#171329',
          800: '#26213D',
          700: '#3B3654',
          600: '#544F6E',
          500: '#6E6989',
          400: '#9592AB',
          300: '#BDBACD',
          200: '#DCDAE6',
          100: '#EEEDF4',
          50: '#F8F7FB',
        },
        positive: '#0E9F6E',
        negative: '#D9364F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,19,41,0.04), 0 8px 24px -8px rgba(23,19,41,0.08)',
        lift: '0 2px 4px rgba(23,19,41,0.04), 0 24px 48px -16px rgba(77,8,166,0.22)',
        phone: '0 40px 80px -24px rgba(23,19,41,0.35), 0 12px 24px -12px rgba(23,19,41,0.2)',
      },
      maxWidth: {
        site: '1200px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
