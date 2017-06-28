import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WalkThroughFirstStyles';
import { Images } from '../../theme';

export default class WalkThroughFirst extends Component {
  render() {
    return (
      <LinearGradient colors={['#FC214F','#D32735']} style={styles.linearGradient}>
        <View style={styles.logo}>
          <Image source={ Images.logo } />
          <Image source={ Images.introLocation }/>
          <Text style={styles.introText}>Book your preferred College shuttle in few clicks</Text>
        </View>
      </LinearGradient>
    );
  }
}