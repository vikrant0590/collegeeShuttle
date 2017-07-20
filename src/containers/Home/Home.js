import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Button, Col, Row } from 'native-base';
import styles from './HomeStyle';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import
{
  RoundTrip,
  RoundTripWeekly,
  RoundTripCustom,
  RoundTripTabBar,
  OfferBox,
  PaymentFailed,
  PaymentSuccess
} from '../../components';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      isRoundTrip: true,
      isOneWay: false,
      isWeekly: false,
      isSizeDefault: false,
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
    this.refs.offerbox.showDialog();
    // this.refs.paymentsuccess.showDialogPaymentSuccess();
    // this.refs.paymentfailed.showDialogPaymentFailed();
  };

  onPressUniversityButton = () =>{
    this.setState({ isWeekly: !this.state.isWeekly });
  };

  onPressHomeButton = () => {

  };

  // onPressDialogBox = () => {
  //   this.refs.offerbox.showDialog();
  // };

  // onPressPaymentFailedBox = () =>{
  //   this.refs.paymentfailed.showDialogPaymentFailed();
  // };


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
                    <Image source={Images.roundtriphome} style={styles.textIcon} />
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
                    <Image source={Images.roundtripunivercity} style={styles.textIcon} />
                    <Text style={styles.btnText}>To</Text>
                  </Button>
                </Row>
              </Col>
            </View>
          </LinearGradient>
          {(isWeekly) ?
            <ScrollableTabView
              style={{ backgroundColor: Colors.base, flex: 1 }}
              initialPage={0}
              locked={true}
              renderTabBar={() =>{
                return(
                  <RoundTripTabBar tabTitleText={['WEEKLY', 'CUSTOM']}/>
                )
              }}
            >
              <View tabLabel="WEEKLY" style={styles.tabView} key="weekly">
                <RoundTripWeekly />
              </View>
              <View tabLabel="CUSTOM" style={styles.tabView} key="custom">
                <RoundTripCustom />
              </View>
            </ScrollableTabView>
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