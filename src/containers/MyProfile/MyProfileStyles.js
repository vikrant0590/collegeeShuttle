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
    ...Platform.select({
      ios:{
        height: (Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ?
          Metrics.screenHeight/2.5 : Metrics.screenHeight/2.7 : Metrics.screenHeight/2.9,
      },
      android:{
        height: Metrics.screenHeight/4,
      }
    }),

    flex:1,
    backgroundColor:Colors.transparent,
    alignItems:'center',

  },
  editPicture:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    ...Platform.select({
      ios:{
        width:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 74 : 80 : 90,
        height:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 74 : 80 : 90,
        borderRadius:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 37 : 40 : 45,
        borderColor:Colors.white,
        borderWidth: 1.5,
        marginBottom:15
      },
      android:{
        width:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 70 : 80 : 90,
        height:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 70 : 80 : 90,
        borderRadius:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 35 : 40 : 45,
        borderColor:Colors.white,
        marginBottom:15,
        borderWidth: 1.5,
      }
    }),

  },
  avatarImage:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:1.5,
    borderColor:Colors.white,
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


});