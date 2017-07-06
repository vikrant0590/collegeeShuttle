import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  profileInfo:{
    flex:1,
    backgroundColor:Colors.white,
    margin:10,
    width: Metrics.screenWidth-20,
  },
  formFirstRow:{
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    marginBottom: 10
  },
  inputContainer:{
    flex:1,
  },
  dropdownFieldContainer:{
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 5
  },
  dobContainer:{
    width: Metrics.screenWidth / 2,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 20,
    marginBottom: 10
  },
  doblabel:{
    marginLeft: 20,
    height: 20
  },
  dob:{
    flex:0.2,
  },
  year:{
    flex:0.3,
  },


});