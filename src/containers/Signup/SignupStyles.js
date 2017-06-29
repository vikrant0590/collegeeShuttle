import { StyleSheet } from 'react-native';
import { ApplicationStyles,Colors } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  titleContainer:{
    marginLeft:148,
    marginTop:64,
  },
  container:{
    flex:1,
    backgroundColor:'#FDFBF6',
  },
  titleTextStyle:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    color:Colors.signupTitle
  },
  loginFacebookContainer:{
    marginTop:65,
    marginLeft:44,
  },
  loginFacebookButton:{
    alignItems:"center",
    justifyContent:"center",
    width:286,
    height:45,
    backgroundColor:Colors.facebookButton,
    borderRadius:22,
    flexDirection:'row',

  },
  facebookButtonText:{
    color:Colors.white,
  },
  facebookButtonImage:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#314190",
    height:45,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius:22,
  },
  googleButtonImage:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#c03b2b",
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
  loginGoogleButton:{
    alignItems:"center",
    justifyContent:"center",
    width:286,
    height:45,
    backgroundColor:Colors.googleButton,
    borderRadius:22,
    flexDirection:'row',
    marginTop:20,
  },
  googleButtonText:{
    color:Colors.white,

  }

});
