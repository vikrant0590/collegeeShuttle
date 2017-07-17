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
    justifyContent:"center",
    alignItems:"center"
  },
  codeField:{
    flex:1,
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center'
  },
  iconField:{
    flex:1,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center"
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