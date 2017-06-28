import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  linearGradient: {
    flex: 1
  },
  logo: {
    //marginTop: 100,
    paddingTop: 60,
    paddingBottom : 60,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  introText: {
    backgroundColor:'transparent',
    color:'#fff',
    textAlign:'center',
    fontSize: 18
  }
});
