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
    marginLeft: Metrics.screenWidth/ 10,
    marginRight: Metrics.screenWidth/ 10,
  },

  headerImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: Metrics.screenWidth/ 30,
  },

  buttonIcon:{
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: Metrics.screenWidth/ 60
  },

  inviteFriendBtn:{
    marginTop: Metrics.screenWidth/ 10,
    backgroundColor: Colors.white,
    borderRadius: 16.5,
    marginRight: Metrics.screenWidth/ 25,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: Colors.unselectColor,
    height: Metrics.screenWidth/ 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inviteText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.unselectColor,
    textAlign: 'center'
  },

  viewDetailText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    textAlign: 'center'
  },

  ViewDetailsBtn: {
    marginTop: Metrics.screenWidth/ 10,
    backgroundColor: Colors.unselectColor,
    borderRadius: 16.5,
    marginLeft:Metrics.screenWidth/ 25,
    marginRight: 5,
    height: Metrics.screenWidth/ 10,
    justifyContent: 'center',
    alignItems: 'center'
  },


  paymentTextView: {
    marginTop: Metrics.screenWidth/ 22,
    alignItems: 'center',
    justifyContent: 'center'
  },

  paymentText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
    textAlign: 'center'
  },

  messageTextView: {
    marginTop: Metrics.screenWidth/ 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  messageText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center'
  },



});