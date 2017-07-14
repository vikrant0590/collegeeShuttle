import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Card, Row, Col, CardItem, Body, Icon } from 'native-base';
import styles from './MyTripCellStyle';
import { Colors, Fonts, Images } from '../../theme';

export default class MyTripCell extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <Card style={{ flex: 1, marginTop: -5, marginBottom: -5 }}>
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
            <Row style={{ flex: 0.65 }}>
              <Col style={{ flex: 1 }}>
                <CardItem>
                  <Body style={{ justifyContent: 'flex-start' }}>
                    <Row>
                      <Text style={styles.myTripUpcomingText}>Upcoming Trip</Text>
                      <Icon
                        name='ios-help-circle-outline'
                        style={{
                          fontSize: 22,
                          color: Colors.black,
                          justifyContent: 'center',
                          top: 0,
                          left: 40
                        }}
                      />
                    </Row>
                    <Text style={styles.myTripUniversityText}>University - Home </Text>
                  </Body>
                </CardItem>
              </Col>
            </Row>
            <Row style={{ flex: 0.25,  alignItems: 'flex-end', justifyContent: 'center'}}>
              <CardItem>
                <Body style={{ }}>
                  <TouchableOpacity
                    style={styles.myTripTrackNowBtn}
                    onPress={this.onPressRoundTripButton}>
                    <Icon
                      name='md-star-outline'
                      style={{
                        fontSize: 22,
                        color: Colors.roundTripColor,
                        justifyContent: 'center',
                        top: -4
                      }}
                    />
                    <Text style={styles.myTripTrackText}>Rate and Review</Text>
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}
