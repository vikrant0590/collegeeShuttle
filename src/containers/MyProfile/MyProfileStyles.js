import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemList: {
    ...Fonts.style.regularFont,
    flex:1,
    color: Colors.black,
    height:36,
    alignSelf:"center",
    justifyContent:'center',
  },
  listContainer:{
    flex:1,
    backgroundColor:Colors.transparent,
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,

  },
  avatarContainer:{
    flex:1,
    height:(Platform.OS ==='ios' ?(Metrics.screenWidth === 320) ? Metrics.screenHeight/4 :
      Metrics.screenHeight/4.7 : Metrics.screenHeight/4.2),
    backgroundColor:Colors.transparent,
    alignItems:'center',

  },
  editPicture:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    width:90,
    height:90,
    borderRadius:45,
    borderColor:Colors.white,
    marginBottom:15,
  },
  avatarImage:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:Colors.white
  },

  saveButton:{
    color:Colors.white,
    ...Fonts.style.regularFont,
    marginRight:20,
    marginTop:15
  },
  pencil:{
    width:16,
    height:16
  },
  profileInfo:{
    flex:1,
    backgroundColor:Colors.base,
    margin:10,
    width: Metrics.screenWidth-20,
  },
  rightArrow:{
    width:12,
    height:13
  },
  avatarImage:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:Colors.white
  }


});