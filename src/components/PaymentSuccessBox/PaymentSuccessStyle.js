import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: Metrics.screenHeight - Metrics.screenHeight/2.2
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

  buttonIcon:{
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 5
  },

  inviteFriendBtn:{
    marginTop: 40,
    backgroundColor: Colors.white,
    borderRadius: 16.5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: Colors.unselectColor,
    height: 35,
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
    marginTop: 40,
    backgroundColor: Colors.unselectColor,
    borderRadius: 16.5,
    marginLeft: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },


  paymentTextView: {
    marginTop: 15,
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
    marginTop: 10,
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