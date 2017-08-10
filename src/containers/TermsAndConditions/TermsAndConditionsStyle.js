
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerbox:{
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    marginBottom:15
  },
  heading:{
    marginTop:5,
    fontSize:Fonts.size.base,
    fontFamily:Fonts.lato.bold,
    marginBottom:10
  },
  descriptionText:{
    fontFamily:Fonts.lato.base,
    color:Colors.black
  },
  zoomText:{
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.semiBold,
    color:Colors.black
  },
  mailAdressText:{
    fontFamily:Fonts.lato.base,
    color:Colors.logout
  }

});