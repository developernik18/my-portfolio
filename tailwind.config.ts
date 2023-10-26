import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        leftSlideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        upFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20%)'},
          '100%': { opacity: '1', transform: 'translateY(0%)'}
        },
        rightFadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-20%)'},
          '100%': { opacity: '1', transform: 'translateX(0%)'}
        },
        leftSlideOut: {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        leftSlideIn: 'leftSlideIn 500ms ease-in-out forwards',
        leftSlideOut: 'leftSlideOut 500ms ease-in-out forwards',
        fadeIn: 'fadeIn 500ms ease-in-out forwards',
        upFadeIn: 'upFadeIn 500ms ease-in-out forwards',
        rightFadeIn: 'rightFadeIn 500ms ease-in-out forwards',


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
