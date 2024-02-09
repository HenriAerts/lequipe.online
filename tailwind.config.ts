/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },

  theme: {
    fontFamily: {
      sans: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "sans-serif"]
    },
    extend: {
      rotate: {
        '225 ': '225deg',
      },
      animation: {
        'infinite-scroll-lr': 'infinite-scroll-lr 350s linear infinite',
        'infinite-scroll-rl': 'infinite-scroll-rl 350s linear infinite'
      },
      keyframes: {
        'infinite-scroll-lr': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },        
        'infinite-scroll-rl': {
          from: { transform: 'translateX(-55%)' },
          to: { transform: 'translateX(-155%)' },
        }
      },               
      colors: {
        gray: {
          10: '#8B8B8B',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          10: "#141D37",
          20: "#13A1F1",
        },
        pink: {
          10: '#C400F5',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};