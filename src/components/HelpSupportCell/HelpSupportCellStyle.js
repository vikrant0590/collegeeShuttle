
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  listHeading:{
    ...Fonts.style.regularFont,
    color:Colors.black,
    height:30,
  }

});