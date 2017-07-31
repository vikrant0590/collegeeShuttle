import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  titleContainer:{
    marginLeft:Metrics.screenWidth/2.5,
    marginTop:Metrics.screenHeight/9,
  },
  titleTextStyle:{
    ...Fonts.style.buttonFont,
    justifyContent:'center',
    alignItems:'center',
    color:Colors.signupTitle
  },
  loginFacebookContainer:{
    marginTop:40,
    marginLeft:Metrics.screenWidth/7,
  },
  loginFacebookButton:{
    alignItems:"center",
    justifyContent:"center",
    width: Metrics.screenWidth/1.4,
    height:45,
    backgroundColor:Colors.facebookButton,
    borderRadius:22,
    flexDirection:'row',
  },

  facebookButtonText:{
    ...Fonts.style.buttonText,
    color:Colors.white,
  },
  facebookButtonImage:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.facebookIconBg,
    height:45,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius:22,
  },


  buttonText:{
    flex:0.8,
    alignItems:'flex-start',
    marginLeft:10
  },
  facebookImage:{
    height:18,
    width:10,
  },
  googleImage:{
    height:17,
    width:17
  },
  loginGoogleContainer:{
    marginLeft:Metrics.screenWidth/7,
  },
  googleButtonText:{
    ...Fonts.style.buttonText,
    color:Colors.white,
  },
  loginText:{
    ...Fonts.style.signupButtonText,
    color:Colors.signupButtonText,
  },
  signupButton:{
    justifyContent:"center",
    alignItems:'center',
    borderWidth:1,
    borderColor:Colors.signupButtonText,
    borderRadius:22,
    height:45,
    width: Metrics.screenWidth/1.4,
  },
  formContainer:{
    flexDirection:'column',
    marginTop:20,
    marginBottom:30,
    marginLeft:Metrics.screenWidth/8,
    marginRight:Metrics.screenWidth/8
  },
  inputStyle:{
    fontSize:Fonts.size.h9,
  },
  optionalContainer:{
    flexDirection:'row',
    marginTop:Metrics.screenHeight/20,
    alignItems:'center',
    justifyContent:'center'
  },
  optional:{
    ...Fonts.style.buttonText,
    color:Colors.options,
  },
  signUpHyperlink:{
    color:Colors.signupButtonText,
    ...Fonts.style.buttonText
  },
  loginButtonContainer:{
    marginLeft:Metrics.screenWidth/7,
  },
  formIcon:{
    marginRight:4,
  },
  forgotPasswordButton:{
    fontSize:Fonts.size.headingText,
    color:Colors.options
  }

});
