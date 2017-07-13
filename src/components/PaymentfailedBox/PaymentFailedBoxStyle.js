import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: Metrics.screenHeight - Metrics.screenHeight/1.8
  },

  PaymentViewConatiner: {
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10
  },

  PaymentViewStyle: {
    borderRadius: 2,
    marginLeft: 40,
    marginRight: 40,
  },

  headerImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },

  tryAgainView: {
    marginTop: 30,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: Colors.timeColor,
    borderRadius: 16.5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },

  paymentTextView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  paymentText: {
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
  },

  messageTextView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  messageText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center'
  },

  tryAgainText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    textAlign: 'center'
  }

});