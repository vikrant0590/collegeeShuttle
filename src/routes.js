import React, { Component } from 'react';
import {
  WalkThrough, Home, SignUp, Login, MyProfile,
  Setting, ProfileEdit, Packages,
  BuyPackage, FriendList, AllTrips,
  MyTrips, TabBar, InviteFriend
} from './containers';
import { Router, Scene } from 'react-native-router-flux';

import { View, Text } from 'react-native';

export default class AppRouter extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{backgroundColor:'#fc214f', borderBottomWidth: 0}} >
        <Scene key="walkThrough" component={WalkThrough} hideNavBar={true} initial/>
        <Scene key="home"  component={Home}  hideNavBar={true}/>
        <Scene key="signUp"  component={SignUp} title="SignUp"/>
        <Scene key="login" component={Login} title="Login"/>
        <Scene key ="myprofile" component={MyProfile} hideNavBar={false}/>
        <Scene key="mytrips" component={MyTrips} hideNavBar={false}/>
        <Scene key="setting" component={Setting} hideNavBar={true}/>
        <Scene key="profileedit" component={ProfileEdit} hideNavBar={true}/>
        <Scene key="packages" component={Packages} hideNavBar={true}/>
        <Scene key="buypackage" component={BuyPackage} hideNavBar={true}/>
        <Scene key="tabbar" component={TabBar} hideNavBar={true}/>
        <Scene key="friendlist" component={FriendList} hideNavBar ={true}/>
        <Scene key="allTrips" component={AllTrips} hideNavBar={true}/>
        <Scene key="invitefriend" component={InviteFriend} hideNavBar={true} direction='vertical' />
      </Router>
    );
  }
}
