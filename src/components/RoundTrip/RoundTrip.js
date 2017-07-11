import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right  } from 'native-base';
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
                       <Body style={{ marginTop: 30, marginBottom: 20 }}>
                       <View style={{ flex: 1, marginRight: 10 }}>
                           <TouchableOpacity
                               style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
                               onPress={this.onPressInviteButton}>
                               <Icon name='ios-contact' style={{ fontSize: 40, alignSelf: 'center', marginLeft: 10 }} />
                               <Icon name='ios-contact' style={{ fontSize: 40, alignSelf: 'center', marginLeft: 10 }} />
                               <Icon name='ios-contact' style={{ fontSize: 40, alignSelf: 'center', marginLeft: 10 }} />
                               <Image source={Images.roundtripaddicon} style={{ height: 34, width: 40, resizeMode: 'contain', marginLeft: 10, alignSelf: 'center' }} />
                           </TouchableOpacity>
                       </View>
                       </Body>
                   </CardItem>
               </Card>
               <Card style={{ top: 10 }}>
                   <Col>
                       <Row>
                           <CardItem header>
                               <Body>
                               <Text style={styles.descriptionText}>Get upto <Text style={{ color: Colors.roundTripColor }}>30% OFF</Text> on your booking</Text>
                               </Body>
                           </CardItem>
                       </Row>
                       <Row>
                           <CardItem cardBody>
                               <Text style={{ fontSize: Fonts.size.medium, fontFamily: Fonts.lato.base, color: Colors.settingHeadingTextColor, paddingLeft: 15 }}>
                                   Lorem lpsum is simply dummy text {'\n'}of the printing and typesetting.
                               </Text>
                           </CardItem>
                       </Row>
                       <Row style={{ top: -20 }}>
                           <CardItem button>
                               <Body>
                               <Image source={Images.roundtripbusicon} style={styles.busIcon} />
                               </Body>
                           </CardItem>
                       </Row>
                   </Col>
               </Card>
           </View>
        )
    }
}