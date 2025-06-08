import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'trace': 'trace 3s ease-in-out infinite',
        'trace-vertical': 'trace-vertical 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'scale': 'scale 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'progress': 'progress 2s ease-out forwards',
      },
      keyframes: {
        trace: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scaleX(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleX(0)',
            opacity: '0.5',
          },
        },
        'trace-vertical': {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scaleY(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleY(0)',
            opacity: '0.5',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 25px 5px rgba(59, 130, 246, 0.7)',
          },
        },
        'pulse': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        'scale': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'progress': {
          '0%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
    },
  },
  plugins: [forms],
}

export default config
