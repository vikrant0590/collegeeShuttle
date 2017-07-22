import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Button, Col, Row } from 'native-base';
import styles from './HomeStyle';
import { Images, Colors, Metrics, Fonts } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {
  RoundTrip,
  RoundTripWeekly,
  RoundTripCustom,
  OfferBox
} from '../../components';

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      isRoundTrip: true,
      isOneWay: false,
      isWeekly: false,
      isSizeDefault: false,
      isWeeklyActive: true,
      isCustomActive: false
    }
  }


  onPressRoundTripButton = () => {
    if(this.state.isOneWay){
      this.setState({ isRoundTrip: true, isOneWay: false });
    }
  };

  onPressOneWayButton = () => {
    if(this.state.isRoundTrip){
      this.setState({ isOneWay: true, isRoundTrip: false });
    }
  };

  onPressNotificationButton = () => {

  };

  onPressUniversityButton = () =>{
    this.setState({ isWeekly: !this.state.isWeekly });
  };

  onPressHomeButton = () => {

  };

  onPressWeeklyButton = () => {
    this.setState({ isWeeklyActive: true, isCustomActive: false });
  };

  onPressCustomBtton = () => {
    this.setState({ isWeeklyActive: false, isCustomActive: true });
  };


  render(){
    const { isRoundTrip, isWeekly } = this.state;
    return(
      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
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
              <Col>
                <Row>
                  <Button
                    transparent
                    style={{
                      flex: 1,
                      justifyContent: 'flex-start',
                      alignSelf: 'center'
                    }}
                    onPress={this.onPressUniversityButton}>
                    <Image source={Images.roundtripunivercity} style={styles.textIcon} />
                    <Text style={styles.btnText}>From</Text>
                  </Button>
                </Row>
              </Col>
              <LinearGradient colors={['#D32735','#FF214F']} style={styles.textSeprateLine}>
                <Image source={Images.roundtripinputicon} style={styles.textSepratorIcon} />
              </LinearGradient>
              <Col>
                <Row>
                  <Button
                    transparent
                    style={{
                      flex: 1,
                      justifyContent: 'flex-start',
                      alignSelf: 'center'
                    }}
                    onPress={this.onPressHomeButton}>
                    <Image source={Images.roundtriphome} style={styles.textIcon} />
                    <Text style={styles.btnText}>To</Text>
                  </Button>
                </Row>
              </Col>
            </View>
          </LinearGradient>
          {(isWeekly) ?
            <View style={{ backgroundColor: Colors.base }}>
              <View style={{ height: 40, backgroundColor: '#FF214F', flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: (this.state.isWeeklyActive) ? 5 : 0,
                    borderBottomColor: (this.state.isWeeklyActive) ? Colors.base : Colors.transparent
                  }}
                  onPress={this.onPressWeeklyButton}>
                  <Text
                    style={{
                      fontSize: Fonts.size.medium,
                      fontFamily: Fonts.lato.bold,
                      fontWeight: '600',
                      paddingTop: (this.state.isCustomActive) ? 5 : 0,
                      color: (this.state.isWeeklyActive) ? Colors.white : Colors.hpmeSubHeaderBtnColor
                    }}>WEEKLY</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: (this.state.isCustomActive) ? 5 : 0,
                    borderBottomColor: (this.state.isCustomActive) ? Colors.base : Colors.transparent
                  }}
                  onPress={this.onPressCustomBtton}>
                  <Text
                    style={{
                      fontSize: Fonts.size.medium,
                      fontFamily: Fonts.lato.bold,
                      fontWeight: '600',
                      paddingTop: (this.state.isCustomActive) ? 5 : 0,
                      color: (this.state.isCustomActive) ? Colors.white : Colors.hpmeSubHeaderBtnColor
                    }}>CUSTOM</Text>
                </TouchableOpacity>
              </View>
              {(this.state.isWeeklyActive) ? <RoundTripWeekly /> :  <RoundTripCustom /> }
            </View>

            :
            <View style={styles.RoundTripView}>
              <RoundTrip />
            </View>
          }
        </Content>
        <OfferBox ref="offerbox"/>
      </Container>
    )
  }
}