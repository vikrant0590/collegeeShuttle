import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WalkThroughThirdStyles';
import { Images } from '../../theme';

export default class WalkThroughThird extends Component {
  render() {
    return (
      <LinearGradient colors={['#FC214F','#D32735']} style={styles.linearGradient}>
        <View style={styles.logo}>
          <Image source={ Images.mobilelogo } />
          <Text style={styles.introText}>Track real time location of your trip.{'\n'}
            <Text style={styles.introText}>Share your trip with friends and family.</Text>
          </Text>
          <Image source={ Images.introLocation }/>
        </View>
      </LinearGradient>
    );
  }
}