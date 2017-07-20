import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PaymentModalFailed from 'react-native-simple-modal';
import {Actions } from 'react-native-router-flux';
import styles from './PaymentFailedBoxStyle';
import { Images, Fonts, Colors } from '../../theme';
import { Row, Col, Icon, Button } from 'native-base';
export default class PaymentFailedBox extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
    }
  }

  showDialogPaymentFailed = () => {
    this.setState({
      open: true,
    })
  };

  onPressTryAgain = () => {
    this.setState({open: false})
    Actions.payment();
  };

  onPressCloseBtn = () => {
    this.setState({open: false})
  };

  render(){
    const { open } = this.state;
    return(
      <PaymentModalFailed
        open={open}
        overlayBackground={'rgba(0, 0, 0, 0.3)'}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.PaymentViewConatiner}
        modalStyle={styles.PaymentViewStyle}
      >

        <View style={styles.container}>
          <View style={{ flex: 0.2 }}>
            <Row>
              <Col style={{  flex: 0.9, alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                <Image style={styles.headerImage} source={Images.paymenterroricon}/>
              </Col>
              <Col style={{ flex: 0.15, marginRight: 10  }}>
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
          <View style={{ flex: 0.6  }}>
            <View style={styles.paymentTextView}>
              <Text style={styles.paymentText}>Payment failed</Text>
            </View>
            <View style={styles.messageTextView}>
              <Text style={styles.messageText}>Some error occured in the{'\n'}during the payment.</Text>
            </View>
          </View>
          <View style={{ flex: 0.35, alignItems: 'center'  }}>
            <TouchableOpacity
              onPress={this.onPressTryAgain}
              style={styles.tryAgainView}>
              <Text
                style={styles.tryAgainText}>
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </PaymentModalFailed>
    )
  }
}