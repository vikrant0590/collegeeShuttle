import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PaymentModalSuccess from 'react-native-simple-modal';
import styles from './PaymentSuccessStyle';
import { Images, Fonts, Colors, Metrics } from '../../theme';
import { Row, Col, Icon, Button } from 'native-base';
import { Actions as NavAction } from 'react-native-router-flux';

export default class PaymentSuccess extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
    }
  }

  showDialogPaymentSuccess = () => {
    this.setState({
      open: true,
    });
  };

  onPressViewDetails = () => {
    this.setState({open: false});
    NavAction.tabbar({type:'reset', selectedTab:2 });

  };

  onPressCloseBtn = () => {
    this.setState({open: false});
  };

  onPressWhatAppShare = () =>{

  };

  onPressFacebookShare = () =>{

  };

  onPressGoogleShare = () =>{

  };

  onPressInviteFriend = () => {
    this.setState({open: false});
    NavAction.invitefriend();
  };


  render(){
    const { open } = this.state;
    return(
      <PaymentModalSuccess
        open={open}
        overlayBackground={Colors.modalBgColor}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.PaymentViewConatiner}
        modalStyle={styles.PaymentViewStyle}>
        <View style={styles.container}>
          <View style={{ flex: 0.15 }}>
            <Row>
              <Col style={{ flex: 0.9, alignItems: 'center', marginLeft: 30 }}>
                <Image style={styles.headerImage} source={Images.paymentComplete}/>
              </Col>
              <Col style={{ flex: 0.1, marginRight: 10 }}>
                <Button
                  transparent
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center'
                  }} onPress={this.onPressCloseBtn}>
                  <Icon
                    name="md-close"
                    style={{
                      fontSize: Fonts.size.regular,
                      alignSelf: 'center',
                      color: Colors.placeholderTextColor
                    }}
                  />
                </Button>
              </Col>
            </Row>
          </View>
          <View style={{ flex: 0.75  }}>
            <View style={styles.paymentTextView}>
              <Text style={styles.paymentText}>Thank you{'\n'} for your purchase</Text>
            </View>
            <View style={styles.messageTextView}>
              <Text style={styles.messageText}>Your tickets has been booked for{'\n'}Feb 25, 2017 at 04:30PM</Text>
            </View>
            <View style={styles.paymentTextView}>
              <Text style={styles.paymentText}>SHARE NOW</Text>
            </View>
            <Row style={{ marginTop: Metrics.screenWidth/ 30, marginBottom: Metrics.screenWidth/ 30 }}>
              <Col style={{ flex: 3.3 }}>
                <Button transparent onPress={this.onPressWhatAppShare} style={{ flex: 1, alignSelf: 'center' }}>
                  <Image style={styles.buttonIcon} source={Images.whatsapp}/>
                </Button>
              </Col>
              <Col style={{ flex: 3.3 }}>
                <Button transparent onPress={this.onPressFacebookShare} style={{ flex: 1, alignSelf: 'center' }}>
                  <Image style={styles.buttonIcon} source={Images.fb}/>
                </Button>
              </Col>
              <Col style={{ flex: 3.3 }}>
                <Button transparent onPress={this.onPressGoogleShare} style={{ flex: 1, alignSelf: 'center'}}>
                  <Image style={styles.buttonIcon} source={Images.googlePlus}/>
                </Button>
              </Col>
            </Row>
          </View>
          <View style={{ flex: 0.30  }}>
            <Row style={{ flex: 1}}>
              <Col style={{ flex: 0.5 }}>
                <TouchableOpacity
                  onPress={this.onPressInviteFriend}
                  style={styles.inviteFriendBtn}>
                  <Text
                    style={styles.inviteText}>
                    Invite Friends
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col style={{ flex: 0.5 }}>
                <TouchableOpacity
                  onPress={this.onPressViewDetails}
                  style={styles.ViewDetailsBtn}>
                  <Text
                    style={styles.viewDetailText}>
                   View Details
                  </Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        </View>
      </PaymentModalSuccess>
    )
  }
}