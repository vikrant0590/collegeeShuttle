import { StyleSheet, } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  formIcon:{
    marginRight:4,
  },
  submitButtonText:{
    color:Colors.reminderButtonColor,
    marginLeft:(Metrics.screenWidth === 320) ?Metrics.screenWidth/4.5 : Metrics.screenWidth/4.2,
    ...Fonts.style.buttonText
  },
  submitButton:{
    alignSelf:'center',
    marginTop:20
  }


});