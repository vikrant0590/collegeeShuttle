import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right, Tab, Tabs } from 'native-base';
import styles from './HomeStyle';
import { Colors, Images, Fonts } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { RoundTrip, RoundTripWeekly, RoundTripCustom } from '../../components';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            isRoundTrip: true,
            isWeekly: false,
        }
    }


    onPressRoundTripButton = () => {
           this.setState({ isRoundTrip: ! this.state.isRoundTrip })
    };

    onPressOneWayButton = () => {
           this.setState({ isRoundTrip: ! this.state.isRoundTrip })
    };

    onPressNotificationButton = () => {
        this.setState({ isWeekly: !this.state.isWeekly })
    };


    render(){
        const { isRoundTrip, isWeekly } = this.state;
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
                    </LinearGradient>
                    {(!isWeekly) ?
                        <View style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                            <RoundTrip />
                        </View>
                        :
                        <Tabs initialPage={1} tabBarUnderlineStyle= {{ backgroundColor: Colors.white }}>
                            <Tab
                                heading="WEEKLY"
                                textStyle={{
                                    fontSize: Fonts.size.medium,
                                    fontFamily: Fonts.lato.bold,
                                    color: Colors.tabbarColor
                                }}
                                tabStyle={{ backgroundColor: Colors.roundTripWeeklyBGColor }}
                                activeTabStyle={{ backgroundColor: Colors.roundTripWeeklyBGColor }}
                                activeTextStyle={{
                                    color: Colors.white,
                                    fontSize: Fonts.size.medium,
                                    fontFamily: Fonts.lato.bold
                                }}>
                                <RoundTripWeekly />
                            </Tab>
                            <Tab
                                heading="CUSTOM"
                                textStyle={{
                                    fontSize: Fonts.size.medium,
                                    fontFamily: Fonts.lato.bold,
                                    color: Colors.tabbarColor
                                }}
                                tabStyle={{ backgroundColor: Colors.roundTripWeeklyBGColor }}
                                activeTabStyle={{ backgroundColor: Colors.roundTripWeeklyBGColor }}
                                activeTextStyle={{
                                    fontSize: Fonts.size.medium,
                                    fontFamily: Fonts.lato.bold,
                                    color: Colors.white
                                }}>
                                <RoundTripCustom />
                            </Tab>
                        </Tabs>

                    }
                </Content>
            </Container>
        )
    }
}