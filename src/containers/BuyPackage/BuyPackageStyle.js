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
  }

});