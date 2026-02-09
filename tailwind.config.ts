import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#ede9e0',
          200: '#d9d2c5',
          300: '#b8ae9e',
          400: '#968a78',
          500: '#746856',
          600: '#5c5244',
          700: '#4a4238',
          800: '#3a342c',
          900: '#2c2722',
        },
        secondary: {
          50: '#fdf9ef',
          100: '#f9f0d5',
          200: '#f2e0aa',
          300: '#e8cb76',
          400: '#deb54d',
          500: '#c9982c',
          600: '#b07d1e',
          700: '#8f6117',
          800: '#764f16',
          900: '#644118',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce8e5',
          200: '#fad4ce',
          300: '#f5b3a9',
          400: '#ec8a7b',
          500: '#df6352',
          600: '#cb4735',
          700: '#aa3829',
          800: '#8d3226',
          900: '#762e25',
        },
        dark: {
          bg: '#0a0a08',
          surface: '#141310',
          card: '#1e1c18',
          border: '#2e2a24',
          muted: '#6b6560',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.2)',
        'glass': '0 8px 32px 0 rgba(201, 152, 44, 0.06)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'glow-primary': '0 0 20px rgba(201, 152, 44, 0.3)',
        'glow-secondary': '0 0 20px rgba(223, 99, 82, 0.2)',
        'glow-accent': '0 0 20px rgba(222, 181, 77, 0.25)',
        'glow-gold': '0 0 30px rgba(201, 152, 44, 0.15), 0 0 60px rgba(201, 152, 44, 0.05)',
        'luxury': '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
        'depth-sm': '0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)',
        'depth-md': '0 4px 6px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.08)',
        'depth-lg': '0 8px 16px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.12)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-1': 'radial-gradient(at 40% 20%, hsla(42,70%,45%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(35,80%,55%,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(10,60%,65%,0.06) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(38,65%,50%,0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(15,50%,55%,0.06) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(42,70%,45%,0.05) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(35,80%,55%,0.03) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(10,60%,65%,0.03) 0px, transparent 50%)',
      },
      blur: {
        '4xl': '72px',
        '5xl': '100px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'blur-in': 'blurIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(201,152,44,0.15)' },
          '50%': { boxShadow: '0 0 20px rgba(201,152,44,0.3), 0 0 40px rgba(222,181,77,0.15)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        blurIn: {
          '0%': { filter: 'blur(8px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
