import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Row, Col, Card, CardItem, Body } from 'native-base';
import { Colors, Metrics } from '../../theme';
import styles from './RoundTripCustomStyle';
import { Calender } from '../../components';


export default class RoundTripCustom extends Component {
  constructor() {
    super();
    this.state = {
      selectedButtonIndex: 0
    }
  }

  onPressPassenger = (index) =>{
    this.setState({ selectedButtonIndex: index})
  };

  render(){

    const passenger = [];
    for (let index = 0; index < 5; index ++){
      passenger.push(
        <TouchableOpacity
          style={index === this.state.selectedButtonIndex ? styles.SelectedButton : styles.passengersNumberButton}
          onPress={() => this.onPressPassenger(index)}>
          <Text style={styles.PassengerBtnText}>{index + 1}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={{flex:1, backgroundColor: Colors.base }}>
        <Calender />
        <View style={styles.PassengerTextView}>
          <Text style={styles.PassengerText}>Passengers</Text>
        </View>
        <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Row style={{ flex: 1}}>
            <CardItem style={{ marginLeft: 5 }}>
              {passenger}
            </CardItem>
          </Row>
        </Card>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={this.onPressPassenger}>
          <Text style={styles.searchBtnText}>Search</Text>
        </TouchableOpacity>
        <Card style={{ marginLeft: 15, marginRight: 15, width: Metrics.screenWidth - 30 }}>
          <Row style={{ width: Metrics.screenWidth - 30 }}>
            <Col style={{ flex: 0.8 }}>
              <CardItem>
                <Body style={{ borderRightColor: Colors.thinLineColor, borderRightWidth: 1.5, alignItems: 'center' }}>
                  <Text style={styles.titleHeaderText}>Upcoming Trips</Text>
                  <Text style={styles.dayText}>25</Text>
                  <Text style={styles.monthText}>Friday</Text>
                  <Text style={styles.monthText}>Feb, 2017</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ flex: 1.2 }}>
              <CardItem>
                <Body style={{ alignItems: 'flex-start' }}>
                  <Text style={styles.titleHeaderText}>DESTINATION</Text>
                  <Text style={styles.monthText}>University - Home</Text>
                </Body>
              </CardItem>
              <Row>
                <Col>
                  <Body style={{ top: 20 }}>
                    <Text style={styles.timeText}>TIME</Text>
                    <Text style={styles.timeHourText}>04:30 PM</Text>
                  </Body>
                </Col>
                <Col>
                  <Body style={{ top: 20 }}>
                    <Text style={styles.pickupText}>PICKUP POINT</Text>
                    <Text style={styles.circleText}>Uni Circle</Text>
                  </Body>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </View>
    );
  }
}