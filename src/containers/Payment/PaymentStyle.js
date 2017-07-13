import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  RoundTripWeeklyContainer: {},

  ProcessBtn: {
    flex: 1,
    height: 52,
    width: Metrics.screenWidth/2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#FF214F',
    borderRadius: 26
  },

  ProcessBtnText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.bold,
    color: Colors.white,
    alignSelf: 'center'
  },

});