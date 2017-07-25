/**
 * Created by Admin on 25/07/17.
 */

import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View
} from 'react-native';
import { } from 'native-base';
import { } from '../../theme';
import styles from './GoogleMapStyle';
export default class GoogleMap extends Component {

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 20.993776,
            longitude: 105.811417,
            latitudeDelta: 0.011,
            longitudeDelta: 0.011
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}

