import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './WalkThroughThirdStyles';
import { Images } from '../../theme';
import { Button } from 'native-base';
import { Actions as Navigation } from 'react-native-router-flux';

export default class WalkThroughThird extends Component {
  render() {
    return (
      <LinearGradient colors={['#FC214F','#D32735']} style={styles.linearGradient}>
        <View style={styles.bag}>
          <Image source={ Images.logo } />
          <Image source={ Images.mobilelogo } />
          <View style={styles.loginSection}>
            <Text style={styles.introText}>Track real time location of your trip.{'\n'}
              <Text style={styles.introText}>Share your trip with friends and family.</Text>
            </Text>

            <Button
              rounded
              style={{
                backgroundColor:'#FFF',
                margin: 20,
                height:60,
                width: 200,
                justifyContent:'center',
                alignSelf:'center'
              }}
              onPress={Navigation.signUp}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </Button>
            <Button transparent style={{alignSelf:'center'}} onPress={Navigation.login}>
              <Text style={styles.introText}>Login </Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}