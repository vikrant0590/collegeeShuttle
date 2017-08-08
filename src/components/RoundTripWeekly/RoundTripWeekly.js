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
import { toast } from '../../helpers/ToastMessage';
import { Actions as NavAction } from 'react-native-router-flux';
import { Colors, Metrics } from '../../theme';
import styles from './RoundTripWeeklyStyle';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import moment from 'moment';

const items = [
  {index: 0, header: 'THIS WEEK'},
  {index: 1, header: 'NEXT WEEK'}];

let startDateOfThisWeek = moment().startOf('isoWeek').toDate();
let endDateOfThisWeek = moment().endOf('isoWeek').toDate();
let startDateOfNextWeek = moment().add(1, 'weeks').startOf('isoWeek').toDate();
let endDateOfNextWeek = moment().add(1, 'weeks').endOf('isoWeek').toDate();

export default class RoundTripWeekly extends Component {

  static propTypes = {
    isActiveSearch: PropTypes.bool,
    selectDestination: PropTypes.any,
    checkField: PropTypes.func
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  constructor(){
    super();
    this.state = {
      isPlanThisWeek : false,
      isPlanNextWeek : false,
      selectedButtonIndex: 0,
    }
  }

  onPressPassenger = (index) =>{
    this.setState({ selectedButtonIndex: index});
  };

  onPressSearch = () => {

    this.props.checkField();

    if(this.props.isActiveSearch){
      if((this.state.isPlanThisWeek || this.state.isPlanNextWeek)){
        let data = {
          "pkId": this.props.selectDestination.pkid,
          "dpId": this.props.selectDestination.dpid,
          "rTrip": this.props.selectDestination.rTrip,
          'fromDestination': this.props.selectDestination.fromDestination,
          'toDestination': this.props.selectDestination.toDestination,
          "date":  moment(new Date()).format('YYYY-MM-DD'),
          "endDateOfWeek": moment(endDateOfThisWeek).format('YYYY-MM-DD')
        };
        NavAction.allTrips({'allTripData': data});
      }else {
        toast('Please select trip date.');
      }
    }
  };

  onPressThisWeekPlan = () => {
    this.setState({ isPlanThisWeek : true, isPlanNextWeek: false });
  };

  onPressNextWeekPlan = () => {
    this.setState({ isPlanThisWeek : false, isPlanNextWeek: true });
  };

  calenderThisWeekPlainView = () => {

    const startDayOfWeek =  moment(startDateOfThisWeek).format('dddd');
    const startDateOfWeek =  moment(startDateOfThisWeek).format('DD');
    const startMonthOfWeek =  moment(startDateOfThisWeek).format('MMM, YYYY');
    const endDayOfWeek =  moment(endDateOfThisWeek).format('dddd');
    const endDateOfWeek =  moment(endDateOfThisWeek).format('DD');
    const endMonthOfWeek =  moment(endDateOfThisWeek).format('MMM, YYYY');

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
                    <Text style={styles.dateWeekText}>{startDateOfWeek}</Text>
                    <Text style={styles.dayWeekText}>{startDayOfWeek}</Text>
                    <Text style={styles.monthWeekText}>{startMonthOfWeek}</Text>
                  </Body>
                </CardItem>
              </Col>
              <Col style={{ marginTop: 20, marginBottom: 20,flex: 0.01 }}>
                <View style={styles.lineCol} />
              </Col>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>{endDateOfWeek}</Text>
                    <Text style={styles.dayWeekText}>{endDayOfWeek}</Text>
                    <Text style={styles.monthWeekText}>{endMonthOfWeek}</Text>
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

    const startDayOfWeek =  moment(startDateOfNextWeek).format('dddd');
    const startDateOfWeek =  moment(startDateOfNextWeek).format('DD');
    const startMonthOfWeek =  moment(startDateOfNextWeek).format('MMM, YYYY');
    const endDayOfWeek =  moment(endDateOfNextWeek).format('dddd');
    const endDateOfWeek =  moment(endDateOfNextWeek).format('DD');
    const endMonthOfWeek =  moment(endDateOfNextWeek).format('MMM, YYYY');


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
                    <Text style={styles.dateWeekText}>{startDateOfWeek}</Text>
                    <Text style={styles.dayWeekText}>{startDayOfWeek}</Text>
                    <Text style={styles.monthWeekText}>{startMonthOfWeek}</Text>
                  </Body>
                </CardItem>
              </Col>
              <Col style={{ marginTop: 20, marginBottom: 20,flex: 0.01 }}>
                <View style={styles.lineCol} />
              </Col>
              <Col style={{ flex: 0.99 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>{endDateOfWeek}</Text>
                    <Text style={styles.dayWeekText}>{endDayOfWeek}</Text>
                    <Text style={styles.monthWeekText}>{endMonthOfWeek}</Text>
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
          showsHorizontalScrollIndicator= {false}
          style={{
            width: Metrics.screenWidth + Metrics.screenWidth/11,
            backfaceVisibility: 'hidden'
          }}>
          <View style={{ marginLeft: 0 }}>
            {this.calenderThisWeekPlainView()}
          </View>
          <View style={{ marginLeft: -40 }}>
            {this.calenderNextWeekPlainView()}
          </View>
        </ScrollView>
        <View style={styles.PassengerTextView}>
          <Text style={styles.PassengerText}>Passengers</Text>
        </View>
        <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10,height:50 }} key="passenger">
          <Row style={{ flex: 1 }}>
            <CardItem style={{ justifyContent: 'space-between', flex:1 }}>
              { passenger }
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