import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WalkThroughThirdStyles';
import { Images, Metrics } from '../../theme';
import { Button } from 'native-base';
import { Actions as Navigation } from 'react-native-router-flux';

export default class WalkThroughThird extends Component {
  render() {
    return (
      <LinearGradient colors={['#FC214F','#D32735']} style={styles.linearGradient}>
        <View style={styles.bag}>
          <Image style={{ resizeMode: 'contain' }} source={ Images.logo } />
          <Image style={styles.mobilelogo} source={ Images.mobilelogo } />
          <View style={styles.loginSection}>
            <Text style={styles.introText}>Track real time location of your trip.{'\n'}
              <Text style={styles.introText}>Share your trip with friends and family.</Text>
            </Text>

            <Button
              rounded
              style={{
                backgroundColor:'#FFF',
                marginTop: 20,
                height:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 40 : 50 : 60,
                width: (Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? 170 : 180 : 200,
                justifyContent:'center',
                alignSelf:'center'
              }}
              onPress={Navigation.signUp}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </Button>
            <Button
              transparent
              style={{
                marginTop: (Metrics.screenHeight === 480) ? 10 : 15,
                alignSelf:'center'
              }} onPress={Navigation.login}>
              <Text style={styles.introText}>Login </Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}