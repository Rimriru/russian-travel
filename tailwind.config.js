/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      darkBg: '#2A2C2F',
      lightBg: '#E8E8E8',
      fontColorDark: '#fff',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    maxWidth: {
      '1184': '1184px',
      '928': '928px',
      '720': '720px',
      '288': '288px',
      '176': '176px',
      '142': '142px'
    },
    extend: {
      spacing: {
        
      }
    }
  },
  plugins: [],
}
