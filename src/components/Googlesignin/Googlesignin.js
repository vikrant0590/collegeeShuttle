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
import { Images } from '../../theme';
import { } from 'react-native-router-flux';
import styles from './GooglesigninStyle';
import PropTypes from 'prop-types';
import { GoogleSignin } from 'react-native-google-signin';
import { googlesignin } from '../../redux/modules/socialAuth';

export default class Googlesignin extends Component {

  static contextTypes = {
    store: PropTypes.object
  };

  onPressGoogleSignIn = () => {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      console.log('Play services active');
      GoogleSignin.configure({
        iosClientId: '444844025445-j0sm6aavdfvqcuid2uu86e819qp7q78f.apps.googleusercontent.com',
      })
        .then(() => {
          GoogleSignin.signIn()
            .then((user) => {
              console.log('Login Successful.. : ',user);
              const { store: { dispatch } } = this.context;
              if(user.photo === null){
                console.log('login without picture');
                dispatch( googlesignin({
                  username: user.email,
                  firstName: user.givenName,
                  lastName:user.familyName,
                  token: user.id,
                  provider: 'google'
                }));
              }else {
                console.log('login with picture');
                dispatch(googlesignin({
                  username: user.email,
                  token: user.id,
                  firstName: user.givenName,
                  lastName:user.familyName,
                  provider: 'google',
                  imageUrl: user.photo
                }));
              }
            })
            .catch((err) => {
              console.log('WRONG SIGNIN', err);
            })
            .done();
        });
    })
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });

  };

  render(){
    return(
      <TouchableOpacity style={styles.googleLoginBtn} onPress={this.onPressGoogleSignIn}>
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