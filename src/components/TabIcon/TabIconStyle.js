/**
 * Created by Admin on 21/07/17.
 */
import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Metrics } from '../../theme';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tabIcon: {
    ...Platform.select({
      ios:{
        width: (Metrics.screenWidth === 320) ? 30 : 32,
        height: (Metrics.screenWidth === 320) ? 30 : 32,
        marginBottom: (Metrics.screenWidth === 320) ? 2 : 2,
        marginTop: (Metrics.screenWidth === 320) ? 2 : 2,
        resizeMode: 'contain'
      },
      android: {
        marginBottom: 2,
        marginTop: 2,
        width: 32,
        height: 32,
        resizeMode: 'contain'
      },
    }),

  },
  tabText: {
    fontFamily:Fonts.lato.base,
    fontSize:Fonts.size.tab
  },
});