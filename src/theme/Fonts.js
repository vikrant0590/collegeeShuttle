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
      thin: 'Lato-Thin',
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
  tiny: 8.5,
  tab:9,
  headingText:13,
  price:25,
  tripText:15,
  distancePoint:10,

};

const style = {
  regularFont: {
    fontFamily: lato.base,
    fontSize: size.h6,
  },
  buttonFont:{
    fontSize:size.h5,
    fontFamily:lato.medium
  },
  buttonText:{
    fontFamily: lato.base,
    fontSize:size.tripText,
  },
  tabText:{
    fontFamily:lato.base,
    fontSize:size.tab
  },
  settingHeadingText:{
    fontFamily:lato.bold,
    fontSize:size.headingText,
  },
  profileLabel:{
    fontFamily:lato.base,
    fontSize:size.small
  },
  profileInput:{
    fontSize:size.h6,
    fontFamily:"Roboto-Regular"
  },
  headingText:{
    fontSize:size.h3,
    fontFamily:lato.medium,
  },
  secretCode:{
    fontSize:size.h6,
    //fontFamily:"Roboto-Bold"
  },
  price:{
    fontSize:size.price,
    fontFamily:lato.medium
  },
  universityFont:{
    fontSize:size.medium,
    fontFamily:lato.light
  },
  tripsDetailTextFont:{
    fontSize:size.tripText,
    fontFamily:lato.light
  },
  profileForm:{
    fontSize:size.tripText,
    fontFamily:lato.base
  },
  allTripInfo:{
    fontSize:size.regular,
    fontFamily:lato.base
  },
  distancePoint:{
    fontSize:size.distancePoint,
    fontFamily:lato.light
  },
  availabiltyNone:{
    fontSize:size.medium,
    fontFamily:lato.base
  }
};

export default {
  lato,
  size,
  style
}
