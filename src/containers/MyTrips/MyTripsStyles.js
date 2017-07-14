import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  myTripDateText: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    alignSelf: 'center'
  },

  myTripDayText: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.lato.thin,
    color: Colors.black,
    padding: 8,
  },

  myTripUniversityText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
  },

  myTripTrackText:{
    paddingLeft: 10,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.roundTripColor
  },

  myTripTrackNowBtn: {
    flexDirection: 'row',
    height: 30,
    marginLeft: 5,
  },

  myTripUpcomingText: {
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.lato.thin,
    color: Colors.black,
    paddingTop: 5,
  },

  myTripTrackIcon: {
    justifyContent: 'space-around',
    resizeMode: 'contain',
    height: 15,
    width: 15
  },

  myTripInviteIcon: {
    height: 20,
    width: 18,
    resizeMode: 'contain',
    marginLeft: 10,
    alignSelf: 'center'
  },

  completedTripText:{
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.lato.regular,
    color: Colors.unselectColor
  },

  completedTripView:{
    marginTop: Metrics.screenHeight/12,
    marginLeft: 15,
    marginBottom: 15
  },



});