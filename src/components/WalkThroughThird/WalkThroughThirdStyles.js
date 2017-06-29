import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  linearGradient: {
    flex: 1
  },
  bag: {
    //marginTop: 100,
    paddingTop: 60,
    paddingBottom : 60,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loginSection: {
    alignItems: 'center',
  },
  introText: {
    backgroundColor:'transparent',
    color:'#fff',
    textAlign:'center',
    fontSize: 18
  },
  registerButton: {
    backgroundColor:'#FFF',
    marginTop: 20,
    height:60,
    width: 200,
    justifyContent:'center',
    alignSelf:'center'
  },
  registerButtonText : {
    backgroundColor:'transparent',
    color:'#000',
    textAlign:'center',
    fontSize: 18,
  }
});
