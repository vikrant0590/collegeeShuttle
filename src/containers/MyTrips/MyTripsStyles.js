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
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.settingHeadingTextColor,
    paddingTop: 5,
  },

  swipeCircleStyle: {
    backgroundColor: Colors.thinLineColor,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: Metrics.screenHeight/14
  },
  swipeCircleActiveStyle: {
    backgroundColor: Colors.timeColor,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: Metrics.screenHeight/14,
    marginHorizontal: 2.5,
    marginVertical: 3
  }

});