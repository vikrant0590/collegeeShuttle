
import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import { Fonts } from '../../theme';
import styles from './PaymentRefundsStyle';

export default class PaymentRefunds extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style ={styles.nonRefundableHeading}>
          Nonrefundable Tickets
        </Text>
        <Text style = {styles.nonRefundableHeading}>
          Before 48 hours
        </Text>
        <View style={styles.descriptionText}>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>1.</Text>
            <Text style={styles.points}> No refunds for Non refundable tickets.
            </Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>2.</Text>
            <Text style={styles.points}>Changing Round Trip to One Way - Ex: 72.24
          Round Trip changed to One Way - Receive a Company
          Credit of $24.24 - once a portion of reservation is used can’t make changes.
            </Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>3.</Text>
            <Text style={styles.points}>Changing One Way to Round Trip - Not possible, customer must
          purchase another one way reservation.
            </Text>
          </View>
        </View>


        <View style={styles.descriptionText}>
          <Text style = {styles.timingDirections}>
            After 48 hours
          </Text>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>1.</Text>
            <Text style={styles.points}>No refunds for non refundable tickets.</Text>
          </View>
          <View style={styles.instructionText}>
            <Text style ={{
              fontSize:Fonts.size.small, fontFamily:Fonts.lato.bold}}>2.</Text>
            <Text style={styles.headingText}>
              $36 fee to change reservation to different date.
            </Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>3.</Text>
            <Text style={styles.points}>
              Full refund if it is something that was the company’s fault - decision made later.
            </Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>4.</Text>
            <Text style={styles.points}>
              Changing Round Trip to One Way - Ex: 72.24 Round Trip changed to One Way - Company Credit
              amount $24.24 - once a portion of reservation is used can’t make changes
            </Text>
          </View>
        </View>

        <View style={styles.descriptionText}>
          <Text style = {styles.timingDirections}>
            Refundable Tickets
          </Text>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>1.</Text>
            <Text style={styles.points}>Get a full refund when cancelling.</Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>2.</Text>
            <Text style={styles.points}>Changing Round Trip to One Way - Ex: 72.24 Round Trip changed to One Way
              - Refund amount $24.24 - once a portion of reservation is used can’t make changes.
            </Text>
          </View>
          <View style={styles.instructionText}>
            <Text style={styles.remarks}>3.</Text>
            <Text style={styles.points}>Changing One Way to Round Trip - Not possible, customer must purchase
              another one way reservation.Can cancel one way then purchase Round Trip ticket.
            </Text>
          </View>
          <Text style={styles.endHeadingText}>
            All refund disputes must be put in place or brought to us with in 30 days after the scheduled trip
          </Text>
        </View>

      </View>

    )
  }
}



