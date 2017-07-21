import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {
  Row,
  Col,
  Card,
  CardItem,
  Body,
} from 'native-base';

import { Actions as NavAction } from 'react-native-router-flux';
import { Colors, Metrics } from '../../theme';
import styles from './RoundTripWeeklyStyle';
import LinearGradient from 'react-native-linear-gradient';


const items = [
  {index: 0, header: 'THIS WEEK', date: '25', day: 'Friday', month: 'Feb, 2017', time: '04:00 PM'},
  {index: 1, header: 'NEXT WEEK', date: '02', day: 'Sunday', month: 'Mar, 2017', time: '05:00 PM'}];

export default class RoundTripWeekly extends Component {
  constructor(){
    super();
    this.state = {
      isPlanThisWeek : false,
      isPlanNextWeek : false,
      selectedButtonIndex: 0
    }
  }

  onPressPassenger = (index) =>{
    this.setState({ selectedButtonIndex: index});
    NavAction.allTrips();
  };

  onPressSearch = () => {
    NavAction.allTrips();
  };

  onPressThisWeekPlan = () => {
    this.setState({ isPlanThisWeek : true, isPlanNextWeek: false });
  };

  onPressNextWeekPlan = () => {
    this.setState({ isPlanThisWeek : false, isPlanNextWeek: true });
  };

  calenderThisWeekPlainView = () => {
    return(
      <TouchableOpacity
        style={styles.swiperPagerBtn}
        onPress = {this.onPressThisWeekPlan}>
        <Card style={{ flex: 1, width: Metrics.screenWidth - 60 }}>
          <Col style={{ flex: 1, width: Metrics.screenWidth -60 }}>
            <Row style={{ height: 40 }}>
              {(this.state.isPlanThisWeek) ?
                <CardItem
                  style={{
                    flex: 1,
                    backgroundColor: Colors.timeColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={styles.cardTitleText}>{items[0].header}</Text>
                </CardItem>
                :
                <CardItem
                  style={{
                    flex: 1,
                    backgroundColor: Colors.weekHeaderColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={styles.cardTitleText}>{items[0].header}</Text>
                </CardItem>
              }
            </Row>
            <Row style={{ flex: 1 }}>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body
                    style={{
                      alignItems: 'center'
                    }}>
                    <Text style={styles.dateWeekText}>{items[0].date}</Text>
                    <Text style={styles.dayWeekText}>{items[0].day}</Text>
                    <Text style={styles.monthWeekText}>{items[0].month}</Text>
                    <Text style={styles.timeWeekText}>{items[0].time}</Text>
                  </Body>
                </CardItem>
              </Col>
              <Col style={{ marginTop: 20, marginBottom: 20,flex: 0.01 }}>
                <View style={styles.lineCol} />
              </Col>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>{items[0].date}</Text>
                    <Text style={styles.dayWeekText}>{items[0].day}</Text>
                    <Text style={styles.monthWeekText}>{items[0].month}</Text>
                    <Text style={styles.timeWeekText}>{items[0].time}</Text>
                  </Body>
                </CardItem>
              </Col>
            </Row>
          </Col>
        </Card>
      </TouchableOpacity>
    )
  };

  calenderNextWeekPlainView = () => {
    return(
      <TouchableOpacity
        style={styles.swiperPagerBtn}
        onPress = {this.onPressNextWeekPlan}>
        <Card style={{ flex: 1, width: Metrics.screenWidth - 60 }}>
          <Col style={{ flex: 1, width: Metrics.screenWidth - 60 }}>
            <Row style={{ height: 40 }}>
              {(this.state.isPlanNextWeek) ?
                <CardItem
                  style={{
                    flex: 1,
                    backgroundColor: Colors.timeColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={styles.cardTitleText}>{items[1].header}</Text>
                </CardItem>
                :
                <CardItem
                  style={{
                    flex: 1,
                    backgroundColor: Colors.weekHeaderColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={styles.cardTitleText}>{items[1].header}</Text>
                </CardItem>
              }
            </Row>
            <Row style={{ flex: 1 }}>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body
                    style={{
                      alignItems: 'center'
                    }}>
                    <Text style={styles.dateWeekText}>{items[1].date}</Text>
                    <Text style={styles.dayWeekText}>{items[1].day}</Text>
                    <Text style={styles.monthWeekText}>{items[1].month}</Text>
                    <Text style={styles.timeWeekText}>{items[1].time}</Text>
                  </Body>
                </CardItem>
              </Col>
              <Col style={{ marginTop: 20, marginBottom: 20,flex: 0.01 }}>
                <View style={styles.lineCol} />
              </Col>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>{items[1].date}</Text>
                    <Text style={styles.dayWeekText}>{items[1].day}</Text>
                    <Text style={styles.monthWeekText}>{items[1].month}</Text>
                    <Text style={styles.timeWeekText}>{items[1].time}</Text>
                  </Body>
                </CardItem>
              </Col>
            </Row>
          </Col>
        </Card>
      </TouchableOpacity>
    )
  };

  render(){
    const passenger = [];
    for (let index = 0; index < 5; index ++){
      passenger.push(
        <TouchableOpacity
          style={index === this.state.selectedButtonIndex ? styles.SelectedButton : styles.passengersNumberButton}
          onPress={() => this.onPressPassenger(index)} key={index + 1}>
          <Text style={styles.PassengerBtnText}>{index + 1}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={{ backgroundColor: Colors.base, flex: 1 }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator = {false}
          style={{
            width: Metrics.screenWidth + Metrics.screenWidth/11,
            backfaceVisibility: 'hidden'
          }}>
          <View style={{ marginLeft: 0 }}>
            {this.calenderThisWeekPlainView()}
          </View>
          <View style={{ marginLeft: -40}}>
            {this.calenderNextWeekPlainView()}
          </View>
        </ScrollView>
        <View style={styles.PassengerTextView}>
          <Text style={styles.PassengerText}>Passengers</Text>
        </View>
        <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10,height:50}} key="passenger">
          <Row style={{ flex: 1 }}>
            <CardItem style={{ justifyContent: 'space-between', flex:1 }}>
              {passenger}
            </CardItem>
          </Row>
        </Card>
        <LinearGradient colors={['#FC214F', '#D32735']}  style={styles.searchBtnView}>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={this.onPressSearch}>
            <Text style={styles.searchBtnText}>Search</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
