import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PaymentModalSuccess from 'react-native-simple-modal';
import {Actions} from 'react-native-router-flux';
import styles from './PaymentSuccessStyle';
import { Images, Metrics } from '../../theme';
import { Row, Col } from 'native-base';
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
    })
  };

  onPressViewDetails = () => {
    this.setState({open: false});
    Actions.mytrips();
  };

  render(){
    const { open } = this.state;
    return(
      <PaymentModalSuccess
        open={open}
        overlayBackground={'rgba(0, 0, 0, 0.3)'}
        modalDidOpen={() => console.log('open')}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.PaymentViewConatiner}
        modalStyle={styles.PaymentViewStyle}>
        <View style={styles.container}>
          <Image style={styles.headerImage} source={Images.paymentComplete}/>
          <View>
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
              <Col>
                <Image style={styles.buttonIcon} source={Images.whatsapp}/>
              </Col>
              <Col>
                <Image style={styles.buttonIcon} source={Images.fb}/>
              </Col>
              <Col>
                <Image style={styles.buttonIcon} source={Images.googlePlus}/>
              </Col>
            </Row>

            <View>
              <Row style={{ flex: 1}}>
                <Col style={{ flex: 0.5 }}>
                  <TouchableOpacity
                    onPress={this.onPressTryAgain}
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
        </View>
      </PaymentModalSuccess>
    )
  }
}