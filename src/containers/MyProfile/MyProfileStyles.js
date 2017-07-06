import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemList: {
    ...Fonts.style.regularFont,
    flex:1,
    color: Colors.black,
    height:36,
    alignItems:"center",
    justifyContent:'center',
  },
  listContainer:{
    flex:1,
    backgroundColor:'white',
    marginTop:20,
    marginLeft:20,
    marginRight:10,
    marginBottom:10,

  },
  avatarContainer:{
    height:135,
    backgroundColor:Colors.headerColor,
    alignItems:'center'
  },
  avatar:{
    width:90,
    height:90,
    borderRadius:45,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    backgroundColor:'white'
  },
  saveButton:{
    color:Colors.white,
    ...Fonts.style.regularFont
  },
  pencil:{
    width:16,
    height:16
  },
  profileInfo:{
    flex:1,
    backgroundColor:Colors.white,
    margin:10,
    width: Metrics.screenWidth-20,
  },
  rightArrow:{
    width:12,
    height:13
  }



});