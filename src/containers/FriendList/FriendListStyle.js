import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  name: {
    ...Fonts.style.regularFont,
    color: Colors.black,
  },
  university:{
    ...Fonts.style.universityFont,
    color: Colors.black,
  },
  trip:{
    ...Fonts.style.regularFont,
    color: Colors.packageHeadingColor,
    marginTop:10

  },
  container:{
    height:Metrics.screenHeight/2,
    backgroundColor:Colors.transparent,
    margin:15
  },
  listContainer:{
    flexDirection:'row',
    flex:1
  },
  profileImageContainer:{
    flex:0.2
  },
  nameContainer:{
    flexDirection:'column',
    flex:0.4,
  },
  tripDetails:{
    flex:0.4
  },
  profileImage:{
    height:46,
    width:46,
    borderRadius:23,
    backgroundColor:Colors.black
  },



});