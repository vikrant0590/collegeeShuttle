import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  titleContainer:{
    marginLeft:148,
    marginTop:64,
  },
  titleTextStyle:{
    ...Fonts.style.buttonFont,
    justifyContent:'center',
    alignItems:'center',
    color:Colors.signupTitle
  },
  loginFacebookContainer:{
    marginTop:40,
    marginLeft:44,
  },
  loginFacebookButton:{
    alignItems:"center",
    justifyContent:"center",
    width: Metrics.screenWidth - 88,
    height:45,
    backgroundColor:Colors.facebookButton,
    borderRadius:22,
    flexDirection:'row',
  },
  loginGoogleButton:{
    alignItems:"center",
    justifyContent:"center",
    width:Metrics.screenWidth - 88,
    height:45,
    backgroundColor:Colors.googleButton,
    borderRadius:22,
    flexDirection:'row',
    marginTop:20,
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
  googleButtonImage:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.googleIconBg,
    height:45,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius:22,
  },

  buttonText:{
    flex:0.9,
    alignItems:'flex-start',
    marginLeft:30
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
    marginLeft:44,
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
    width:Metrics.screenWidth - 88,
  },
  formContainer:{
    flexDirection:'column',
    marginTop:20,
    marginBottom:30,
    marginLeft:44,
    marginRight:44
  },
  inputStyle:{
    fontSize:15,
  },
  optionalContainer:{
    flexDirection:'row',
    marginTop:50,
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
    width:Metrics.screenWidth - 88,
    marginLeft:44,
    marginBottom:150,
  },
  formIcon:{
    marginRight:4,
  }

});
