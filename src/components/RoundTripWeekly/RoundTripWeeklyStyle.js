import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  RoundTripWeeklyContainer:{

  },


  dateWeekText: {
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    padding: 5,
    alignSelf: 'center'
  },

  dayWeekText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.settingHeadingTextColor,
    padding: 5,
  },

  monthWeekText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    padding: 5,
  },

  timeWeekText:{
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.regular,
    color: Colors.timeColor,
  },

  passengersNumberButton:{
    height: 30,
    width: 25,
  },

  cardTitleText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.bold,
    color: Colors.white
  },

  PassengerTextView: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15
  },

  PassengerText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.black
  },

  PassengerBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.black
  },

  searchBtn: {
    flex: 1,
    height: 52,
    width: Metrics.screenWidth/2,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    backgroundColor: '#FF214F',
    borderRadius: 26
  },

  searchBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.white,
    alignSelf: 'center'
  },
});