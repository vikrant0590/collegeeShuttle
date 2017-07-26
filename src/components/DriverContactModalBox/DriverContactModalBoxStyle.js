/**
 * Created by Admin on 25/07/17.
 */
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: Metrics.screenHeight - Metrics.screenHeight/1.28,
    backgroundColor: Colors.white,
    marginTop: -10,
    marginBottom: -10,
    marginLeft: -10,
    marginRight: -10,
    borderRadius: 5,
  },
  DriverConatiner: {
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10
  },

  DriverViewStyle: {
    borderRadius: 2,
    marginLeft: 15,
    marginRight: 15,
  },


});