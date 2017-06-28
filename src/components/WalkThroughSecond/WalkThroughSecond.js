import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WalkThroughSecondStyles';
import { Images } from '../../theme';

export default class WalkThroughSecond extends Component {
  render() {
    return (
      <LinearGradient colors={['#FC214F','#D32735']} style={styles.linearGradient}>
        <View style={styles.logo}>
          <Image source={ Images.logo } />
          <Image source={ Images.bag }/>
          <Text style={styles.introText}>Range of packages for convenient Travel experince</Text>
        </View>
      </LinearGradient>
    );
  }
}