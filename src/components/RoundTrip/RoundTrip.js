import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Row, Col, Icon, Card, CardItem, Body } from 'native-base';
import styles from './RooundTripStyle';
import { Colors, Images, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';


export default class RoundTrip extends Component {

  constructor(){
    super();
    this.state = {
      // set state..
    }
  }

  onPressInviteButton = () =>{
    Actions.invitefriend();
  };

  firstOfferPlan =() => {
    Actions.buypackage();
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
            <Col style={{ flex: 1.1 }}>
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
                onPress={this.onPressRoundTripButton}>
                <Image source={Images.roundtriptrackicon} style={styles.trackIcon} />
                <Text style={styles.trackText}>Track Now</Text>
              </TouchableOpacity>
            </Body>
            <Body style={{ marginTop: 30, marginBottom: 20, marginRight: 10 }}>
              <View style={styles.inviteView}>
                <TouchableOpacity
                  style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
                  onPress={this.onPressInviteButton}>
                  <Icon name='ios-contact' style={{ fontSize: Fonts.size.h8, alignSelf: 'center', marginLeft: 10 }} />
                  <Icon name='ios-contact' style={{ fontSize: Fonts.size.h8, alignSelf: 'center', marginLeft: 10 }} />
                  <Icon name='ios-contact' style={{ fontSize: Fonts.size.h8, alignSelf: 'center', marginLeft: 10 }} />
                  <Image source={Images.roundtripaddicon} style={styles.tripicon} />
                </TouchableOpacity>
              </View>
            </Body>
          </CardItem>
        </Card>
        <TouchableOpacity onPress={this.firstOfferPlan}>
          <Card style={{ top: 10 }}>
            <Col>
              <Row>
                <CardItem header>
                  <Body style={{ right: 10 }}>
                    <Text style={styles.headerDesText}>Get upto
                      <Text style={{ color: Colors.roundTripColor}}> 30% OFF</Text> on your booking</Text>
                  </Body>
                </CardItem>
              </Row>
              <Row>
                <CardItem cardBody>
                  <Text style={styles.descriptionText}>
                    Lorem lpsum is simply dummy text {'\n'}of the printing and typesetting.
                  </Text>
                </CardItem>
              </Row>
              <Row style={{ marginRight: 10 }}>
                <CardItem>
                  <Body >
                    <Image source={Images.roundtripbusicon} style={styles.busIcon} />
                  </Body>
                </CardItem>
              </Row>
            </Col>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}