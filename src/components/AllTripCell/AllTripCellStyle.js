import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  listContainer:{
    flex:1,
    marginBottom:5
  },
  seatAvailable: {
    height:Metrics.screenHeight /3,
    marginBottom:15,
    backgroundColor:Colors.white,
    width:Metrics.screenWidth/1.2
  },
  seatUnavailable:{
    height:Metrics.screenHeight /3,
    marginBottom:15,
    backgroundColor:Colors.white,
    width:Metrics.screenWidth/1.2
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
    flex:0.7
  },
  availableBusNameField:{
    ...Fonts.style.allTripInfo,
    color:Colors.black
  },
  unavailableBusNameField:{
    ...Fonts.style.allTripInfo,
    color:Colors.availability
  },
  seatNameField:{
    flex: 0.3
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
    marginLeft:(Metrics.screenWidth === 320)?20:26,
  },
  secondthirdPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginLeft:(Metrics.screenWidth === 320) ?34 :45,
  },
  secondListEndPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    alignSelf:'flex-end'
  },

  thirdListFirstPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
  },
  thirdListSecondPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    marginLeft:(Metrics.screenWidth === 320) ?40 :49,
  },
  thirdListThirdPlace:{
    ...Fonts.style.distancePoint,
    color: Colors.profileForm,
    alignSelf:"flex-end"
  },
  pathRow:{
    flex: 0.3,
    marginTop: 2,
  },
  pathRowContainer:{
    flexDirection:'row',
    flex:1
  },
  startPoint:{
    flexDirection: 'row',
  },
  innerEllipse:{
    marginLeft: -10,
    marginTop:4
  },
  singlePathLine:{
    height: 0.9,
    flex:1,
    marginLeft: 4,
    marginTop:6,
    backgroundColor:Colors.thinLineColor,
  },
  pathRowValue:{
    flexDirection:'row',
    flex:1
  },
  secondMiddleDistance:{
    height: 0.9,
    backgroundColor:Colors.thinLineColor,
    marginTop: 7,
    marginLeft: 4,
    flex:1
  },
  timeIndicatorContainer:{
    flex:0.2
  },
  timeShowContainer:{
    flex:1,
    flexDirection:'row'
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
  amountRow:{
    flexDirection:"column",
    flex:0.5,
    marginTop:20
  },
  starGap:{
    marginRight:3
  },
  ratingRowContainer:{
    flex: 1,
    marginTop:5,
  },
  ratingAmountRow:{
    flex:1,
    flexDirection:'column'
  },
  starColumnField:{
    flexDirection: 'row',
    flex: 0.4
  },
  starText:{
    flexDirection: 'column',
    flex: 0.10
  },
  starTextColor:{
    color:Colors.startColor
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
  amountContainer:{
    marginTop:(Platform.OS === 'ios' ? -30 : -40),
    flex: 0.6,
    alignSelf:'flex-end',
  },
  activeAmount:{
    ...Fonts.style.headingText,
    color:Colors.black
  },
  inActiveAmount:{
    ...Fonts.style.headingText, color:Colors.availability
  },
  starContainer:{
    flexDirection:"row"
  },
  seatUnavailableButton:{
    flex:0.6,
    marginTop:10,
    marginLeft:0
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
    flexDirection:'row',
    marginTop:10,
    flex:0.1
  },
  uncheckBox:{
    backgroundColor:Colors.clockColor,
    height:(Platform.OS==='ios' ? 18.4 :24),
    width:(Platform.OS==='ios' ? 18.4 : 23)
  },
  checkedBox:{
    height:(Platform.OS==='ios' ? 19.4 : 24),
    width:(Platform.OS==='ios' ? 19.4: 23),
  },
  tickImage:{
    marginTop:(Platform.OS ==='ios' ? -14 : -17),
    marginLeft:(Platform.OS==='ios'? 4 : 6),
    paddingBottom:5
  },
  luggageOptionHeading:{
    flex:0.7,
    flexDirection:'column',
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
    marginTop:10,
    flex:0.7,
    flexDirection:'column',
  },
  bookButtonContainer:{
    flex:0.3
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
  bookButton:{
    width:Metrics.screenWidth/3,
    height:45,
    backgroundColor:Colors.transparent,
    borderRadius:22,
    marginBottom:0,
    alignSelf:"center"
  },
  seatUnavailableButtonText:{
    color:Colors.profileForm,
    ...Fonts.style.availabiltyNone
  },
  pointViewStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  descTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lineDrawerStyle: {
    backgroundColor: Colors.thinLineColor,
    height: 1.6,
  },
  tipPointStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  pointBackgroundViewStyle:{
    height: 15,
    width: 15,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  backgroundViewImageStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },

});