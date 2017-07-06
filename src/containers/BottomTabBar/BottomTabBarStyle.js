import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  scrollTabBarContainerStyle: {
    marginTop: 64,
  },
  tabTextStyle: {
    ...Fonts.style.tabText,
  },
  tabBarIconStyle: {
    marginTop: (Platform.OS === 'ios') ? 5 : 2,
    marginBottom: (Platform.OS === 'ios') ? 5 : 2,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 29,
    width: 30,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: 10,
    flexDirection: 'column'
  },
  tabs: {
    height: Metrics.tabBarHeight,
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: Colors.white
  }
});
