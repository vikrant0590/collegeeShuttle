/**
 * Created by Admin on 17/07/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  googleContainer: {

  },

  googleLoginBtn:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    width:Metrics.screenWidth/1.4,
    height:45,
    backgroundColor:Colors.googleButton,
    borderRadius:22,
    flexDirection:'row',
    marginTop:20,
  },

  googleLoginLogoView: {
    flex: 0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.googleIconBg,
    height:45,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius:22,
  },

  googlelogo:{
    height:17,
    width:17
  },

  googleLoginTextView:{
    flex:0.8,
    alignItems:'flex-start',
    marginLeft:10
  },

  googleLoginText:{
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.medium,
    color:Colors.white,
  },

});