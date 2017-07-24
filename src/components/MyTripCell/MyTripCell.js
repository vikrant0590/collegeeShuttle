import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { Card, Row, Col, CardItem, Body, Icon } from 'native-base';
import styles from './MyTripCellStyle';
import { Colors, Fonts, Metrics } from '../../theme';

export default class MyTripCell extends Component {
  

  render(){
    return(
      <Card
        style={{
          flex: 1,
          marginTop: -5,
          marginBottom: -5,
          width: Metrics.screenWidth
        }}>
        <Row style={{ width: Metrics.screenWidth }}>
          <Col
            style={{
              flex: 0.75,
              width: Metrics.screenWidth/ 2
            }}>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text style={styles.myTripDateText}>25</Text>
                <Text style={styles.myTripDayText}>Friday</Text>
                <Text style={styles.monthWeekText}>Feb, 2017</Text>
              </Body>
            </CardItem>
          </Col>
          <Col
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: 1
            }}>
            <View style={{
              flex: 1,
              height: Metrics.screenHeight/ 7,
              backgroundColor: Colors.thinLineColor
            }} />
          </Col>
          <Col
            style={{
              flex: 1.25,
              width: Metrics.screenWidth/ 2
            }}>
            <Row
              style={{
                flex: 0.65,
                width: Metrics.screenWidth/ 2
              }}>
              <Col style={{ flex: 0.85}}>
                <CardItem>
                  <Body style={{ justifyContent: 'flex-start' }}>
                    <Row style={{ flex: 1, marginRight: 10}}>
                      <Text style={styles.myTripUpcomingText}>Upcoming Trip</Text>
                      <Icon
                        name='ios-help-circle-outline'
                        style={{
                          fontSize: Fonts.size.h7,
                          color: Colors.black,
                          justifyContent: 'center',
                          top: 3,
                          left: Metrics.screenWidth/2 - Metrics.screenWidth/2.8,
                          alignSelf: 'center'
                        }}
                      />
                    </Row>
                    <Text style={styles.myTripUniversityText}>University - Home </Text>
                  </Body>
                </CardItem>
              </Col>
            </Row>
            <Row
              style={{
                flex: 0.25,
                alignItems: 'flex-end',
                justifyContent: 'center',
                width: Metrics.screenWidth/ 2
              }}
            >
              <CardItem>
                <Body>
                  <TouchableOpacity
                    style={styles.myTripTrackNowBtn}
                    onPress={this.onPressRoundTripButton}>
                    <Icon
                      name='md-star-outline'
                      style={{
                        fontSize:Fonts.size.h5,
                        color: Colors.roundTripColor,
                        justifyContent: 'center',
                        top: -2.5,
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
