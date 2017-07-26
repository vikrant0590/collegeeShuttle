import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  collegeShuttleText:{
    ...Platform.select({
      ios: {
        fontSize: (Metrics.screenWidth === 320) ? Fonts.size.paymentheader : Fonts.size.h4,
        fontFamily: Fonts.lato.light,
        color: Colors.black
      },
      android: {
        fontSize: Fonts.size.h4,
        fontFamily: Fonts.lato.light,
        color: Colors.black
      }
    }),
  },
  busnoText: {
    ...Platform.select({
      ios: {
        fontSize: (Metrics.screenWidth === 320) ? Fonts.size.medium : Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        textAlign: 'right'
      },
      android: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        textAlign: 'right'
      }
    }),
  },
  viewBusText:{
    ...Platform.select({
      ios: {
        fontSize: (Metrics.screenWidth === 320) ? Fonts.size.medium : Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.timeColor,
        textAlign: 'right'
      },
      android: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.timeColor,
        textAlign: 'right'
      }
    }),
  },
  busDriverText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.light,
    color: Colors.black
  },
  busDriverNameText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black
  },
  contactText: {
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.regular,
    color: Colors.white
  },
  driverProfileImage: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: Colors.userProfileBorderColor,
    borderWidth: 1
  },
  contactView:{

  }


});