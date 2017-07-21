import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  RoundTripContainer:{

  },

  passengersBtnText: {
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
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#FF214F',
    borderRadius: 26
  },

  searchBtnText:{
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.white,
    alignSelf: 'center'
  },


  passengersNumberButton:{
    height: 30,
    width: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent:'center'
  },

  PassengerBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.black
  },


  SelectedButton:{
    paddingBottom:12,
    marginTop:14,
    height: 65,
    width: 45,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.selectedCalenderDateColor
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

  titleHeaderText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.settingHeadingTextColor,
  },

  dayText: {
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    padding: 5,
    alignSelf: 'center'
  },
  monthText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5
  },
  timeText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.settingHeadingTextColor,
    paddingBottom: 5
  },
  timeHourText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
  },

  pickupText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.settingHeadingTextColor
  },
  circleText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    alignSelf: 'center'
  },
});