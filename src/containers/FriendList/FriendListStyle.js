import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemList: {
    ...Fonts.style.regularFont,
    color: Colors.black,
    alignItems:"center",
    justifyContent:'center',
    marginLeft:25
  },
  name: {
    ...Fonts.style.regularFont,
    color: Colors.black,
    marginLeft:15
  },
  university:{
    ...Fonts.style.universityFont,
    color: Colors.black,
    marginLeft:15
  },
  trip:{
    ...Fonts.style.regularFont,
    color: Colors.packageHeadingColor,
    marginTop:5,
    marginLeft:Metrics.screenWidth - 320
  },
  listContainer:{
    height:290,
    backgroundColor:Colors.white,
    margin:10
  },
  profileImage:{
    height:46,
    width:46,
    borderRadius:23,
    backgroundColor:'gray'
  }


});