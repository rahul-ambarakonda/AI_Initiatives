import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
