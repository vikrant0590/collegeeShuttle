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
    marginBottom:5
  },
  busNameRow:{
    flexDirection:'row',
    flex:0.3
  },
  busNameHeading:{
    flex:1,
    flexDirection:'row'
  },
  busNameField:{
    flex:0.6
  },
  seatNameField:{
    flex: 0.4
  },
  availableSeatsText:{
    ...Fonts.style.universityFont,
    color:Colors.black,
    alignSelf:'flex-end'
  },
  placeNameRow:{
    flex: 0.3,
    marginTop:4,
  },
  pathRow:{
    flex: 0.3,
    marginTop: 2,
  },
  pathRowValue:{
    flexDirection:'row',
    flex:1
  },
  pathRowContainer:{
    flexDirection:'row',
    flex:1
  },
  distanceNameField:{
    flex:1,
    flexDirection:'row'
  },
  distancePlace:{
    flex:1
  },
  placeStart:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
  },
  placeEnd:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    alignSelf:"flex-end"
  },
  secondListStart:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
  },
  secondListSecondPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginLeft:26

  },
  secondListEndPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    alignSelf:'flex-end'
  },
  secondthirdPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginLeft:42
  },
  thirdListFirstPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
  },
  thirdListSecondPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginLeft:45
  },
  thirdListThirdPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    alignSelf:"flex-end"
  },
  startPoint:{
    flexDirection: 'row',

  },
  singlePathLine:{
    height: 0.9,
    flex:1,
    marginLeft: 4,
    marginTop:6,
    backgroundColor:Colors.headingColor, // Temporary
  },
  innerEllipse:{
    marginLeft: -10,
    marginTop:4
  },

  secondMiddleDistance:{
    height: 0.9,
    backgroundColor:Colors.headingColor, // Temporary
    marginTop: 7,
    marginLeft: 4,
    flex:1
  },
  timeIndicatorContainer:{
    flex:0.2
  },
  arriveTiming:{
    flex:0.3
  },
  activeArriveText:{
    color:Colors.black
  },
  inActiveArriveText:{
    color:Colors.availability
  },
  activeAmount:{
    ...Fonts.style.headingText,
    color:Colors.black
  },
  inActiveAmount:{
    ...Fonts.style.headingText, color:Colors.availability
  },

  totalTiming:{
    flex:0.4
  },
  totalTimeText:{
    ...Fonts.style.universityFont,
    alignSelf:'center'
  },
  reachTime:{
    flex:0.3
  },
  reachTimeText:{
    color:Colors.black,
    alignSelf:'flex-end'
  },
  unReachTimeText:{
    color:Colors.availability,
    alignSelf:'flex-end'
  },
  totalTimeContainer:{
    marginLeft:55,
    marginRight:40,
    flex:0.1
  },
  timeShowContainer:{
    flex:1,
    flexDirection:'row'
  },
  amountRow:{
    flexDirection:"column",
    flex:0.5,
    marginTop:20
  },
  amountContainer:{
    marginTop:-30,
    flex: 0.6,
    alignSelf:'flex-end',
  },
  starContainer:{
    flexDirection:"row"
  },
  starText:{
    flexDirection: 'column',
    flex: 0.10
  },
  starGap:{
    marginRight:3
  },
  starTextColor:{
    color:Colors.startColor
  },
  ratingRowContainer:{
    flex: 1,
    marginTop:5,
  },
  starColumnField:{
    flexDirection: 'row',
    flex: 0.4
  },
  ratingColumnField:{
    flexDirection: 'column',
    flex: 0.80,
    alignSelf:'flex-start'
  },
  ratingTextColor:{
    ...Fonts.style.rating,
    color:Colors.black
  },
  seatUnavailableButton:{
    flex:0.6,
    marginTop:10,
    marginLeft:5
  },
  seatUnavailableButtonText:{
    color:Colors.profileForm,
    ...Fonts.style.availabiltyNone
  },
  seatBookingContainer:{
    flex:1,
    height:Metrics.screenHeight/3,
  },
  pickupLocationHeadingContainer:{
    flexDirection:'row',
    flex:0.1
  },
  pickupLocationHeadingText:{
    ...Fonts.style.profileLabel,
    color:Colors.profileInputHeadingColor,
    marginRight:70
  },
  dropLocationHeadingText:{
    ...Fonts.style.profileLabel,
    color:Colors.profileInputHeadingColor,
  },
  pickupPlaceContainer:{
    flex:0.1
  },
  pickDropRow:{
    flexDirection: 'row'
  },
  pickDropPlaceText:{
    marginRight:60,
    ...Fonts.style.availabiltyNone,
    color:Colors.black
  },
  luggageBoxOption:{
    flexDirection:'row',
    flex:0.2
  },
  checkBoxImageContainer:{
    marginTop:10
  },
  tickImage:{
    marginTop:-13,
    marginLeft:4
  },
  luggageOptionHeading:{
    flexDirection:'column',
    marginLeft:15,
    marginTop:10
  },
  boxTextColor:{
    ...Fonts.availabiltyNone,
    color:Colors.black
  },
  boxAmountTextColor:{
    ...Fonts.style.rating,color:Colors.black
  },
  refundBoxOption:{
    flexDirection:'row',
    flex:0.3,
    marginTop:10
  },
  refundOptionHeading:{
    flexDirection:'column',
    marginLeft:15,
  },
  bookButton:{
    width:Metrics.screenWidth/3,
    height:45,
    backgroundColor:Colors.transparent,
    borderRadius:22,
    marginBottom:0,
    alignSelf:"center"
  },
  bookButtonContainer:{
    flex:0.3
  },
  bookButtonText:{
    alignSelf:"center",
    marginTop:10,
    ...Fonts.style.regularFont,
    color:Colors.white
  },
  bookButtonDefaultColor:{
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  seatAvailable: {
    height:Metrics.screenHeight /4.7,
    marginBottom:15,
    backgroundColor:Colors.white,
    width:Metrics.screenWidth/1.2},

  seatUnavailable:{
    height:Metrics.screenHeight /3,
    marginBottom:15,
    backgroundColor:Colors.white,
    width:Metrics.screenWidth/1.2},
  ratingAmountRow:{
    flex:1,
    flexDirection:'column'
  },

  availableBusNameField:{
    ...Fonts.style.allTripInfo,
    color:Colors.black
  },
  unavailableBusNameField:{
    ...Fonts.style.allTripInfo,
    color:Colors.availability
  },


});