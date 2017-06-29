import { Platform } from 'react-native';

const lato = {
  ...Platform.select({
    ios: {
      base: 'Lato-Regular',
      bold: 'Lato-Bold',
      emphasis: 'Lato-Italic',
      heavy: 'Lato-Heavy',
      light: 'Lato-Light',
      medium: 'Lato-Medium',
      semiBold: 'Lato-Semibold',
      thin: 'Lato-Thin'
    },
    android: {
      base: 'Lato-Regular',
      bold: 'Lato-Bold',
      emphasis: 'Lato-Italic',
      heavy: 'Lato-Heavy',
      light: 'Lato-Light',
      medium: 'Lato-Medium',
      semiBold: 'Lato-Semibold',
      thin: 'Lato-Thin'
    }
  }),

};



const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 18,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  regularFont: {
    fontFamily: lato.base,
    fontSize: size.h6,
  }
}

export default {
  lato,
  size,
  style
}
