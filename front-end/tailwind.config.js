module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'criasBooks': "url('src/img/criasbookingimg.png')",
      },
      colors: {
        theme: '#8bc640',
        colorCriasBooking: '#8AC53F',
        colorP01Green: '#8AC53F',
        colorP02Green: '#DAEBC4',
        colorP03Green: '#E4F2CE',
        colorP04Beige: '#E4F2CE',
        colorP05Dark: '#0D0D0D',
      }
    },
  },
  plugins: [require("daisyui")],
  screens: {
    '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  },
  variants: {
    extends: {},
  },
}
