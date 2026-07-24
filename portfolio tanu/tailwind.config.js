/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050505',
          card: '#111111',
          hover: '#161616',
          border: '#262626',
          borderHover: '#333333',
        },
        primary: '#FFFFFF',
        secondary: '#A1A1AA',
        muted: '#71717A',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 255, 255, 0.08)',
        'glow-md': '0 0 25px rgba(255, 255, 255, 0.12)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.18)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
