/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        typewriter: {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        'none': 'none',
        '1000': '1000px',
      },
      backfaceVisibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          'perspective': '1000px',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      });
    },
  ],
  safelist: [
    'from-purple-500',
    'to-purple-600',
    'from-blue-500',
    'to-blue-600',
    'from-pink-500',
    'to-pink-600',
    'border-purple-500',
    'border-blue-500',
    'border-pink-500',
  ],
};
