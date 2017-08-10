import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  List
} from 'native-base';
import { Colors, Fonts, Images } from '../../theme';
import styles from './AllTripCellStyle';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
let allTripData, locationLength, locationArray, rAllTripData, rLocationLength, rLocationArray = undefined;
let startTime, endTime, hours, min, rStatTime, rEndTime, rHours, rMin  = undefined;

export default class AllTripCell extends Component {

  constructor() {
    super();
    this.state = {
      availability:false,
      luggageChecked:false,
      refundTickets:false,
      isNotifyAvailable: false,
      openModal: PropTypes.func
    }
  }

  static propTypes = {
    allTripCellItem: PropTypes.any,
    busInformation: PropTypes.any,
    staticdata: PropTypes.any,
    roundTrip: PropTypes.any
  };

  onPressBooking = (item)=> {
    if(item){
      this.setState({
        availability:!this.state.availability
      });
    }
  };

  refundTickets =() =>{
    this.setState({
      refundTickets:!this.state.refundTickets,
    });
  };

  OnluggageChecked = () => {
    this.setState({
      luggageChecked:!this.state.luggageChecked,
    });
  };

  onPressNotifyWhenAvailable = () => {
    this.setState({ isNotifyAvailable : !this.state.isNotifyAvailable });
  };


  render() {



    if(this.props.roundTrip && this.state.availability){
      rAllTripData = this.props.allTripCellItem.rTrips;
      rLocationArray = rAllTripData[0].rLocations;
      rLocationLength = rLocationArray.length;
    } else {
      allTripData = this.props.allTripCellItem.trips;
      locationArray = allTripData[0].locations;
      locationLength = locationArray.length;
    }

    let busInformation = this.props.busInformation;
    let bustrip = this.props.staticdata;

    const tripPoints = [];
    const tripPointsDesc = [];
    if(locationArray){
      startTime = moment(locationArray[0].tm).format("HH:mm A");
      endTime = moment(locationArray[locationLength - 1].tm).format("HH:mm A");
      hours = moment.utc(moment(endTime, "HH:mm").diff(moment(startTime, "HH:mm"))).format("HH");
      min = moment.utc(moment(endTime, "HH:mm").diff(moment(startTime, "HH:mm"))).format("mm");


      let flexContent = { flex: 1, marginBottom: 10, justifyContent: 'space-between'};

      locationArray.filter((fltr) => fltr.ty === 'pick').sort(
        function(a, b){
          return a.idx - b.idx
        }).forEach((location) => {
        let routeAbberivation='';
        location.nm.split(" ").forEach((item) => {
          routeAbberivation += item.substring(0, 1);
        });

        tripPointsDesc.push(
          <View style={flexContent}>
            <Text style={{
              textAlign: 'left',
              fontSize: Fonts.size.medium,
              fontFamily: Fonts.lato.light,
              color: Colors.timeColor}} numberOfLines={2} key={locationArray}>{routeAbberivation}</Text>
          </View>
        );
        tripPoints.push(
          <View style={styles.pointBackgroundViewStyle}>
            <Image source={Images.ellipseOuter} style={styles.backgroundViewImageStyle}>
              <Image source={Images.ellipse} style={{ alignSelf: 'center', marginTop: 1 }} key={location}/>
            </Image>
          </View>
        );
      });

      let index = 0;
      let length = locationArray.filter((fltr) => fltr.ty === 'drop').length;
      locationArray.filter((fltr) => fltr.ty === 'drop').sort(
        function(a, b) {
          return a.idx - b.idx
        }).forEach((location) => {
        let flexContent = { flex: 1, marginBottom: 10, justifyContent: 'space-between'};
        let routeAbberivation='';
        location.nm.split(" ").forEach((item) => {
          routeAbberivation += item.substring(0, 1);
        });
        const alignTxt = (index === (length - 1) ? 'right' : 'center');
        tripPointsDesc.push(
          <View style={flexContent}>
            <Text
              style={{
                textAlign: alignTxt,
                fontSize: Fonts.size.medium,
                fontFamily: Fonts.lato.light,
                color: Colors.timeColor}} numberOfLines={2} key={locationArray}>{routeAbberivation}</Text>
          </View>
        );
        tripPoints.push(
          <View style={styles.pointBackgroundViewStyle}>
            <Image source={Images.ellipseOuter} style={styles.backgroundViewImageStyle}>
              <Image source={Images.inteligent} style={{ alignSelf: 'center', marginTop: 1 }} key={location}/>
            </Image>
          </View>
        );
        index += 1;
      });

    }


    const rTripPoints = [];
    const rTripPointsDesc = [];
    if(rLocationArray){

      rStatTime = moment(rLocationArray[0].tm).format("HH:mm A");
      rEndTime = moment(rLocationArray[rLocationLength - 1].tm).format("HH:mm A");
      rHours = moment.utc(moment(rEndTime, "HH:mm").diff(moment(rStatTime, "HH:mm"))).format("HH");
      rMin = moment.utc(moment(rEndTime, "HH:mm").diff(moment(rStatTime, "HH:mm"))).format("mm");

      rLocationArray.filter((fltr) => fltr.ty === 'pick').sort(
        function(a, b){
          return a.idx - b.idx
        }).forEach((location) => {
        let flexContent = { flex: 1, marginBottom: 10, justifyContent: 'space-between'};
        let routeAbberivation='';
        location.nm.split(" ").forEach((item) => {
          routeAbberivation += item.substring(0, 1);
        });

        rTripPointsDesc.push(
          <View style={flexContent}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: Fonts.size.medium,
                fontFamily: Fonts.lato.light,
                color: Colors.timeColor}} numberOfLines={2} key={rLocationArray}>{routeAbberivation}</Text>
          </View>
        );
        rTripPoints.push(
          <View style={styles.pointBackgroundViewStyle}>
            <Image source={Images.ellipseOuter} style={styles.backgroundViewImageStyle}>
              <Image source={Images.ellipse} style={{ alignSelf: 'center', marginTop: 1 }} key={location}/>
            </Image>
          </View>
        );
      });

