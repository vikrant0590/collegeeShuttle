import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  choice:{
    ...Fonts.style.regularFont,
    color:Colors.packageHeadingColor
  },
  price:{
    ...Fonts.style.price,
    color:Colors.black,
    alignSelf:'flex-end'
  },
  ellipse:{
    margin:9
  },
  tripContainer:{
    flex:1,
    margin:10
  },
  tripItem:{
    flex:1,
    height: (Platform.OS === 'ios') ? Metrics.screenHeight /4.7 : Metrics.screenHeight/ 4.9,
    backgroundColor:Colors.white,
    marginLeft:10,
    flexDirection:'column'

  },
  buyNowContainer:{
    marginTop:10
  },
  tripDescription:{
    flex:0.6,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
  },
  tripHeading:{
    flexDirection:'row',flex:0.4
  },
  tripHeadingItem:{
    flex:1,flexDirection:'row'
  },
  tripDetails:{
    flexDirection:'column', flex:1
  },
  bookButton:{
    width:Metrics.screenWidth/3,
    height:45,
    backgroundColor:Colors.transparent,
    borderRadius:22,
    marginBottom:0,
    alignSelf:"center"
  },
  bookButtonDefaultColor:{
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  bookButtonText:{
    alignSelf:"center",
    marginTop:10,
    ...Fonts.style.regularFont,
    color:Colors.white
  },

});