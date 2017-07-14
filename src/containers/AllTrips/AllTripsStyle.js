import { StyleSheet } from 'react-native';
import { ApplicationStyles, } from '../../theme';
import { Colors, Metrics, Fonts  } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  dateRow:{
    flexDirection:'row'
  },
  backDate:{
    marginRight:25,
    marginTop:4
  },
  nextDate:{
    marginLeft:25,
    marginTop:4
  },
  container:{
    margin:10,
    flex:1
  },
  listContainer:{
    flex:1,
  },
  busNameRow:{
    flexDirection:'row',
    flex:0.3
  },
  availableSeatsText:{
    ...Fonts.style.universityFont,
    marginLeft:Metrics.screenWidth -240
  },
  placeNameRow:{
    flexDirection: 'row',
    flex: 0.2
  },
  placeStart:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginRight: Metrics.screenWidth / 1.3 - 2
  },
  placeEnd:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm
  },
  secondListStart:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginRight: Metrics.screenWidth /4.4
  },
  secondListMiddlePlace:{
    ...Fonts.style.distancePoint, color: Colors.profileForm,marginRight: Metrics.screenWidth /4.5
  },
  secondListEndPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm
  },
  thirdListPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginRight: Metrics.screenWidth /2.9+ 7
  },
  startPoint:{
    flexDirection: 'row'
  },
  singlePathLine:{
    height: 0.9,
    width:Metrics.screenWidth/1.2 -10,
    marginLeft: 4,
    marginTop:6,
    backgroundColor:"red" // temporary
  },
  innerEllipse:{
    marginLeft: -10,
    marginTop:4
  }


});