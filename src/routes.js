import React, { Component } from 'react';
import { Home } from './containers';
import { Router, Scene } from 'react-native-router-flux';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="home"  component={Home} title="Home" hideNavBar initial />
      </Router>
    );
  }
}
