import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right  } from 'native-base';
import styles from './HomeStyle';
import { Colors, Images, Fonts } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
export default class HomeTab extends Component {
    constructor(){
        super();
        this.state = {
            isRoundTrip: true
        }
    }


    onPressRoundTripButton = () => {
           this.setState({ isRoundTrip: ! this.state.isRoundTrip })
    };

    onPressOneWayButton = () => {
           this.setState({ isRoundTrip: ! this.state.isRoundTrip })
    };

    onPressNotificationButton = () => {
        console.log('notification');
    };

    onPressInviteButton = () =>{

    };


    invite = () => {
        return(
            <View style={{ flex: 1, marginRight: 10 }}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row' }}
                    onPress={this.onPressInviteButton}>
                    <Image source={Images.roundtripaddicon} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 10 }} />
                    <Image source={Images.roundtripaddicon} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 10 }} />
                    <Image source={Images.roundtripaddicon} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 10 }} />
                    <Image source={Images.roundtripaddicon} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 10 }} />
                </TouchableOpacity>
            </View>
        )
    };

    render(){
        const { isRoundTrip } = this.state;
        return(
            <Container>
                <Content>
                <LinearGradient colors={['#D32735','#FF214F']} style={styles.commonConatiner}>
                    <View style={styles.header}>
                      <View style={styles.segmentButton}>
                        <TouchableOpacity
                            style={(isRoundTrip) ? styles.activeLeftSegmentButton : styles.deactiveLeftSegmentButton }
                            onPress={this.onPressRoundTripButton}>
                                <Text style={(isRoundTrip) ? styles.activeSegmentText : styles.deactiveSegmentText }>Round Trip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(!isRoundTrip) ? styles.activeLeftSegmentButton : styles.deactiveLeftSegmentButton}
                            onPress={this.onPressOneWayButton}>
                                <Text style={(!isRoundTrip) ? styles.activeSegmentText : styles.deactiveSegmentText}>One Way</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 0.2}}>
                        <TouchableOpacity
                            style={styles.notification}
                            onPress={this.onPressNotificationButton}>
                                <Image source={Images.notification} style={styles.notificationIcon} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.textBackgroundView}>
                        <Item>
                            <Image source={Images.roundtriphome} style={styles.textIcon} />
                            <Input placeholder='University'/>
                        </Item>
                        <LinearGradient colors={['#D32735','#FF214F']} style={styles.textSeprateLine}>
                            <Image source={Images.roundtripinputicon} style={styles.textSepratorIcon} />
                        </LinearGradient>
                        <Item>
                            <Image source={Images.roundtripunivercity} style={styles.textIcon} />
                            <Input placeholder='Home'/>
                        </Item>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'row', marginTop: 30, marginBottom: 2 }}>

                    </View>
                </LinearGradient>
                 <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15 }}>
                  <Card>
                      <CardItem>
                          <Body>
                              <Text style={styles.titleHeaderText}>Upcoming Trips</Text>
                              <Text style={styles.dayText}>25</Text>
                              <Text style={styles.monthText}>Feb, 2017</Text>
                              <Text style={styles.timeText}>04:30 PM</Text>
                          </Body>
                          <View style={styles.thinLine}/>
                          <Body>
                              <Text style={styles.titleHeaderText}>DESTINATION</Text>
                              <Text style={styles.monthText}>University - Home</Text>
                              <Text style={styles.busText}>BUS NAME</Text>
                              <Text style={styles.collegeText}>College Shuttle Pro</Text>
                          </Body>
                      </CardItem>
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

                          <Body style={{ marginTop: 30, marginBottom: 20 }}>
                            {this.invite()}
                          </Body>
                      </CardItem>
                  </Card>

                  <Card style={{ top: 10 }}>
                      <CardItem>
                          <Text style={styles.descriptionText}>Get upto <Text style={{ color: Colors.roundTripColor }}>30% OFF</Text> on your booking</Text>
                      </CardItem>
                      <CardItem>
                          <Body style={{ marginBottom: 20 }}>
                              <Text style={{ fontSize: Fonts.size.medium, fontFamily: Fonts.lato.base, color: Colors.settingHeadingTextColor }}>
                                  Lorem lpsum is simply dummy text {'\n'}of the printing and typesetting.
                              </Text>
                          </Body>
                          <Image source={Images.roundtripbusicon} style={styles.busIcon} />
                      </CardItem>
                  </Card>
                 </View>
                </Content>
            </Container>
        )
    }
}