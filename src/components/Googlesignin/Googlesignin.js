/**
 * Created by Admin on 17/07/17.
 */

import React, {  Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Images, Colors } from '../../theme';
import { } from 'react-native-router-flux';
import styles from './GooglesigninStyle';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';
import { googlesignin } from '../../redux/modules/auth';

export default class Googlesignin extends Component {

  constructor(props){
    super(props);
    this.state={
      isVisible:false
    };
  }

  static contextTypes = {
    store: PropTypes.object
  };

  onPressGoogleSignIn = () => {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({
        iosClientId: '444844025445-j0sm6aavdfvqcuid2uu86e819qp7q78f.apps.googleusercontent.com',
      })
        .then(() => {
          GoogleSignin.signIn()
            .then((user) => {
              const { store: { dispatch } } = this.context;
              dispatch( googlesignin(user))
                .then(() => {
                  this.setState({ isVisible:false});
                  Actions.tabbar();
                }).catch(() => {
                  this.setState({isVisible: false});
                });
            })
            .catch()
            .done();
        });
    })
      .catch();
  };

  render(){
    return(
      <TouchableOpacity style={styles.googleLoginBtn} onPress={this.onPressGoogleSignIn}>
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color: Colors.white}} />
        <View style={styles.googleLoginLogoView}>
          <Image style={styles.googlelogo} source= { Images.googleIcon }/>
        </View>
        <View style={styles.googleLoginTextView}>
          <Text style={styles.googleLoginText}>Connect With Google+</Text>
        </View>
      </TouchableOpacity>
    );
  }
}