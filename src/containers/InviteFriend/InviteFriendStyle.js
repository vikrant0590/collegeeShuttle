import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  navRightCancelBtnText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.bold
  },
});