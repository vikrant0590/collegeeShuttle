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
    marginRight: (Metrics.screenWidth === 320) ? 10 : 20,
    resizeMode: 'contain',
    marginBottom: 10,
    width: (Metrics.screenWidth === 320) ? Metrics.screenWidth - 62 : Metrics.screenWidth - 72,
  },

  headerDesText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base
  },

  tripicon: {
    ...Platform.select({
      ios: {
        height: (Metrics.screenWidth === 320) ? 24 : 34,
        width: (Metrics.screenWidth === 320) ? 24 : 34,
        borderRadius: (Metrics.screenWidth === 320) ? 12 : 17,
        borderWidth: 1,
        borderColor: Colors.userProfileBorderColor,
        resizeMode: 'contain',
        marginLeft: (Metrics.screenWidth === 320) ? 7 : 9,
        alignSelf: 'center'
      },
      android:{
        height: (Metrics.screenWidth === 320) ? 24 : 34,
        width: (Metrics.screenWidth === 320) ? 24 : 34,
        borderRadius: (Metrics.screenWidth === 320) ? 12 : 17,
        borderWidth: 1,
        borderColor: Colors.userProfileBorderColor,
        marginLeft: (Metrics.screenWidth === 320) ? 7 : 9,
        alignSelf: 'center'
      }
    }),
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