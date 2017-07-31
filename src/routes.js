import React, { Component } from 'react';
import {
  WalkThrough,
  Home,
  SignUp,
  Login,
  MyProfile,
  MyTrips,
  Setting,
  ProfileEdit,
  Packages,
  BuyPackage,
  FriendList,
  AllTrips,
  PassengerDetail,
  InviteFriend,
  Offers,
  HelpSupport,
  Payment,
  AddCard,
  MyPackage,
  Notification,
  MyTripMap,
  ForgotPassword,
  PasswordReset
} from './containers';
import {
  InformationModal,
  WalkThroughFirst,
  TabIcon
} from './components';
import {
  Images,
  Colors
} from './theme';
import { login } from './redux/modules/auth';
import { Router, Scene } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import styles from './routesStyle';
export default class AppRouter extends Component {

  static contextTypes = {
    store: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('userCredentials')
      .then( (value) =>{
        if (value) {
          const  userCredentials = JSON.parse(value);
          const {store: {dispatch}} = this.context;
          dispatch(login(userCredentials, true))
            .then( () => {
              this.setState({
                logged: true,
                loading: false,
              });
            })
            .catch( () => {
              this.setState({
                loading: false,
              })
            });
        } else {
          this.setState({ loading: false });
        }
      });
  }

  render() {
    if (this.state.loading) {
      return <WalkThroughFirst />
    }

    return (
      <Router navigationBarStyle={{backgroundColor:'#fc214f', borderBottomWidth: 0 }}>
        <Scene key="walkThrough" component={WalkThrough} hideNavBar={true}  initial={!this.state.logged}/>
        <Scene key="signUp"  component={SignUp} title="SignUp"/>
        <Scene key="login" component={Login} title="Login"/>
        <Scene
          tabs
          key="tabbar"
          tabBarStyle={styles.tabBarStyle}
          hideNavBar={true}
          tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
          initial={this.state.logged}
        >
          <Scene
            key="tab1"
            title="HOME"
            icon={TabIcon}
            tabIcon={Images.home}
            selectedTabIcon={Images.homeActive}
            titleStyle={{ color: Colors.placeholderTextColor }}>

            <Scene key="home" component={Home} hideNavBar={true}/>
            <Scene key="homebuypackage" component={BuyPackage} hideNavBar={true}/>
            <Scene key="allTrips" component={AllTrips} hideNavBar={true}/>
            <Scene key="notification" component={Notification} hideNavBar={true}/>
          </Scene>

          <Scene
            key="tab2"
            title="MY TRIPS"
            icon={TabIcon}
            tabIcon={Images.travel}
            selectedTabIcon={Images.travelActive}
            titleStyle={{ color: Colors.placeholderTextColor }}>

            <Scene key="mytrips" component={MyTrips} title="My Trips" hideNavBar={true}/>
            <Scene key="mytripsmap" component={MyTripMap} title="My Trips" hideNavBar={true}/>

          </Scene>

          <Scene
            key="tab3"
            title="PROFILE"
            icon={TabIcon}
            selectedTabIcon={Images.profileActive}
            tabIcon={Images.profile}
            titleStyle={{ color: Colors.placeholderTextColor }}>

            <Scene key ="myprofile" component={MyProfile} hideNavBar={true}/>
            <Scene key="packages" component={Packages} hideNavBar={true}/>
          </Scene>

          <Scene
            key="tab4"
            title="SETTING"
            icon={TabIcon}
            tabIcon={Images.setting}
            selectedTabIcon={Images.settingActive}
            titleStyle={{ color: Colors.placeholderTextColor }}>
            <Scene key="setting" component={Setting} hideNavBar={true}/>
            <Scene key="settingbuypackage" component={BuyPackage} hideNavBar={true}/>
          </Scene>
        </Scene>


        <Scene key="mypackage" component={MyPackage} hideNavBar={true}/>
        <Scene key="profileedit" component={ProfileEdit} hideNavBar={true}/>


        <Scene key="friendlist" component={FriendList} hideNavBar ={true}/>

        <Scene key="invitefriend" component={InviteFriend} hideNavBar={true}  direction='vertical' />
        <Scene key="offers" component={Offers} hideNavBar={true}  direction='vertical' />
        <Scene key="helpsupport" component={HelpSupport} hideNavBar={true}/>
        <Scene key="payment" component={Payment} hideNavBar={true}/>

        <Scene key="passengerDetail" component={PassengerDetail} hideNavBar={true}/>
        <Scene key="informationModal" component={InformationModal} hideNavBar={true}/>
        <Scene key ="addCard" component={AddCard} hideNavBar={true} direction='vertical'/>
        <Scene key="forgotPassword" component={ForgotPassword} hideNavBar={true}/>
        <Scene key="passwordreset" component={PasswordReset} hideNavBar={true}/>
      </Router>
    );
  }
}

