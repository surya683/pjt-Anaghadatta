/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          dark: '#111827',
        },
        secondary: {
          blue: '#2563EB',
          accent: '#3B82F6',
        },
        highlight: {
          cyan: '#06B6D4',
          purple: '#8B5CF6',
        },
        neutral: {
          light: '#F8FAFC',
          border: '#E2E8F0',
          muted: '#CBD5E1',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 2s infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%': { 'box-shadow': '0 0 5px rgba(6, 182, 212, 0.2), 0 0 10px rgba(6, 182, 212, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
