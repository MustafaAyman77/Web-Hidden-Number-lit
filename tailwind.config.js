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
        darkBg: '#07060D',
        purplePrimary: '#8B5CF6',
        purpleSecondary: '#A855F7',
        cyanAccent: '#22D3EE',
        textPrimary: '#FFFFFF',
        textSecondary: '#B8B5C8',
        glassBg: 'rgba(15, 12, 29, 0.65)',
        glassBorder: 'rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(34, 211, 238, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
