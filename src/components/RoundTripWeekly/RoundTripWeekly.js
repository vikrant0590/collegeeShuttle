import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right  } from 'native-base';
import { Colors, Images, Fonts, Metrics } from '../../theme';
import styles from './RoundTripWeeklyStyle';
import SwipeWeekly from 'react-native-swipe-a-lot';
import LinearGradient from 'react-native-linear-gradient';

export default class RoundTripWeekly extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    onPressPassenger = () =>{
        const pNum = (parseInt(this.swiper.getPage()) + 1);
        this.swiper.swipeToPage(pNum)
    };

    render(){
        const swiperpage = [];
        for(let index = 0; index < 5; index ++){
            swiperpage.push(
                <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15, bottom : 0 }} key="swiperpage">
                    <Col style={{ flex: 1, }}>
                        <Row style={{ height: 40 }}>
                            <CardItem style={{
                                         flex: 1,
                                         backgroundColor: Colors.weekHeaderColor,
                                         justifyContent: 'center',
                                         alignItems: 'center'
                                    }}>
                                <Text style={styles.cardTitleText}>THIS WEEK</Text>
                            </CardItem>
                        </Row>
                        <Row style={{ flex: 1 }}>
                            <Col style={{ flex: 1 }}>
                                <CardItem>
                                    <Body style={{ borderRightColor: Colors.thinLineColor, borderRightWidth: 1.5, alignItems: 'center' }}>
                                    <Text style={styles.dateWeekText}>25</Text>
                                    <Text style={styles.dayWeekText}>Friday</Text>
                                    <Text style={styles.monthWeekText}>Feb, 2017</Text>
                                    <Text style={styles.timeWeekText}>04:00 PM</Text>
                                    </Body>
                                </CardItem>
                            </Col>
                            <Col style={{ flex: 1 }}>
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
            );
        }

        return(
            <View style={{ backgroundColor: Colors.base }}>
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
                <Card style={{ flex: 1, marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                    <Row style={{ flex: 1}}>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.PassengerBtnText}>1</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.PassengerBtnText}>2</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.PassengerBtnText}>3</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.PassengerBtnText}>4</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 5 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={styles.PassengerBtnText}>5</Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Row>
                </Card>
                <View>
                    <TouchableOpacity
                        style={styles.searchBtn}
                        onPress={this.onPressPassenger}>
                        <Text style={styles.searchBtnText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
