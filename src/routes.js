import React, { Component } from 'react';
import { WalkThrough, Home, SignUp } from './containers';
import { Router, Scene } from 'react-native-router-flux';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="walkThrough" component={WalkThrough} hideNavBar={true} initial />
        <Scene key="home"  component={Home} title="Home"/>
        <Scene key="signUp"  component={SignUp} title="SignUp"/>
      </Router>
    );
  }
}
