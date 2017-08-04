import { StyleSheet } from 'react-native';
import { ApplicationStyles, } from '../../theme';
import { Colors, Metrics, Fonts  } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  dateRow:{
    flexDirection:'row'
  },
  backDate:{
    marginRight:25,
    marginTop:4
  },
  nextDate:{
    marginLeft:25,
    marginTop:4
  },
  container:{
    margin:10,
    flex:1
  },
  timeIndicatorContainer:{
    flex:0.2
  },
  totalTiming:{
    flex:0.4
  },
  totalTimeContainer:{
    marginLeft:55,
    marginRight:40,
    flex:0.1
  },


});