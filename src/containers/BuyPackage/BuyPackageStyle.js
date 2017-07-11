import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  choice:{
    ...Fonts.style.regularFont,
    marginRight:9,
    color:Colors.packageHeadingColor
  },
  price:{
    ...Fonts.style.price,
    color:Colors.black,
    marginLeft:Metrics.screenWidth - 300
  },
  ellipse:{
    marginRight:9,
    marginTop:9
  },
  tripContainer:{
    flex:1,
    margin:10
  },
  tripItem:{
    height: (Platform.OS === 'ios') ? 120 : 135,
    marginBottom:20,
    backgroundColor:Colors.white
  },
  buyNowContainer:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:20
  },
  tripDescription:{
    flexDirection:"row",
    marginTop:35,
    marginLeft:20
  }

});