import React, { Component } from 'react';
import { WalkThroughFirst, WalkThroughSecond, WalkThroughThird } from '../../components';
import SwipeALot from 'react-native-swipe-a-lot';

export default class WalkThrough extends Component {

  render() {
    return (
      <SwipeALot>
        <WalkThroughFirst />
        <WalkThroughSecond />
        <WalkThroughThird />
      </SwipeALot>
    );
  }
}