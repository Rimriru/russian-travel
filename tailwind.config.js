/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./scripts/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'pre-sm': {'max': '683px'},
      'sm': {'max': '576px'},
      'pre-xs': {'max': '400px'},
      'xs': {'max': '320px'},
    },
    colors: {
      darkBg: '#2A2C2F',
      lightBg: '#E8E8E8',
      glass: 'rgba(239,239,239,0.15)',
      fontColorDark: '#fff',
      greyCaption: '#AAAAAA',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    maxWidth: {
      '1184': '1184px',
      '984': '984px',
      '928': '928px',
      '720': '720px',
      '640': '640px',
      '288': '288px',
      '176': '176px',
      '142': '142px'
    },
    extend: {
      spacing: {
        '18': '72px',
        '22': '92px',
        '21': '88px'
      },
      backgroundImage: {
        'baikalImage': "url('../images/background-trains.jpg')",
      }
    }
  },
  plugins: [],
}
