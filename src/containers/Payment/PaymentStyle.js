import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  RoundTripWeeklyContainer: {},

  ProcessBtn: {
    flex: 1,
    height: 52,
    width: Metrics.screenWidth/2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 26
  },

  thinLine: {
    flex: 1,
    height: Metrics.screenHeight/ 7,
    backgroundColor: Colors.thinLineColor
  },

  bankmastercardimage: {
    width: Metrics.screenHeight/10,
    height: Metrics.screenHeight/16,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
  },

  cardnumberText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    textAlign: 'left',
    color: Colors.percentageTextColor,
    paddingTop: 5,
    paddingLeft: 5,
  },

  cardDetails: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 5,
  },

  expiryDate: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    textAlign: 'left',
    color: Colors.percentageTextColor,
    paddingTop: 5,
    paddingLeft: 5,
  },
  expiry: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 5,
  },

  totalamount: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    alignSelf: 'center'
  },

  paymnetOPtion: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: Colors.white,
    fontSize: Fonts.size.regular
  },

  collegeText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.placeholderTextColor,
    textAlign: 'left'
  },

  buyNow: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.timeColor,
    textAlign: 'right'
  },

  creditcardText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    textAlign: 'left'
  },

  debitcardText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    textAlign: 'left'
  },

  packagecode: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    alignSelf: 'center'
  },
  Apply: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    textAlign: 'center',
    color: Colors.timeColor
  },

  ProcessBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    textAlign: 'center',
  },

  paymentDateText: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
    alignSelf: 'center'
  },

  paymentDayText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.placeholderTextColor,
    padding: 8,
  },

  paymentmonthText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
  },

  paymentUpcomingText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.placeholderTextColor,
  },

  paymentUniversityText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 2.5,
  },

  paymentPickupText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.placeholderTextColor,
  },

  paymentUniText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    paddingTop: 5,
  },


});