import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  cardViewStyle: {
    height:Metrics.screenHeight/3
  }

});