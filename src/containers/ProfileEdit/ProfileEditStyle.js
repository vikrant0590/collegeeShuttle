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
  menuTrigger: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    width: Platform.OS === 'ios' ? Metrics.screenWidth-95 : Metrics.screenWidth - 120 ,
    borderColor: '#999',
    padding: 5
  },
  dropdownOptions: {
    marginTop: 0,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 120,
    height: 115,
  },
  dropbox:{
    height: 60,
    marginLeft:10
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
    marginTop:0,
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