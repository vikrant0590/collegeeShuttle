import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts } from '../../theme';

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

});
