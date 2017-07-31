import { StyleSheet, } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  modalScreen:{
    width: Metrics.screenWidth - 45,
    height: Metrics.screenHeight / 2.0,
  },
  linearGradientColor:{
    width:Metrics.screenWidth/2,
    height: 45,
    backgroundColor: 'transparent',
    borderRadius: 22,
    marginBottom: 0,
    alignSelf: "center"
  },
  submitButtonText:{
    alignSelf: "center",
    marginTop: 10,
    ...Fonts.style.regularFont,
    color: Colors.white
  },
  proceedButton:{
    flex: 1,
    backgroundColor: Colors.transparent,

  },
  buttonsContainer:{
    flex: 0.3,
    alignItems: 'center',
  },
  VerificationContainer:{
    fontSize:Fonts.size.h7,
    color:Colors.reminderButtonColor,
    fontFamily:Fonts.lato.medium,
  },
  verificationMessage:{
    fontFamily:Fonts.lato.base,
    fontSize:Fonts.size.regular,
    color:Colors.black
  },
  codeHeadingText:{
    fontSize:Fonts.size.small,
    color:Colors.placeholderTextColor
  },
  resendCodeText:{
    fontSize:Fonts.size.regular,
    color:Colors.pureBlack

  }
});