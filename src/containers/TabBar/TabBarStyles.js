import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  homeMainContainer: {
    flex: 1,
  },
  homeTopTabSelectedText: {
    color: 'red',
  },
  homeTopTabUnselectedText: {
    color: 'black',
  },
  homeTopTabBarTabStyle: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor:'#B4541C',
    borderBottomColor: Colors.white,
  },
  tabView: {
    flex: 1,
    backgroundColor:Colors.base,
  },
});