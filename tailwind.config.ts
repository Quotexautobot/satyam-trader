import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-dark': '#0B0F19',
        'glass-emerald': '#00FFCC',
        'glass-crimson': '#FF3366',
        'glass-light': '#1A1F2E',
        'glass-accent': '#00D4FF',
      },
      backdropBlur: {
        'lg': '25px',
      },
      backgroundImage: {
        'liquid-gradient': 'linear-gradient(135deg, #0B0F19 0%, #1A1F2E 25%, #00FFCC 75%, #FF3366 100%)',
      },
      keyframes: {
        'glass-warp': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0, 255, 204, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(0, 255, 204, 0.6))' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'glass-warp': 'glass-warp 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
