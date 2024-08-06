/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('homeimg.jpg')",
      },
      zIndex: {
        '100': '100',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      screens: {
        "sm": { "max": "640px" },
        "md": { "max": "768px" },
        "lg": { "max": "1024px" }
      },
    },
  },
  plugins: [],
}