import React,{ Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Header, Container,Content, Left, Right, Button, Icon,
  Body, Title, List, Card, CardItem,} from 'native-base';
import { Colors, Images, Fonts , Metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Actions as NavAction} from 'react-native-router-flux';
import InformationModal from '../../components/InformationModal';
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

  nameColor =(seats)=>{
    if(seats > 0) {
      return(
        {...Fonts.style.allTripInfo, color:Colors.black}
      )} else {
      return(
        {...Fonts.style.allTripInfo, color:Colors.availability}
      )
    }
  };

  onPress = (item)=> {
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
              <Button transparent>
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
                        <TouchableOpacity onPress={ () => this.onPress(item)}>
                          <View style={(item.seats > 0 ? {height:Metrics.screenHeight /4.7,
                            marginBottom:15,backgroundColor:Colors.white} :
                            {height:Metrics.screenHeight /3,marginBottom:15,backgroundColor:Colors.white})}>
                            <View style={styles.busNameRow}>
                              <Text  style = {(item > 0 ? {...Fonts.style.allTripInfo, color:Colors.black } :
                                {...Fonts.style.allTripInfo, color:Colors.availability})}>
                                {item.name}
                              </Text>
                              <Text style={styles.availableSeatsText}>{item.seats} Seats</Text>
                            </View>
                            {(item.stop === 1) &&
                            <View style={styles.placeNameRow}>
                              <Text style={styles.placeStart}>FSU</Text>
                              <Text style={styles.placeEnd}>SSM</Text>
                            </View>
                            }
                            {(item.stop === 3) &&
                            <View style={styles.placeNameRow}>
                              <Text style={styles.secondListStart}>FSU</Text>
                              <Text style={styles.secondListMiddlePlace}>RKV</Text>
                              <Text style={styles.secondListMiddlePlace}>GBM</Text>
                              <Text style={styles.secondListEndPlace}>SSM</Text>
                            </View>
                            }
                            {(item.stop === 2) &&
                            <View style={styles.placeNameRow}>
                              <Text style={styles.thirdListPlace}>FSU</Text>
                              <Text style={styles.thirdListPlace}>GBM</Text>
                              <Text style={styles.thirdListPlace}>SSM</Text>
                            </View>
                            }
                            {(item.stop === 1) &&
                  <View style={styles.placeNameRow}>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={styles.singlePathLine}></View>
                    <View>
                      <Image source={Images.inteligent}/>
                    </View>
                  </View>
                            }
                            {(item.stop === 3) &&
                  <View style={{marginTop: 2, flexDirection: 'row',flex:0.3}}>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={{height: 0.9, width: Metrics.screenWidth /4.2,
                      backgroundColor: 'red', marginTop: 7,marginLeft: 4}}>
                    </View>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={{height: 0.9, width: Metrics.screenWidth /4.2,
                      backgroundColor: 'red', marginTop: 7,marginLeft: 4}}>
                    </View>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={{height: 0.9, width: Metrics.screenWidth /4.2,
                      backgroundColor: 'red', marginTop: 7,marginLeft: 4}}>
                    </View>
                    <View>
                      <Image source={Images.inteligent}/>
                    </View>
                  </View>
                            }
                            {(item.stop === 2) &&
                  <View style={{marginTop: 2, flexDirection: 'row', flex:0.2}}>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={{height: 0.9, width: Metrics.screenWidth /2.6 - 4 ,
                      backgroundColor: 'red', marginTop: 7,marginLeft: 4}}>
                    </View>
                    <View style={styles.startPoint}>
                      <Image source={Images.ellipseOuter}/>
                      <Image source={Images.ellipse} style={styles.innerEllipse}/>
                    </View>
                    <View style={{height: 0.9, width: Metrics.screenWidth /2.6 - 4 ,
                      backgroundColor: 'red', marginTop: 7,marginLeft: 4}}>
                    </View>
                    <View>
                      <Image source={Images.inteligent}/>
                    </View>
                  </View>
                            }
                            <View style={{flexDirection:'row', flex:0.2}}>
                              <Text style={(item.seats > 0 ? {color:Colors.black}
                                : {color:Colors.availability})}>{item.fsu}</Text>
                              <View style={{marginLeft:55,marginRight:40, flex:0.1}}>
                                <Text style={{...Fonts.style.universityFont}}>{item.totalTime}</Text>
                              </View>
                              <Text style={(item.seats > 0 ? {color:Colors.black}
                                : {color:Colors.availability})}>{item.ssm}</Text>
                            </View>
                            {(item.star === 4.5) &&
                  <View style={{flexDirection:"column",flex:0.5,}}>
                    <View style={{flexDirection:"row"}}>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.halfStar}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5,}}>
                      <View style={{marginRight:20}}>
                        <Text style={{color:'#ffc23e'}}>{item.star}</Text>
                      </View>
                      <View>
                        <Text style={{...Fonts.style.rating,color:Colors.black}}>{item.rating} Ratings</Text>
                      </View>
                      <View style={{marginLeft:Metrics.screenWidth - 200,marginTop:-20}}>
                        <Text style={(item.seats > 0 ? {...Fonts.style.headingText, color:Colors.black} :
                          {...Fonts.style.headingText, color:Colors.availability})}>{item.amount}</Text>
                      </View>
                    </View>
                  </View>
                            }
                            {(item.star === 3) &&
                  <View style={{flexDirection:"column",marginTop:20,flex:0.5}}>
                    <View style={{flexDirection:"row"}}>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5,}}>
                      <View style={{marginRight:20}}>
                        <Text style={{color:'#ffc23e'}}>{item.star}</Text>
                      </View>
                      <View>
                        <Text style={{...Fonts.style.rating,color:Colors.black}}>{item.rating} Ratings</Text>
                      </View>
                      <View style={{marginLeft:Metrics.screenWidth - 190,marginTop:-20}}>
                        <Text style={(item.seats > 0 ? {...Fonts.style.headingText, color:Colors.black} :
                          {...Fonts.style.headingText, color:Colors.availability})}>{item.amount}</Text>
                      </View>
                    </View>
                  </View>
                            }

                            {(item.star === 3.5) &&
                  <View style={{flexDirection:"column",marginTop:25}}>
                    <View style={{flexDirection:"row"}}>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.fullStar} style={{marginRight:3}}/>
                      <Image source={Images.halfStar}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5,}}>
                      <View style={{marginRight:20}}>
                        <Text style={{color:'#ffc23e'}}>{item.star}</Text>
                      </View>
                      <View>
                        <Text style={{...Fonts.style.rating,color:Colors.black}}>{item.rating} Ratings</Text>
                      </View>
                      <View style={{marginLeft:Metrics.screenWidth - 200,marginTop:-20}}>
                        <Text style={(item.seats > 0 ? {...Fonts.style.headingText, color:Colors.black} :
                          {...Fonts.style.headingText, color:Colors.availability})}>{item.amount}</Text>
                      </View>
                    </View>
                  </View>
                            }
                            {(item.seats === 0) &&
                        <View style={{flex:0.6,marginTop:10,marginLeft:5}}>
                          <Content>
                            <Button rounded bordered style={{borderColor:Colors.reminderButtonColor}}>
                              <Text style={{color:Colors.profileForm}}>Notify when available</Text></Button>
                          </Content>
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
                        <View style={{height:Metrics.screenHeight/3,flex:1}}>
                          <View style={{flexDirection:'row',flex:0.2}}>
                            <Text style={{...Fonts.style.profileLabel,
                              color:Colors.profileInputHeadingColor,marginRight:70}}>
                                BOARDING POINT
                            </Text>
                            <Text style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                                DROP
                            </Text>
                          </View>
                          <View style={{flex:0.2,}}>
                            <List dataArray={busInformation}
                              renderRow={(items) =>
                                <View style={{flexDirection: 'row'}}>
                                  <Text style={{marginRight:60,...Fonts.style.availabiltyNone,color:Colors.black}}>
                                    {items.boardingpoint}
                                  </Text>
                                  <Text style={{...Fonts.style.availabiltyNone,color:Colors.black}}>{items.drop}</Text>
                                </View>
                              }/>
                          </View>

                          <View style={{flexDirection:'row', flex:0.4}}>
                            <View style={{marginTop:10}}>
                              {(this.state.luggageChecked) ?
                                <TouchableOpacity onPress={this.luggageChecked}>
                                  <Image source={Images.checkbox}/>
                                  <Image source={Images.tick} style={{marginTop:-13,marginLeft:4}}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.luggageChecked}>
                                  <Image source={Images.checkbox}/>
                                </TouchableOpacity>
                              }
                            </View>
                            <View style={{flexDirection:'column',marginLeft:15,flex:0.9,marginTop:10}}>
                              <Text style={{...Fonts.availabiltyNone,color:Colors.black}}>Book Additional Luggage</Text>
                              <Text style={{...Fonts.style.rating,color:Colors.black}}>$28 for Additional luggage</Text>
                            </View>
                          </View>

                          <View style={{flexDirection:'row',flex:0.4,marginTop:10}}>
                            <View>
                              {(this.state.refundTickets) ?
                                <TouchableOpacity onPress={this.refundTickets}>
                                  <Image source={Images.checkbox}/>
                                  <Image source={Images.tick} style={{marginTop:-13,marginLeft:4}}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.refundTickets}>
                                  <Image source={Images.checkbox}/>
                                </TouchableOpacity>
                              }
                            </View>
                            <View style={{flexDirection:'column',marginLeft:15,flex:0.9}}>
                              <Text style={{...Fonts.style.availabiltyNone,color:Colors.black}}>
                                Refundable Tickets
                              </Text>
                              <Text style={{...Fonts.style.rating,color:Colors.black}}>
                                $12 for Cancellation charges
                              </Text>
                            </View>
                          </View>
                          <View style={{flex:0.6,}}>
                            <LinearGradient
                              colors={['#FC214F','#D32735']}
                              style={{
                                width:131,
                                height:45,
                                backgroundColor:'red',
                                borderRadius:22,
                                marginBottom:0,
                                alignSelf:"center"
                              }}>
                              <TouchableOpacity onPress={this.openModal}
                                style={{
                                  flex: 1,
                                  backgroundColor: Colors.transparent,
                                }}>
                                <Text style={{alignSelf:"center",marginTop:10,
                                  ...Fonts.style.regularFont,color:Colors.white}}>Book Now</Text>
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