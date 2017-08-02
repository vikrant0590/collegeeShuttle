import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts,  } from '../../theme';

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
    flex:1,
    backgroundColor:Colors.base
  },

  listContainer:{
    flexDirection:'row',
    flex:1,
  },
  profileImageContainer:{
    flex:0.2,
    alignSelf:'flex-start',

  },
  nameContainer:{
    flexDirection:'column',
    flex:0.4,
  },
  tripDetails:{
    flex:0.4,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  profileImage:{
    height:46,
    width:46,
    borderRadius:23,


  },



});