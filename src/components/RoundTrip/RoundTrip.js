import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Row, Col, Icon, Card, CardItem, Body, Button } from 'native-base';
import styles from './RooundTripStyle';
import { Colors, Images, Fonts, Metrics } from '../../theme';
import { Actions } from 'react-native-router-flux';


export default class RoundTrip extends Component {


  onPressInviteButton = () =>{
    Actions.friendlist();
  };

  onPressGetOff = () =>{
    Actions.homebuypackage();
  };

  onPressTrackNow = () => {
    Actions.mytripsmap();
  };

  onPressOffer = () =>{
    Actions.offers();
  };

  render(){
    return(
      <View>
        <Card>
          <Row style={{ flex: 1 }}>
            <Col style={{ flex: 0.9 }}>
              <CardItem>
                <Body style={{ borderRightColor: Colors.thinLineColor, borderRightWidth: 1.5, alignItems: 'center' }}>
                  <Text style={styles.titleHeaderText}>Upcoming Trips</Text>
                  <Text style={styles.dayText}>25</Text>
                  <Text style={styles.monthText}>Feb, 2017</Text>
                  <Text style={styles.timeText}>04:30 PM</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ flex: 1.1, marginRight: 3 }}>
              <CardItem>
                <Body style={{ alignItems: 'flex-start' }}>
                  <Text style={styles.titleHeaderText}>DESTINATION</Text>
                  <Text style={[styles.monthText,{paddingTop: 5}]}>University - Home</Text>
                  <Text style={[styles.busText, {paddingTop: 45}]}>BUS NAME</Text>
                  <Text style={styles.collegeText}>College Shuttle Pro</Text>
                </Body>
              </CardItem>
            </Col>
          </Row>
          <CardItem>
            <Body>
              <Text style={styles.pickupText}>PICKUP POINT</Text>
              <Text style={styles.circleText}>Uni Circle</Text>
            </Body>
            <Body>
              <Text style={styles.dropText}>DROP</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body style={{ marginTop: 10, marginBottom: 20 }}>
              <TouchableOpacity
                style={styles.trackNowBtn}
                onPress={this.onPressTrackNow}>
                <Image source={Images.roundtriptrackicon} style={styles.trackIcon} />
                <Text style={styles.trackText}>Track Now</Text>
              </TouchableOpacity>
            </Body>
            <Body style={{ marginTop: 30, marginBottom: 20, marginRight: 10 }}>
              <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
                onPress={this.onPressInviteButton}>
                <Image source={Images.profileicon} style={styles.tripicon} />
                <Image source={Images.profileicon} style={styles.tripicon} />
                <Image source={Images.profileicon} style={styles.tripicon} />
                <Image source={Images.roundtripaddicon} style={styles.tripicon} />
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
        <Button
          transparent
          style={{
            top: 10,
            marginBottom:20,
            height: Metrics.screenHeight/ 5.5,
          }}
          onPress={this.onPressOffer}>
          <Card
            style={{
              flex: 1,
              marginLeft: -13,
              marginRight: -13,
              marginTop: -10,
              marginBottom: -13
            }}>
            <Row
              style={{
                flex: 0.25,
                marginTop: 10,
                marginLeft: 10,
                alignItems: 'center'
              }}>
              <View>
                <Text style={styles.headerDesText}>Get upto</Text>
              </View>
              <View style={{ marginLeft: -10 }}>
                <Button
                  transparent
                  style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                  onPress={this.onPressGetOff}>
                  <Text style={[styles.headerDesText,{ color: Colors.roundTripColor}]}>30% OFF</Text>
                </Button>
              </View>
              <View style={{ marginLeft: -10 }}>
                <Text style={styles.headerDesText}>on your booking</Text>
              </View>
            </Row>
            <Row style={{ flex: 0.5 }}>
              <CardItem  style={{ marginTop: 10}}>
                <Text style={styles.descriptionText}>
                  Lorem lpsum is simply dummy text {'\n'}of the printing and typesetting.
                </Text>
              </CardItem>
            </Row>
            <Row style={{ flex: 0.25 }}>
              <Body style={{ marginLeft: -15, marginBottom: 10 }} >
                <Image source={Images.roundtripbusicon} style={styles.busIcon} />
              </Body>
            </Row>
          </Card>
        </Button>
      </View>
    )
  }
}