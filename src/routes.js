import React, { Component } from 'react';
import { WalkThrough, Home, SignUp, Login, MyProfileTabBar,
  MyTripsTabBar, SettingTabBar, ProfileEdit, Packages  } from './containers';
import { Router, Scene } from 'react-native-router-flux';


export default class AppRouter extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{backgroundColor:'#fc214f', borderBottomWidth: 0,}}
      >
        <Scene key="walkThrough" component={WalkThrough} hideNavBar={true} initial/>
        <Scene key="home"  component={Home}  hideNavBar={true}/>
        <Scene key="signUp"  component={SignUp} title="SignUp"/>
        <Scene key="login" component={Login} title="Login"/>
        <Scene key ="myprofile" component={MyProfileTabBar} hideNavBar={false}/>
        <Scene key="mytrips" component={MyTripsTabBar} hideNavBar={false}/>
        <Scene key="setting" component={SettingTabBar} hideNavBar={true}/>
        <Scene key="profileedit" component={ProfileEdit} hideNavBar={true}/>
        <Scene key="packages" component={Packages} hideNavBar={true}/>

      </Router>
    );
  }
}
