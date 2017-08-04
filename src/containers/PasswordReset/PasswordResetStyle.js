import { StyleSheet, } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  submitButtonText:{
    color:Colors.reminderButtonColor,
    marginLeft:(Metrics.screenWidth === 320) ? Metrics.screenWidth/4.3 : Metrics.screenWidth/4.2,
    ...Fonts.style.buttonText
  },
  formIcon:{
    marginRight:10
  },
  submitButtonContainer:{
    alignSelf:'center',
    marginTop:30
  }

});