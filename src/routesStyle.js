/**
 * Created by Admin on 21/07/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from './theme';


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tabBarStyle: {
    backgroundColor: Colors.base,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.tabBarHeight,
    shadowColor: Colors.tabBarbgColor,
    shadowOffset: {
      marginTop: 2.5,
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    elevation: 2,
  },
  tabBarSelectedItemStyle: {
    backgroundColor: Colors.transparent,
  },
});
