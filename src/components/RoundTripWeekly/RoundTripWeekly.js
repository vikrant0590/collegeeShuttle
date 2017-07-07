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
                <Card style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Col>
                        <Row style={{ height: 40 }}>
                            <CardItem style={{
                                         flex: 1,
                                         backgroundColor: Colors.weekHeaderColor,
                                         justifyContent: 'center',
                                         alignItems: 'center'
                                    }}>
                                <Text style={{ fontSize: Fonts.size.medium, fontFamily: Fonts.lato.bold, color: Colors.white }}>THIS WEEK</Text>
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
                <View style={{ flex: 1, marginLeft: 40, marginRight: 40, marginTop: 15 }}>
                    <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>Passengers</Text>
                </View>
                <Card style={{ flex: 1, marginLeft: 40, marginRight: 40, marginTop: 10 }}>
                    <Row style={{ flex: 1}}>
                        <CardItem style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>1</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>2</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>3</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>4</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={styles.passengersNumberButton}
                                onPress={this.onPressPassenger}>
                                <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.black }}>5</Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Row>
                </Card>
                    <TouchableOpacity
                        style={{ flex: 1, height: 52, width: Metrics.screenWidth/2,  alignSelf: 'center', justifyContent: 'center', margin: 15, backgroundColor: '#FF214F', borderRadius: 26 }}
                        onPress={this.onPressPassenger}>
                        <Text style={{ fontSize: Fonts.size.regular, fontFamily: Fonts.lato.bold, color: Colors.white, alignSelf: 'center' }}>Search</Text>
                    </TouchableOpacity>

            </View>
        );
    }

}
