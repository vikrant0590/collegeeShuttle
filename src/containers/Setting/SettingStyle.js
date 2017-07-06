import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  listContainer:{
    flex:1,
    margin:17,
    backgroundColor:Colors.white
  },
  listHeadingContainer: {
    height:39,
    backgroundColor:Colors.settingHeadingTextColor,
    alignItems:'center',
    justifyContent:"center"
  },
  listHeadingText:{
    ...Fonts.style.settingHeadingText,
    color:Colors.white
  },
  listItems:{
    height:60,
  },
  listText:{
    ...Fonts.style.regularFont,
    color:Colors.black,
    height:30,
  },
  rightArrow:{
    width:12,
    height:13
  }


});