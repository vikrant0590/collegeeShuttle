import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';

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
  mobileInfo:{
    flexDirection:'row',
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

  contentText: {
    fontSize: 18
  },
  dropView:{
    flexDirection:'row'
  },
  dropbox:{
    height: 60,
    marginLeft:12
  },
  selectedDropDownOption:{
    width:Platform.OS === 'ios' ? Metrics.screenWidth-75: Metrics.screenWidth - 145
  },
  dropIcon:{
    marginTop:12
  },
  dropIconContainer:{
    width:10
  },
  dropboxInputLine:{
    height:0.6,
    backgroundColor:Colors.profileInputHeadingColor
  },
  parentsInfo:{
    marginTop:25,
    marginLeft:20
  },
  addIcon:{
    marginLeft:15,
    marginRight:15,
    marginBottom:15
  }
});