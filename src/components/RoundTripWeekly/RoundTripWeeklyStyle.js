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
    paddingTop: 5,
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
    width: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent:'center'
  },

  SelectedButton:{
    height: 30,
    width: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.selectedCalenderDateColor
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

  searchBtnView: {
    flex: 1,
    height: 52,
    width: Metrics.screenWidth/2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#FF214F',
    borderRadius: 26
  },

  swiperPagerBtn: {
    flex: 1,
    width: Metrics.screenWidth - 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    bottom : 0
  },

  lineCol: {
    flex: 1,
    height: Metrics.screenHeight/ 7,
    backgroundColor: Colors.thinLineColor
  },

  searchBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent
  },

  searchBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    alignSelf: 'center'
  },
});