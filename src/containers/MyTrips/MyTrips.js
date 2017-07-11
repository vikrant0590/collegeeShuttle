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
} from 'native-base';
import { Text, Image } from 'react-native';
import SwipeMyTrip from 'react-native-swipe-a-lot';
import styles from './MyTripsStyles';
import { Colors } from '../../theme';


export default class MyTrips extends Component {

  constructor(){
    super();
    this.state= {

    }
  }

  render(){
    const swiperpage = [];
    for(let index = 0; index < 2; index ++){
      swiperpage.push(
        <Card style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 5 }} key="swiperpage">
          <Row style={{ flex: 1 }}>
            <Col style={{ flex: 0.85 }}>
              <CardItem>
                <Body
                  style={{
                    alignItems: 'center',
                    borderRightColor: Colors.thinLineColor,
                    borderRightWidth: 1.5,
                    marginBottom: 5,
                    marginTop: 5
                  }}>
                  <Text style={styles.myTripDateText}>25</Text>
                  <Text style={styles.myTripDayText}>Friday</Text>
                  <Text style={styles.monthWeekText}>Feb, 2017</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ flex: 1.15 }}>
              <Row style={{ flex: 1 }}>
                <CardItem>
                  <Body style={{ justifyContent: 'flex-start' }}>
                    <Text style={styles.dateWeekText}>Upcoming Trip</Text>
                    <Text style={styles.myTripDayText}>University - Home </Text>
                  </Body>
                </CardItem>
              </Row>
              <Row style={{ flex: 1 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Row style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={styles.dateWeekText}>27</Text>
                      <Text style={styles.myTripDayText}>Track Now</Text>
                    </Row>
                  </Body>
                </CardItem>
              </Row>
            </Col>
          </Row>
        </Card>
      );
    }

    return(
      <Container style={{flex:1}}>
        <Header style={{ backgroundColor:'#fc214f',borderBottomWidth:0 }}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>My Trips</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <SwipeMyTrip
            circleDefaultStyle = {styles.swipeCircleStyle}
            style = {{ backgroundColor: Colors.base }}
            circleActiveStyle = {styles.swipeCircleActiveStyle}>
            {swiperpage}
          </SwipeMyTrip>
        </Content>
      </Container>
    )
  }
}
