/**
 * Created by Admin on 17/07/17.
 */

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  facebookBtnContainer:{

  },

  facebookLoginBtn:{
    alignItems:"center",
    justifyContent:"center",
    width:Metrics.screenWidth/1.4,
    height:45,
    backgroundColor:Colors.facebookButton,
    borderRadius:22,
    flexDirection:'row',
  },

  facebookLogoView:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.facebookIconBg,
    height:45,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius:22,
  },

  facebookLogo:{
    height:18,
    width:10,
  },

  facebookTextView:{
    flex:0.8,
    alignItems:'flex-start',
    marginLeft:10
  },

  facebookText: {
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.medium,
    color:Colors.white,
  }

});
