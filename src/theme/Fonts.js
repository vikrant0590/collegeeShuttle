import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

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
  })
};

const normalize = (size) => {
  if(pixelRatio == 2){
    if(SCREEN_WIDTH == 375){
      return size * 1;
    }
    return size * 0.90;
  }
  if(pixelRatio == 3){
    return size * 1.15;
  }
  return size * pixelRatio;
};


const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(26),
  h5: normalize(20),
  h6: normalize(18),
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(13),
  tiny: normalize(8.5),
  tab:normalize(9),
  headingText:normalize(13),
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
    fontSize:normalize(15),
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
  },
  rating:{
    fontSize:size.headingText,
    fontFamily:lato.light
  }
};

export default {
  lato,
  size,
  style,
}
