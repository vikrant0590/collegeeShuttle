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
export default class AllTripCell extends Component {

  constructor() {
    super();
    this.state = {
      availability:false,
      luggageChecked:true,
      refundTickets:true,
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
        availability:!this.state.availability,
        luggageChecked:true,
        refundTickets:true,
      })
    }
  };

  refundTickets =() =>{
    this.setState({
      refundTickets:!this.state.refundTickets,
    })
  };

  onPressNotifyWhenAvailable = () => {
    this.setState({ isNotifyAvailable : !this.state.isNotifyAvailable });
  };


  render() {

    let allTripData = this.props.allTripCellItem;
    let busInformation = this.props.busInformation;
    let bustrip = this.props.staticdata;

    return(
      <View style={styles.container}>
        <View style ={styles.listContainer}>
          <Card>
            <CardItem>
              <TouchableOpacity onPress={ () => this.onPressBooking(allTripData)}>
                <View style={bustrip[0].seats > 0 ? styles.seatAvailable : styles.seatUnavailable}>
                  <View style={styles.busNameRow}>
                    <View style={styles.busNameHeading}>
                      <View style={styles.busNameField}>
                        <Text
                          style = {bustrip[0].seats > 0 ?
                            styles.availableBusNameField :
                            styles.unavailableBusNameField}>
                          {(this.props.roundTrip) ? allTripData.rLocations[0].nm : allTripData.locations[0].nm }
                        </Text>
                      </View>

                      <View style={styles.seatNameField}>
                        <Text style={styles.availableSeatsText}>{allTripData.ts}Seats</Text>
                      </View>
                    </View>
                  </View>

                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 2 :
                    allTripData.locations.length === 2) &&
                  <View style={styles.placeNameRow}>
                    <View style={styles.distanceNameField}>
                      <View style={styles.distancePlace}>
                        <Text style={styles.placeStart}>FSU</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.placeEnd}>SSM</Text>
                      </View>
                    </View>
                  </View>
                  }

                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 4 :
                    allTripData.locations.length === 4) &&
                  <View style={styles.placeNameRow}>
                    <View style={styles.distanceNameField}>
                      <View style={styles.distancePlace}>
                        <Text style={styles.secondListStart}>FSU</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.secondListSecondPlace}>RKV</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.secondthirdPlace}>GBM</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.secondListEndPlace}>SSM</Text>
                      </View>
                    </View>
                  </View>
                  }

                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 3 :
                    allTripData.locations.length === 3) &&
                  <View style={styles.placeNameRow}>

                    <View style={styles.distanceNameField}>
                      <View style={styles.distancePlace}>
                        <Text style={styles.thirdListFirstPlace}>FSU</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.thirdListSecondPlace}>GBM</Text>
                      </View>

                      <View style={styles.distancePlace}>
                        <Text style={styles.thirdListThirdPlace}>SSM</Text>
                      </View>

                    </View>
                  </View>
                  }

                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 1 :
                    allTripData.locations.length === 1) &&
                  <View style={styles.pathRow}>
                    <View style={styles.pathRowContainer}>
                      <View style={styles.startPoint}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                      </View>

                      <View style={styles.singlePathLine}>
                      </View>
                      <Image source={Images.inteligent}/>
                    </View>
                  </View>
                  }
                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 4 :
                    allTripData.locations.length === 4
                  ) &&

                  <View style={styles.pathRow}>

                    <View style={styles.pathRowContainer}>
                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance} />
                      </View>

                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance} />
                      </View>

                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance} />
                        <Image source={Images.inteligent}/>
                      </View>
                    </View>
                  </View>
                  }

                  {((this.props.roundTrip) ?
                    allTripData.rLocations.length === 2 :
                    allTripData.locations.length === 2
                  ) &&
                  <View style={styles.pathRow}>

                    <View style={styles. pathRowContainer}>
                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance} />
                      </View>
                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance} />
                        <Image source={Images.inteligent}/>
                      </View>
                    </View>
                  </View>
                  }

                  <View style={styles.timeIndicatorContainer}>
                    <View style={styles.timeShowContainer}>
                      <View style={styles.arriveTiming}>
                        <Text style={1 > 0 ? styles.activeArriveText : styles.inActiveArriveText}>
                          {moment("12:30").format('hh:mm A')}
                        </Text>
                      </View>

                      <View style={styles.totalTime}>
                        <Text style={styles.totalTimeText}>
                          {moment(allTripData.rLocations[0].tm).format('hh:mm A')}
                        </Text>
                      </View>

                      <View style={styles.reachTime}>
                        <Text style={1 > 0 ? styles.reachTimeText : styles.unReachTimeText}>
                          {allTripData.rLocations[0].ssm}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {(4.5 === 4.5) &&
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
                            {bustrip[0].amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                  }
                  {(allTripData.length === 3) &&
                  <View style={styles.amountRow}>

                    <View style={styles.starContainer}>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                    </View>
                    <View style={styles.ratingRowContainer}>
                      <View style={styles.ratingAmountRow}>
                        <View style={styles.starColumnField}>
                          <View style={styles.starText}>
                            <Text style={styles.starTextColor}>{1}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{1} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={1 > 0 ? styles.activeAmount :styles.inActiveAmount}>
                            {bustrip[0].amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                  }

                  {(bustrip[0].star === 3.5) &&
                  <View style={styles.amountRow}>
                    <View style={styles.starContainer}>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.fullStar} style={styles.starGap}/>
                      <Image source={Images.halfStar}/>
                    </View>
                    <View style={styles.ratingRowContainer}>
                      <View style={styles.ratingAmountRow}>
                        <View style={styles.starColumnField}>
                          <View style={styles.starText}>
                            <Text style={styles.starTextColor}>{allTripData.location.star}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{1} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={allTripData.location.seats > 0 ? styles.activeAmount :styles.inActiveAmount}>
                            {bustrip[0].amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                  }
                  {(0 === 0) &&

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
                      onPress={this.onPressNotifyWhenAvailable}>
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
                  }
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
                    <TouchableOpacity onPress={this.luggageChecked}>
                      <Image source={Images.checkbox} style={styles.checkedBox}/>
                      <Image source={Images.tick} style={styles.tickImage}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={this.luggageChecked}>
                      <View style={styles.uncheckBox}>
                      </View>
                    </TouchableOpacity>
                  }
                </View>

                <View style={styles.luggageOptionHeading}>
                  <Text style={styles.boxTextColor}>Book Additional Luggage</Text>
                  <Text style={styles.boxAmountTextColor}>$28 for Additional luggage</Text>
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
                    $12 for Cancellation charges
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
      </View>
    )
  }
}