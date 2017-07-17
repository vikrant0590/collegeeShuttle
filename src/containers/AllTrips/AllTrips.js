import React,{ Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Header, Container, Content, Left, Right, Button, Icon,
  Body, Title, List, Card, CardItem,} from 'native-base';
import { Colors, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import InformationModal from '../../components/InformationModal';
import { Actions } from 'react-native-router-flux';
import styles from './AllTripsStyle';

export default class AllTrips extends Component {

  constructor(props){
    super(props);
    this.state ={
      availability:false,
      luggageChecked:true,
      refundTickets:true,
      open:false

    }
  }

  onPressBooking = (item)=> {
    if(item.index === 0 && item.seats > 0){
      this.setState({
        availability:!this.state.availability,
        luggageChecked:true,
        refundTickets:true,
      })
    }
  };

  luggageChecked =() =>{
    this.setState({
      luggageChecked:!this.state.luggageChecked,
    })
  };

  refundTickets =() =>{
    this.setState({
      refundTickets:!this.state.refundTickets,
    })
  };

  openModal =() =>{
    this.setState({
      open:true
    })
  };

  onPressGoBack = () =>{
    Actions.pop();
  };


  render(){
    let date = new Date();
    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "June", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    const busService =[
      {index:0, name:'College Shuttle Van',amount:'$72', seats:10, stop:1,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins', star:4.5, rating:25},
      {index:1, name:'College Shuttle Van',amount:'$66', seats: 0, stop:3,
        fsu:'04:30 PM',ssm:'09:30 PM', totalTime:'4 hrs 30 mins',star:3.0, rating:25},
      {index:2, name:'College Shuttle Van',amount:'$70', seats: 10, stop:2,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins',star:3.5,rating:25},
    ];

    const busInformation = [
      {index:0, boardingpoint:'University Campus', drop:'MetroStation'}
    ];

    return(

      <Container style={{backgroundColor:Colors.base}}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left>
              <Button transparent onPress={this.onPressGoBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body style={{flexDirection:'column'}}>
              <View>
                <Title style={{color: Colors.white,marginLeft:-40,marginRight:-40}}>University - Home</Title>
              </View>
              <View style={styles.dateRow}>
                <TouchableOpacity>
                  <Image source={Images.arrowBack} style={styles.backDate}/>
                </TouchableOpacity>
                <Text style={{color: Colors.white}}>{day + ' '+ monthNames[monthIndex]+ ','+' ' + year}</Text>
                <TouchableOpacity>
                  <Image source={Images.arrowForward} style={styles.nextDate}/>
                </TouchableOpacity>
              </View>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>

        <Content>
          <View style={styles.container}>
            <List dataArray={busService}
              renderRow={(item) =>
                <View>
                  <View style ={styles.listContainer}>
                    <Card>
                      <CardItem>
                        <TouchableOpacity onPress={ () => this.onPressBooking(item)}>
                          <View style={item.seats > 0 ? styles.seatAvailable : styles.seatUnavailable}>

                            <View style={styles.busNameRow}>
                              <View style={styles.busNameHeading}>
                                <View style={styles.busNameField}>
                                  <Text  style = {item.seats > 0 ? styles.availableBusNameField :
                                    styles.unavailableBusNameField}>
                                    {item.name}
                                  </Text>
                                </View>

                                <View style={styles.seatNameField}>
                                  <Text style={styles.availableSeatsText}>{item.seats} Seats</Text>
                                </View>
                              </View>
                            </View>

                            {(item.stop === 1) &&
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

                            {(item.stop === 3) &&
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

                            {(item.stop === 2) &&
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

                            {(item.stop === 1) &&
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
                            {(item.stop === 3) &&

                  <View style={styles.pathRow}>

                    <View style={styles. pathRowContainer}>
                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance}>
                        </View>
                      </View>

                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance}>
                        </View>
                      </View>

                      <View style={styles.pathRowValue}>
                        <Image source={Images.ellipseOuter}/>
                        <Image source={Images.ellipse} style={styles.innerEllipse}/>
                        <View style={styles.secondMiddleDistance}>
                        </View>
                        <Image source={Images.inteligent}/>
                      </View>
                    </View>
                  </View>
                            }

                            {(item.stop === 2) &&
                            <View style={styles.pathRow}>

                              <View style={styles. pathRowContainer}>
                                <View style={styles.pathRowValue}>
                                  <Image source={Images.ellipseOuter}/>
                                  <Image source={Images.ellipse} style={styles.innerEllipse}/>
                                  <View style={styles.secondMiddleDistance}>
                                  </View>
                                </View>
                                <View style={styles.pathRowValue}>
                                  <Image source={Images.ellipseOuter}/>
                                  <Image source={Images.ellipse} style={styles.innerEllipse}/>
                                  <View style={styles.secondMiddleDistance}>
                                  </View>
                                  <Image source={Images.inteligent}/>
                                </View>
                              </View>
                            </View>
                            }

                            <View style={styles.timeIndicatorContainer}>

                              <View style={styles.timeShowContainer}>

                                <View style={styles.arriveTiming}>
                                  <Text style={item.seats > 0 ? styles.activeArriveText : styles.inActiveArriveText}>
                                    {item.fsu}
                                  </Text>
                                </View>

                                <View style={styles.totalTime}>
                                  <Text style={styles.totalTimeText}>
                                    {item.totalTime}
                                  </Text>
                                </View>

                                <View style={styles.reachTime}>
                                  <Text style={item.seats > 0 ? styles.reachTimeText : styles.unReachTimeText}>
                                    {item.ssm}
                                  </Text>
                                </View>
                              </View>
                            </View>

                            {(item.star === 4.5) &&
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
                            <Text style={styles.starTextColor}>{item.star}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{item.rating} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={item.seats > 0 ? styles.activeAmount :styles.inActiveAmount}>
                            {item.amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                            }
                            {(item.star === 3) &&
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
                            <Text style={styles.starTextColor}>{item.star}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{item.rating} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={item.seats > 0 ? styles.activeAmount :styles.inActiveAmount}>
                            {item.amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                            }

                            {(item.star === 3.5) &&
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
                            <Text style={styles.starTextColor}>{item.star}</Text>
                          </View>

                          <View style={styles.ratingColumnField }>
                            <Text style={styles.ratingTextColor}>{item.rating} Ratings</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={item.seats > 0 ? styles.activeAmount :styles.inActiveAmount}>
                            {item.amount}
                          </Text>
                        </View>

                      </View>
                    </View>
                  </View>
                            }
                            {(item.seats === 0) &&

                        <View style={styles.seatUnavailableButton}>
                          <Button rounded bordered style={{borderColor:Colors.reminderButtonColor}}>
                            <Text style={styles.seatUnavailableButtonText}>Notify when available</Text>
                          </Button>
                        </View>
                            }
                          </View>
                        </TouchableOpacity>
                      </CardItem>
                    </Card>
                  </View>

                  {(this.state.availability && item.index === 0) &&
                    <Card>
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
                            <List dataArray={busInformation}
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
                                  <Image source={Images.checkbox}/>
                                  <Image source={Images.tick} style={styles.tickImage}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.luggageChecked}>
                                  <Image source={Images.checkbox}/>
                                </TouchableOpacity>
                              }
                            </View>

                            <View style={styles.luggageOptionHeading}>
                              <Text style={styles.boxTextColor}>Book Additional Luggage</Text>
                              <Text style={styles.boxAmountTextColor}>$28 for Additional luggage</Text>
                            </View>
                          </View>

                          <View style={styles.refundBoxOption}>
                            <View>
                              {(this.state.refundTickets) ?
                                <TouchableOpacity onPress={this.refundTickets}>
                                  <Image source={Images.checkbox}/>
                                  <Image source={Images.tick} style={styles.tickImage}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.refundTickets}>
                                  <Image source={Images.checkbox}/>
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
                              <TouchableOpacity onPress={this.openModal}
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
              }
            />
          </View>

          {this.state.open &&
          <InformationModal/>
          }

        </Content>
      </Container>
    )
  }
}