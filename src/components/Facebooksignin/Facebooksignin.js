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

  constructor(){
    super();
    this.state ={

    }
  }

  static contextTypes = {
    store: PropTypes.object
  };

  // facebook sign in only for ios, right now.

  onPressFacebookSignIn = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Cancel');
        } else {
          console.log('Login success with permissions: ', result);
          AccessToken
            .getCurrentAccessToken()
            .then( data => {
              const  accessToken = data.accessToken;
              console.log('accesstoken', accessToken);
              const responseInfoCallback = async ( errorResponse, resultResponse) => {
                const userDetails = JSON.parse(JSON.stringify(resultResponse));
                console.log('userdetails', userDetails);
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
            .catch(ex => console.error('*ERROR ON GET ACCESS TOKEN', ex));
        }
      },
      (error) => {
        console.log('Login fail with error: ', error);
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

