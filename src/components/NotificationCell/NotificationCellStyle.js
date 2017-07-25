/**
 * Created by Admin on 25/07/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  requestTitleText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black
  },
  requestDescriptionText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.thin,
    color: Colors.black
  }

});