/**
 * Created by Admin on 21/07/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../theme';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tabIcon: {
    marginBottom: 2,
    marginTop: 2,
    width: 32,
    height: 32,
    resizeMode: 'contain'
  },
  tabText: {
    fontFamily:Fonts.lato.base,
    fontSize:Fonts.size.tab
  },
});