import { Platform } from 'react-native';
import Colors from './Colors';
const helvetica = {
  base: 'ProximaNova-Light',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
};
const raleway = {
  ...Platform.select({
    ios: {
      base: 'Raleway',
      bold: 'Raleway-Bold',
      emphasis: 'HelveticaNeue-Italic',
      extraBold: 'Raleway-ExtraBold',
      extraLight: 'Raleway-ExtraLight',
      heavy: 'Raleway-Heavy',
      light: 'Raleway-Light',
      medium: 'Raleway-Medium',
      semiBold: 'Raleway-SemiBold',
      thin: 'Raleway-Thin'
    },
    android: {
      base: 'Raleway-Regular',
      bold: 'Raleway-Bold',
      emphasis: 'HelveticaNeue-Italic',
      extraBold: 'Raleway-ExtraBold',
      extraLight: 'Raleway-ExtraLight',
      heavy: 'Raleway-Heavy',
      light: 'Raleway-Light',
      medium: 'Raleway-Medium',
      semiBold: 'Raleway-SemiBold',
      thin: 'Raleway-Thin'
    }
  }),

};



const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  titleTextStyle: {
    fontFamily: raleway.bold,
    fontSize: size.h5,
    color:Colors.textColor,
  },
  descripTionTextStyle: {
    fontFamily: raleway.base,
    fontSize: size.h6
  },
  descripTionTextStyleBold: {
    fontFamily: raleway.bold,
    fontSize: size.h6
  },
  normal: {
    fontFamily: raleway.base,
    fontSize: size.medium,
    color: Colors.textColor,
  },
  bold: {
    fontFamily: raleway.bold,
    fontSize: size.medium,
    color: Colors.textColor,
  },
  numericNormal: {
    fontFamily: helvetica.base,
    fontSize: size.medium,
  },
  numericBold: {
    fontFamily: helvetica.bold,
    fontSize: size.medium,
  },
  numericDescription: {
    fontFamily: helvetica.base,
    fontSize: size.h6,
  },
  numericDescriptionBold: {
    fontFamily: helvetica.bold,
    fontSize: size.h6
  },
  numericRegular: {
    fontFamily: helvetica.base,
    fontSize: size.regular
  },
  bolddescriptionText: {
    fontSize: size.h6,
    fontFamily: raleway.semiBold,
    color: Colors.optionTitleText,
  }
}

export default {
  helvetica,
  raleway,
  size,
  style
}
