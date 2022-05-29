module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1440px',
    },
    
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      colors: {
        Orange: 'hsl(25, 97%, 53%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        MediumGrey: 'hsl(216, 12%, 54%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        VeryDarkBlue: ' hsl(216, 12%, 8%)',
        DarrkBG: 'hsl(231, 30%, 12%)',
      },
      spacing: {
        '90': '21rem',
        '92': '21.5rem',
        '94': '21.75rem',

      }
    },
  },
  plugins: [],
}