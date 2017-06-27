import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './HomeStyles';

export default class Home extends Component {
  render() {
    return (
      <View style={ styles.center }>
        <Text>Home Page </Text>
      </View>
    );
  }
}