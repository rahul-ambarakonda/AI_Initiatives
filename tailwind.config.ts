import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f7ff',
          '100': '#e0f0ff',
          '200': '#c1e4ff',
          '300': '#a2d8ff',
          '400': '#83caff',
          '500': '#64bcff',
          '600': '#45a6ff',
          '700': '#2690ff',
          '800': '#077aff',
          '900': '#005fcc',
        },
        gray: {
          '50': '#f7fafc',
          '100': '#edf2f7',
          '200': '#e2e8f0',
          '300': '#cbd5e0',
          '400': '#a0aec0',
          '500': '#718096',
          '600': '#4a5568',
          '700': '#2d3748',
          '800': '#1a202c',
          '900': '#171923',
        },
      },
      boxShadow: {
        card: '0 8px 24px rgba(23, 25, 35, 0.08)',
        'card-hover': '0 16px 40px rgba(23, 25, 35, 0.12)',
        glow: '0 0 20px rgba(7, 122, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(7, 122, 255, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', 'box-shadow': '0 0 20px rgba(65, 120, 217, 0.4)' },
          '50%': { opacity: '0.8', 'box-shadow': '0 0 40px rgba(65, 120, 217, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
