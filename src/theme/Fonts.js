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
  if(pixelRatio == 2 ){
    if(SCREEN_WIDTH == 375){
      return size * (Platform.OS === 'ios' ? 1.05 : size);
    }
    return size * (Platform.OS === 'ios' ? 0.95 : size) ;
  }
  if(pixelRatio == 3){
    return size * (Platform.OS === 'ios' ? 1.15 : size);
  }
  return size;
};



const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(26),
  h5: normalize(20),
  h6: normalize(18),
  h7: normalize(22),
  h8: normalize(40),
  h9:normalize(15),
  h10: normalize(25),
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(13),
  tiny: normalize(8.5),
  tab:normalize(9),
  paymentheader: normalize(24),
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
    fontSize:size.h9,
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
    marginTop:5,
    fontSize:size.h3,
    fontFamily:lato.medium,
  },
  secretCode:{
    fontSize:size.h6,
  },
  price:{
    fontSize:size.h10,
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
  },
  title:{
    fontSize: size.regular,
    fontFamily: lato.base
  },
};

export default {
  lato,
  size,
  style,
}
