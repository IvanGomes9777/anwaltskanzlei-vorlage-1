import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Seriös-klassische Palette (Marineblau/Anthrazit + Gold + Sand)
        navy: {
          DEFAULT: '#0f1b2d',
          900: '#0b1422',
          800: '#0f1b2d',
          700: '#16263c',
          600: '#1f344f',
        },
        gold: {
          DEFAULT: '#728690',
          400: '#8a9ca5',
          500: '#728690',
          600: '#5d6e77',
        },
        sand: {
          DEFAULT: '#f7f4ee',
          50: '#faf8f3',
          100: '#f7f4ee',
          200: '#ece5d8',
        },
        ink: '#11161d',
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '76rem',
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
} satisfies Config;
