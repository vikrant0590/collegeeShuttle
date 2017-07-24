import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    flexDirection:'column'
  },
  noticeField:{
    flex:1,
    flexDirection:'column',
    alignItems:"center",
    height:Metrics.screenHeight/5.5,
    justifyContent:'flex-start',
  },
  codeField:{
    flex:1,
    flexDirection:"column",
    alignItems:'center',
    height:Metrics.screenWidth/3,
  },
  imageField:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:Metrics.screenHeight/4.5,
  },
  iconField:{
    flex:1,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"flex-end",
    marginTop:10,
    height:Metrics.screenWidth/4,
  },
  headingText:{
    ...Fonts.style.headingText,
    color:Colors.headingColor,
    marginBottom:10
  },
  instruction:{
    ...Fonts.style.profileInput,
    color:Colors.options
  },
  codelabel:{
    ...Fonts.style.profileLabel,
    color:Colors.profileInputHeadingColor,
    marginTop:20
  },
  secrets:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  secretCode:{
    ...Fonts.style.secretCode,
    fontFamily:'Roboto-Regular',
    marginTop:10
  },

  links:{
    ...Fonts.style.profileInput,
    color:Colors.headingColor,
    marginTop:10
  },

  icon:{
    marginRight:50,
  }


});