      rLocationArray.filter((fltr) => fltr.ty === 'drop').sort(
        function(a, b) {
          return a.idx - b.idx
        }).forEach((location) => {
        let flexContent = { flex: 1, marginBottom: 10, justifyContent: 'space-between'};
        let routeAbberivation='';
        location.nm.split(" ").forEach((item) => {
          routeAbberivation += item.substring(0, 1);
        });

        rTripPointsDesc.push(
          <View style={flexContent}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: Fonts.size.medium,
                fontFamily: Fonts.lato.light,
                color: Colors.timeColor}} numberOfLines={2} key={rLocationArray}>{routeAbberivation}</Text>
          </View>
        );
        rTripPoints.push(
          <View style={styles.pointBackgroundViewStyle}>
            <Image source={Images.ellipseOuter} style={styles.backgroundViewImageStyle}>
              <Image source={Images.inteligent} style={{ alignSelf: 'center', marginTop: 1 }} key={location}/>
            </Image>
          </View>
        );
      });
    }




    return(
      <View style={styles.container}>
        <View style ={styles.listContainer}>
          <Card>
            <CardItem>
              <TouchableOpacity onPress={() => this.onPressBooking(allTripData)}>
                <View style={bustrip[0].seats > 0 ? styles.seatAvailable : styles.seatUnavailable}>
                  <View style={styles.busNameRow}>
                    <View style={styles.busNameHeading}>
                      <View style={styles.busNameField}>
                        <Text
                          style = {bustrip[0].seats > 0 ?
                            styles.availableBusNameField :
                            styles.unavailableBusNameField}>
                          {locationArray[0].nm}
                        </Text>
                      </View>

                      <View style={styles.seatNameField}>
                        <Text style={styles.availableSeatsText}>{allTripData[0].ts} Seats</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.pointViewStyle}>
                    <View style={styles.descTextViewStyle}>
                      {tripPointsDesc}
                    </View>
                    <View style={styles.lineDrawerStyle} />
                    <View style={styles.tipPointStyle}>
                      {tripPoints}
                    </View>
                  </View>

                  <View style={styles.timeIndicatorContainer}>
                    <View style={styles.timeShowContainer}>
                      <View style={styles.arriveTiming}>
                        <Text style={1 > 0 ? styles.activeArriveText : styles.inActiveArriveText}>
                          {startTime}
                        </Text>
                      </View>

                      <View style={styles.totalTime}>
                        <Text style={styles.totalTimeText}>
                          {hours} hrs {min} mins
                        </Text>
                      </View>

                      <View style={styles.reachTime}>
                        <Text style={1 > 0 ? styles.reachTimeText : styles.unReachTimeText}>
                          {endTime}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.amountRow}>

                    <View style={styles.starContainer}>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.halfStar}/>
                    </View>

                    <View style={styles.ratingRowContainer}>
                      <View style={styles.ratingAmountRow}>
                        <View style={styles.starColumnField}>
                          <View style={styles.starText}>
                            <Text style={styles.starTextColor}>{bustrip[0].star}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{bustrip[1].rating} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={1 > 0 ? styles.activeAmount :styles.inActiveAmount}>
                                $
                            {
                              parseInt(allTripData[0].price) +
                              (this.state.luggageChecked ? 12 : 0 ) +
                              (this.state.refundTickets ? 15 : 0 )
                            }
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                  <View style={styles.seatUnavailableButton}>
                    <Button
                      rounded
                      bordered
                      transparent
                      style={(this.state.isNotifyAvailable) ?
                        {
                          backgroundColor:Colors.reminderButtonColor,
                          borderColor:Colors.reminderButtonColor
                        }
                        :
                        {
                          borderColor:Colors.reminderButtonColor,
                          backgroundColor:Colors.white
                        }
                      }
                      onPress={this.onPressNotifyWhenAvailable.bind(this)}>
                      {(!this.state.isNotifyAvailable) ?
                        <Text
                          style={styles.seatUnavailableButtonText}>Notify when available</Text>
                        :
                        <Text
                          style={{
                            ...Fonts.style.availabiltyNone,
                            color: Colors.white,
                          }}>Request sent</Text>
                      }
                    </Button>
                  </View>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </View>

        {(this.state.availability && bustrip[0].index === 0) &&
        <Card style={{ marginTop: -5, marginBottom: 10 }}>
          <CardItem>
            <View style={styles.seatBookingContainer}>
              <View style={styles.pickupLocationHeadingContainer}>
                <Text style={styles.pickupLocationHeadingText}>
                  BOARDING POINT
                </Text>
                <Text style={styles.dropLocationHeadingText}>
                  DROP
                </Text>
              </View>
              <View style={styles.pickupPlaceContainer}>
                <List
                  dataArray={busInformation}
                  renderRow={(items) =>
                    <View style={styles.pickDropRow}>
                      <Text style={styles.pickDropPlaceText}>
                        {items.boardingpoint}
                      </Text>
                      <Text style={styles.pickDropPlaceText}>{items.drop}</Text>
                    </View>
                  }/>
              </View>

              <View style={styles.luggageBoxOption}>
                <View style={styles.checkBoxImageContainer}>
                  {(this.state.luggageChecked) ?
                    <TouchableOpacity onPress={this.OnluggageChecked}>
                      <Image source={Images.checkbox} style={styles.checkedBox}/>
                      <Image source={Images.tick} style={styles.tickImage}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={this.OnluggageChecked}>
                      <View style={styles.uncheckBox}>
                      </View>
                    </TouchableOpacity>
                  }
                </View>

                <View style={styles.luggageOptionHeading}>
                  <Text style={styles.boxTextColor}>Book Additional Luggage</Text>
                  <Text style={styles.boxAmountTextColor}>$12 for Additional luggage</Text>
                </View>
              </View>

              <View style={styles.refundBoxOption}>
                <View style={styles.checkBoxImageContainer}>
                  {(this.state.refundTickets) ?
                    <TouchableOpacity onPress={this.refundTickets}>
                      <Image source={Images.checkbox} style={styles.checkedBox}/>
                      <Image source={Images.tick} style={styles.tickImage}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={this.refundTickets}>
                      <View style={styles.uncheckBox}>
                      </View>
                    </TouchableOpacity>
                  }
                </View>
                <View style={styles.refundOptionHeading}>
                  <Text style={styles.boxTextColor}>
                    Refundable Tickets
                  </Text>
                  <Text style={styles.boxAmountTextColor}>
                    $15 for Cancellation charges
                  </Text>
                </View>
              </View>
              <View style={styles.bookButtonContainer}>
                <LinearGradient
                  colors={['#FC214F','#D32735']}
                  style={styles.bookButton}>
                  <TouchableOpacity
                    onPress={this.props.openModal}
                    style={styles.bookButtonDefaultColor}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </CardItem>
        </Card>
        }
        {this.state.availability && this.props.roundTrip &&
        <Card style={{ marginBottom: 15 }}>
          <CardItem>
            <View style={bustrip[0].seats > 0 ? styles.seatAvailable : styles.seatUnavailable}>
              <View style={styles.busNameRow}>
                <View style={styles.busNameHeading}>
                  <View style={styles.busNameField}>
                    <Text
                      style = {bustrip[0].seats > 0 ?
                        styles.availableBusNameField :
                        styles.unavailableBusNameField}>
                      {rLocationArray[0].nm}
                    </Text>
                  </View>

                  <View style={styles.seatNameField}>
                    <Text style={styles.availableSeatsText}>{rAllTripData[0].ts} Seats</Text>
                  </View>
                </View>
              </View>

              <View style={styles.pointViewStyle}>
                <View style={styles.descTextViewStyle}>
                  {tripPointsDesc}
                </View>
                <View style={styles.lineDrawerStyle} />
                <View style={styles.tipPointStyle}>
                  {tripPoints}
                </View>
              </View>

              <View style={styles.timeIndicatorContainer}>
                <View style={styles.timeShowContainer}>
                  <View style={styles.arriveTiming}>
                    <Text style={1 > 0 ? styles.activeArriveText : styles.inActiveArriveText}>
                      {rStatTime}
                    </Text>
                  </View>

                  <View style={styles.totalTime}>
                    <Text style={styles.totalTimeText}>
                      {rHours} hrs {rMin} mins
                    </Text>
                  </View>

                  <View style={styles.reachTime}>
                    <Text style={1 > 0 ? styles.reachTimeText : styles.unReachTimeText}>
                      {rEndTime}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.amountRow}>

                <View style={styles.starContainer}>
                  <Image source={Images.fullStar} style={styles.starGap}/>
                  <Image source={Images.fullStar} style={styles.starGap}/>
                  <Image source={Images.fullStar} style={styles.starGap}/>
                  <Image source={Images.fullStar} style={styles.starGap}/>
                  <Image source={Images.halfStar}/>
                </View>

                <View style={styles.ratingRowContainer}>
                  <View style={styles.ratingAmountRow}>
                    <View style={styles.starColumnField}>
                      <View style={styles.starText}>
                        <Text style={styles.starTextColor}>{bustrip[0].star}</Text>
                      </View>
                      <View style={styles.ratingColumnField }>
                        <Text style={styles.ratingTextColor}>{bustrip[1].rating} Ratings</Text>
                      </View>
                    </View>
                    <View style={styles.amountContainer}>
                      <Text style={1 > 0 ? styles.activeAmount :styles.inActiveAmount}>
                        ${rAllTripData[0].price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </CardItem>
        </Card>
        }
      </View>
    )
  }
}