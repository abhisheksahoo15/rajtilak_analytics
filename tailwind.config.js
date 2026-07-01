/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#050505',
          royal: '#071A3D',
          glow: '#00E5FF'
        },
        saffron: {
          start: '#FF6A00',
          end: '#FF9A3C'
        },
        gold: {
          accent: '#FFD700'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'morph-blob': 'morphBlob 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in-down': 'fadeInDown 0.7s ease-out both',
        'fade-in-left': 'fadeInLeft 0.7s ease-out both',
        'fade-in-right': 'fadeInRight 0.7s ease-out both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
