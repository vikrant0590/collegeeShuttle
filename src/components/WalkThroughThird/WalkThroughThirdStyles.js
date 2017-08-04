import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  linearGradient: {
    flex: 1
  },
  bag: {
    //marginTop: 100,

    ...Platform.select({
      ios: {
        marginTop:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 40 : 50  : 55,
        marginBottom:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 40 : 50  : 55,

      },
      android:{
        marginTop: 55,
        marginBottom: 55,
      }
    }),
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loginSection: {
    alignItems: 'center',
  },
  introText: {
    ...Fonts.style.regularFont,
    backgroundColor:'transparent',
    color:'#fff',
    textAlign:'center'
  },
  registerButton: {
    backgroundColor:'#FFF',
    marginTop: 20,
    height:60,
    width: 200,
    justifyContent:'center',
    alignSelf:'center'
  },
  registerButtonText : {
    ...Fonts.style.regularFont,
    backgroundColor:'transparent',
    color:'#D32735',
    textAlign:'center'
  },

  mobilelogo:{
    ...Platform.select({
      ios: {
        marginTop:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 10 : 10  : 5,
        marginBottom:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 15 : 10  : 5,
        marginLeft:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 20 : 10  : 5,
        marginRight:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 20 : 10  : 5,
        resizeMode: 'contain'
      },
      android:{
        resizeMode: 'contain'
      }
    })
  }

});
