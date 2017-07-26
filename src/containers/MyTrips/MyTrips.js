import React,{Component} from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Col,
  Row,
  Card,
  CardItem,
  List,
  ListItem
} from 'native-base';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import SwipeMyTrip from 'react-native-swipe-a-lot';
import styles from './MyTripsStyles';
import { Colors, Images, Metrics, Fonts } from '../../theme';
import { MyTripCell } from '../../components';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

// dummy data array ...
const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho'];

export default class MyTrips extends Component {


  onPressTrackNowButton = () =>{
    Actions.mytripsmap();
  };

  onPressInviteButton = () =>{
    Actions.invitefriend();
  };

  render(){
    const swiperpage = [];
    for(let index = 0; index < 2; index ++){
      swiperpage.push(
        <Card
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            width: Metrics.screenWidth - 30
          }} key="swiperpage">
          <Row style={{ flex: 1, width: Metrics.screenWidth - 30 }}>
            <Col style={{ flex: 0.75, width: Metrics.screenWidth/ 2 ,}}>
              <CardItem>
                <Body
                  style={{ alignItems: 'center' }}>
                  <Text style={styles.myTripDateText}>25</Text>
                  <Text style={styles.myTripDayText}>Friday</Text>
                  <Text style={styles.monthWeekText}>Feb, 2017</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ marginTop: 20, marginBottom: 20, width: 1 ,}}>
              <View style={{ flex: 1, height: Metrics.screenHeight/ 7, backgroundColor: Colors.thinLineColor}} />
            </Col>
            <Col style={{ flex: 1.25, width: Metrics.screenWidth/ 2, }}>
              <Row style={{ flex: 0.65, width: Metrics.screenWidth/ 2,}}>
                <Col style={{ flex: 0.85,}}>
                  <CardItem>
                    <Body style={{ justifyContent: 'flex-start'}}>
                      <Row style={{ flex: 1, marginRight: 10,}}>
                        <Text style={styles.myTripUpcomingText}>Upcoming Trip</Text>
                        <Icon
                          name='ios-help-circle-outline'
                          style={{
                            fontSize: Fonts.size.h7,
                            color: Colors.black,
                            justifyContent: 'center',
                            top: 3,
                            left: Metrics.screenWidth/2 - Metrics.screenWidth/2.5,
                          }}
                        />
                      </Row>
                      <Text style={styles.myTripUniversityText}>University - Home</Text>
                    </Body>
                  </CardItem>
                </Col>
              </Row>
              <Row
                style={{
                  flex: 0.15,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  width: Metrics.screenWidth/ 2,
                }}>
                <CardItem>
                  <Body>
                    <TouchableOpacity
                      style={styles.myTripTrackNowBtn}
                      onPress={this.onPressTrackNowButton}>
                      <Image source={Images.roundtriptrackicon} style={styles.myTripTrackIcon} />
                      <Text style={styles.myTripTrackText}>Track Now</Text>
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              </Row>
              <Row
                style={{
                  marginBottom: 10,
                  marginTop: -10,
                  alignItems: 'flex-start',
                  marginRight: 10
                }}>
                <CardItem>
                  <Body style={{ alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center'
                      }}
                      onPress={this.onPressInviteButton}>
                      <Icon
                        name='ios-contact'
                        style={{
                          fontSize: Fonts.size.h5,
                          alignSelf: 'center',
                          marginLeft: 10
                        }} />
                      <Icon
                        name='ios-contact'
                        style={{
                          fontSize: Fonts.size.h5,
                          alignSelf: 'center',
                          marginLeft: 10
                        }} />
                      <Icon
                        name='ios-contact'
                        style={{
                          fontSize: Fonts.size.h5,
                          alignSelf: 'center',
                          marginLeft: 10
                        }} />
                      <Image source={Images.roundtripaddicon} style={styles.myTripInviteIcon} />
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              </Row>
            </Col>
          </Row>
        </Card>
      );
    }

    return(
      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent }}>
            <Left>
              <Button transparent onPress={()=> Actions.pop()}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>My Trips</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <SwipeMyTrip
            circleDefaultStyle = {{
              backgroundColor: Colors.thinLineColor,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginTop: Metrics.screenHeight/14
            }}
            style = {{ backgroundColor: Colors.base }}
            circleActiveStyle = {{
              backgroundColor: Colors.timeColor,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginTop: Metrics.screenHeight/14,
              marginHorizontal: 2.5,
              marginVertical: 3
            }}>
            {swiperpage}
          </SwipeMyTrip>
          <View style={styles.completedTripView}>
            <Text style={styles.completedTripText}>Completed Trips</Text>
          </View>
          <View style={{ flex: 1 }}>
            <List
              dataArray={items}
              style={{}}
              renderRow={(item) =>{
                return(
                  <ListItem style={{borderBottomWidth: 0, flex: 1 }}>
                    <MyTripCell />
                  </ListItem>
                )}
              }>
            </List>
          </View>
        </Content>
      </Container>
    )
  }
}
