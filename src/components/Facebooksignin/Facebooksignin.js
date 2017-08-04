/**
 * Created by Admin on 17/07/17.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Images } from '../../theme';
import { } from 'react-native-router-flux';
import styles from './FacebooksigninStyle';
import PropTypes from 'prop-types';
import { facebooksignin } from '../../redux/modules/socialAuth';
import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from 'react-native-fbsdk';

export default class Facebooksignin extends Component {

  static contextTypes = {
    store: PropTypes.object
  };

  onPressFacebookSignIn = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday']).then(
      (result) => {
        if (!result.isCancelled) {
          AccessToken
            .getCurrentAccessToken()
            .then( data => {
              const  accessToken = data.accessToken;
              const responseInfoCallback = async ( errorResponse, resultResponse) => {
                const userDetails = JSON.parse(JSON.stringify(resultResponse));
                const { store: { dispatch }} = this.context;
                dispatch(facebooksignin({
                  username: userDetails.email,
                  token: accessToken,
                  firstName:userDetails.first_name,
                  lastName:userDetails.last_name,
                  provider: 'facebook',
                  imageUrl: userDetails.picture.data.url
                }));
              };
              const infoRequest = new GraphRequest (
                '/me',
                {
                  accessToken,
                  parameters: {
                    fields: {
                      string: 'email,first_name,middle_name,last_name,picture'
                    }
                  }
                },
                responseInfoCallback
              );
              new GraphRequestManager().addRequest(infoRequest).start();
            })
            .catch();
        }
      }
    );
  };


  render(){
    return(
      <TouchableOpacity style={styles.facebookLoginBtn} onPress={this.onPressFacebookSignIn}>
        <View style={styles.facebookLogoView}>
          <Image style={styles.facebookLogo} source= { Images.facebookIcon }/>
        </View>
        <View style={styles.facebookTextView}>
          <Text style={styles.facebookText}>Connect With Facebook</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

