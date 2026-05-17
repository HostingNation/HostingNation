import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface:    '#f8fafc',
        'surface-2':'#f1f5f9',
        border:     '#e2e8f0',
        violet: {
          50:  '#f5f3ff',
          100: '#fff0f1',
          200: '#ffc9cc',
          300: '#ff9aa0',
          400: '#ff6b75',
          500: '#8b5cf6',
          600: '#dc3545',
          700: '#dc3545',
          800: '#c0202e',
          900: '#a01828',
        },
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up':   'fade-up 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in':   'fade-in 0.3s ease both',
        'shimmer':   'shimmer 3s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'nav-pulse': 'nav-pulse 1.2s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'shimmer': {
          from: { backgroundPosition: '0% center' },
          to:   { backgroundPosition: '200% center' },
        },
        'nav-pulse': {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
      boxShadow: {
        'soft':   '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
        'card':   '0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        'violet': '0 4px 20px rgba(109,40,217,0.15)',
        'glow':   '0 0 24px rgba(109,40,217,0.12)',
        'glow-sm':'0 0 12px rgba(109,40,217,0.1)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4,0,0.2,1)',
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
    },
  },
  plugins: [],
};

export default config;
