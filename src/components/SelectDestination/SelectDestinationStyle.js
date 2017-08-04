/**
 * Created by Admin on 01/08/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: Metrics.screenHeight - Metrics.screenHeight / 1.1
  },

  SelectDestinationConatiner: {
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10
  },

  SelectDestinationViewStyle: {
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginLeft: 20,
    marginTop: 120,
    marginRight: 20,
    marginBottom: 60,

  },
});