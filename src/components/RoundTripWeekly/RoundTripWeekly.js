import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Row,
  Col,
  Card,
  CardItem,
  Body,
} from 'native-base';
import SwipeWeekly from 'react-native-swipe-a-lot';
import { Actions as NavAction } from 'react-native-router-flux';
import { Colors, Metrics } from '../../theme';
import styles from './RoundTripWeeklyStyle';


export default class RoundTripWeekly extends Component {
  constructor(){
    super();
    this.state = {
      isPlan : false,
      selectedButtonIndex: 0
    }
  }

  onPressPassenger = (index) =>{
    const pNum = (parseInt(index));
    //this.swiper.swipeToPage(pNum);
    this.setState({ selectedButtonIndex: index});
  };

  onPressSearch = () => {
    NavAction.allTrips();
  };

  onPressWeekPlan = () => {
    this.setState({ isPlan : !this.state.isPlan })
  };

  render(){
    const passenger = [];
    for (let index = 0; index < 5; index ++){
      passenger.push(

        <TouchableOpacity
          style={index === this.state.selectedButtonIndex ? styles.SelectedButton : styles.passengersNumberButton}
          onPress={() => this.onPressPassenger(index)} key={index}>
          <Text style={styles.PassengerBtnText}>{index + 1}</Text>
        </TouchableOpacity>
      )
    }

    const swiperpage = [];
    for(let index = 0; index < 2; index ++){
      swiperpage.push(
        <TouchableOpacity
          style={{
            flex: 1,
            width: Metrics.screenWidth - 30,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            bottom : 0
          }}
          onPress = {this.onPressWeekPlan}
          key="swiperpage">
          <Card style={{ flex: 1, width: Metrics.screenWidth - 30 }}>
            <Col style={{ flex: 1, width: Metrics.screenWidth -30 }}>
              <Row style={{ height: 40 }}>
                {(this.state.isPlan) ?
                  <CardItem
                    style={{
                      flex: 1,
                      backgroundColor: Colors.timeColor,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <Text style={styles.cardTitleText}>THIS WEEK</Text>
                  </CardItem>
                  :
                  <CardItem
                    style={{
                      flex: 1,
                      backgroundColor: Colors.weekHeaderColor,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <Text style={styles.cardTitleText}>THIS WEEK</Text>
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
                      <Text style={styles.dateWeekText}>25</Text>
                      <Text style={styles.dayWeekText}>Friday</Text>
                      <Text style={styles.monthWeekText}>Feb, 2017</Text>
                      <Text style={styles.timeWeekText}>04:00 PM</Text>
                    </Body>
                  </CardItem>
                </Col>
                <Col style={{ marginTop: 20, marginBottom: 20,flex: 0.01 }}>
                  <View style={{ flex: 1, height: Metrics.screenHeight/ 7, backgroundColor: Colors.thinLineColor}} />
                </Col>
                <Col style={{ flex: 0.99 }}>
                  <CardItem>
                    <Body style={{ alignItems: 'center' }}>
                      <Text style={styles.dateWeekText}>27</Text>
                      <Text style={styles.dayWeekText}>Friday</Text>
                      <Text style={styles.monthWeekText}>Feb, 2017</Text>
                      <Text style={styles.timeWeekText}>04:30 PM</Text>
                    </Body>
                  </CardItem>
                </Col>
              </Row>
            </Col>
          </Card>
        </TouchableOpacity>
      );
    }

    return(
      <View style={{ backgroundColor: Colors.base, flex: 1 }}>
        <SwipeWeekly
          ref={(c) => this.swiper = c}
          circleDefaultStyle = {{
            backgroundColor: Colors.transparent,
            height: 0,
            width: 0,
            borderRadius: 0,
          }}
          style = {{ backgroundColor: Colors.base }}
          circleActiveStyle = {{
            backgroundColor: Colors.transparent,
            height: 0,
            marginTop: 0
          }}>
          {swiperpage}
        </SwipeWeekly>
        <View style={styles.PassengerTextView}>
          <Text style={styles.PassengerText}>Passengers</Text>
        </View>
        <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10,height:50}} key="passenger">
          <Row style={{ flex: 1, }}>
            <CardItem style={{ justifyContent: 'space-between', flex:1 }}>
              {passenger}
            </CardItem>
          </Row>
        </Card>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={this.onPressSearch}>
            <Text style={styles.searchBtnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
