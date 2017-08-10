import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../theme/index';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  cardViewStyle: {
    height:Metrics.screenHeight/3,
    backgroundColor:Colors.base,
  }

});