const kebabCase = require('lodash.kebabcase')

const colorsByName = {
  blue: '#33aece',
  darkGrey: '#4a4a4a',
  lightGrey: '#fcfcfc',
  mediumGrey: '#dcdddc',
  middleGrey: '#777777',
  pastelGrey: '#c5c5c5',
  red: '#DD2C00'
}

 const sass = Object.assign(colorsByName, {
  mini: '30em',
  sm: '40em', // 648px
  md: '52em',
  lg: '64em', // 1280px;
  xl: '75em',
  borderRadius: '0.25rem',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  boxShadowHover: '0 0 10px rgba(0,0,0,0.4)',
  fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',
  totalBackgroundImage: 'linear-gradient(to bottom, $light-grey, white)',
  lightFontColor: colorsByName.pastelGrey,
  middleFontColor: colorsByName.middleGrey,
  darkFontColor: colorsByName.darkGrey
})

Object.keys(sass)
  .forEach(key => {
    const value =  sass[key]
    const kebabKey = kebabCase(key)
    if (kebabKey !== key) {
      sass[kebabKey] = value
      delete sass[key]
    }
  })

module.exports = sass
