import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right  } from 'native-base';
import { Colors, Images, Fonts, Metrics } from '../../theme';
import styles from './RoundTripCustomStyle';
import { Calender } from '../../components';


export default class RoundTripCustom extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor: Colors.base }}>
                <Calender />
                <View style={styles.PassengerTextView}>
                    <Text style={styles.PassengerText}>Passengers</Text>
                </View>
                <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                    <Row style={{ flex: 1}}>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.passengersBtnText}>1</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.passengersBtnText}>2</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.passengersBtnText}>3</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.passengersBtnText}>4</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.passengersBtnText}>5</Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Row>
                </Card>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={this.onPressPassenger}>
                    <Text style={styles.searchBtnText}>Search</Text>
                </TouchableOpacity>
                <Card style={{ marginLeft: 15, marginRight: 15 }}>
                    <Row style={{ flex: 1 }}>
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
                                    <Body style={{ top: 20  }}>
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
