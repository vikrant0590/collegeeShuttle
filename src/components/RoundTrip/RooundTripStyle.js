import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  textBackgroundView:{
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: 'white',
    borderRadius: 2.5
  },

  textSeprateLine:{
    height: 1.2,
    flexDirection: 'row'
  },

  textSepratorIcon:{
    right: -190,
    top: -12,
    justifyContent: 'center'
  },

  textIcon:{
    margin: 5,
    justifyContent: 'center'
  },

  titleHeaderText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
  },

  dayText: {
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    padding: 10,
    alignSelf: 'center'
  },

  monthText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
  },

  timeText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
    paddingTop: 5,
    paddingBottom: 5
  },

  busText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
    paddingTop: 20
  },

  collegeText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    paddingBottom: 5
  },

  pickupText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor
  },

  circleText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    paddingBottom: 5
  },

  dropText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor
  },

  trackNowBtn: {
    flexDirection: 'row',
    height: 30
  },

  trackText:{
    paddingLeft: 10,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.roundTripColor
  },

  trackIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 20,
    width: 20
  },

  thinLine:{
    height: 125,
    width: 1,
    backgroundColor: Colors.thinLineColor,
    marginLeft: -25,
    marginRight: 15
  },

  busIcon:{
    marginRight: 20,
    resizeMode: 'contain',
    marginBottom: 10,
    width: Metrics.screenWidth - 80,
    // ...Platform.select({
    //   ios: {
    //     aspectRatio:(Metrics.screenWidth === 320) ?  6.5 :  9.5,
    //     marginLeft:(Metrics.screenWidth === 320) ?  - Metrics.screenWidth/22 : - Metrics.screenWidth/13,
    //   },
    //   android:{
    //     //set icon and text style...
    //   }
    // }),
  },

  headerDesText: {
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.lato.base
  },

  tripicon: {
    height: 32,
    width: 34,
    resizeMode: 'contain',
    marginLeft: 10,
    alignSelf: 'center'
  },

  descriptionText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
  },

  inviteView: {
    flex: 1,
    marginRight: Metrics.screenWidth/ 6,
    aspectRatio: 9.5
  },



});