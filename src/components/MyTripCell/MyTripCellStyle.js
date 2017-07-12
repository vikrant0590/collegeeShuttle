import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  myTripCellContainer: {
    flex: 1
  },

  myTripDateText: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    alignSelf: 'center'
  },

  myTripDayText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.thin,
    color: Colors.black,
    padding: 8,
  },

  myTripUniversityText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 15,
  },

  myTripTrackText:{
    paddingLeft: 10,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.regular,
    color: Colors.roundTripColor
  },

  myTripTrackNowBtn: {
    flexDirection: 'row',
    height: 30,
    marginLeft: 5,
  },

  myTripUpcomingText: {
    fontSize: Fonts.size.medium,
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

});