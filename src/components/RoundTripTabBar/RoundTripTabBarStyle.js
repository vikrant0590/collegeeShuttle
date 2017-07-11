import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.roundTripWeeklyBGColor
  },
  tabs: {
    height: 40,
    flexDirection: 'row',
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: Colors.BaseColor
  },
  tabTextStyle: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.bold,
    fontWeight: '600'
  },
});