import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PaymentModalFailed from 'react-native-simple-modal';
import {Actions } from 'react-native-router-flux';
import styles from './PaymentFailedBoxStyle';
import { Images } from '../../theme';

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

  render(){
    const { open } = this.state;
    return(
      <PaymentModalFailed
        open={open}
        overlayBackground={'rgba(0, 0, 0, 0.3)'}
        modalDidOpen={() => console.log('open')}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.PaymentViewConatiner}
        modalStyle={styles.PaymentViewStyle}
      >

        <View style={styles.container}>
          <Image style={styles.headerImage} source={Images.paymenterroricon}/>
          <View>
            <View style={styles.paymentTextView}>
              <Text style={styles.paymentText}>Payment failed</Text>
            </View>
            <View style={styles.messageTextView}>
              <Text style={styles.messageText}>Some error occured in the{'\n'}during the payment.</Text>
            </View>

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