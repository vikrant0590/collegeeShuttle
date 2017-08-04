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
import { Images, Colors } from '../../theme';
import { } from 'react-native-router-flux';
import styles from './FacebooksigninStyle';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { facebooksignin } from '../../redux/modules/auth';
import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from 'react-native-fbsdk';

export default class Facebooksignin extends Component {

  constructor(props){
    super(props);
    this.state={
      isVisible:false
    };
  }

  static contextTypes = {
    store: PropTypes.object,
    facebooksignin:PropTypes.object
  };

  onPressFacebookSignIn = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday']).then(
      (result) => {
        this.setState({ isVisible: true});
        if (!result.isCancelled) {
          AccessToken
            .getCurrentAccessToken()
            .then( data => {
              const  accessToken = data.accessToken;
              const responseInfoCallback = async ( errorResponse, resultResponse) => {
                const userDetails = JSON.parse(JSON.stringify(resultResponse));
                const { store: { dispatch }} = this.context;
                dispatch(facebooksignin(userDetails))
                  .then(() => {
                    this.setState({ isVisible:false});
                    Actions.tabbar();
                  }).catch(() => {
                    this.setState({isVisible: false});
                  });
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
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color: Colors.white}} />

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

