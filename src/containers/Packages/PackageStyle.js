import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  offerContainer:{
    marginTop:40,
    justifyContent:'center',
    alignItems:'center'
  },
  headingTextContainer:{
    marginTop:20,
    justifyContent:"center",
    alignItems:'center'
  },
  instructionContainer:{
    marginTop:10,
    justifyContent:"center",
    alignItems:'center'
  },
  headingText:{
    ...Fonts.style.headingText,
    color:Colors.headingColor
  },
  instruction:{
    ...Fonts.style.profileInput,
    color:Colors.options
  },
  codelabel:{
    ...Fonts.style.profileLabel,
    color:Colors.profileInputHeadingColor
  },
  secrets:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  secretCode:{
    ...Fonts.style.secretCode,
    fontFamily:'Roboto-Regular'
  },
  linkLabel:{
    marginTop:30,
    justifyContent:"center",
    alignItems:'center'
  },
  linkContainer:{
    marginTop:15,
    justifyContent:"center",
    alignItems:'center'
  },
  linkk:{
    ...Fonts.style.profileInput,
    color:Colors.headingColor
  },
  iconContainer:{
    flex:1,
    flexDirection:"row",
    marginTop:-30,
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    marginRight:50,
  }


});