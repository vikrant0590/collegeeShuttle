import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Item, Input, StyleProvider } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import { Images,Colors } from '../../theme';
import { GoogleLogin, FacebookLogin } from '../../components';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

import { validationOnEmail} from '../../helpers/EmailValidation';
import styles from './LoginStyles';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { login } from '../../redux/modules/auth';
import { toast } from '../../helpers/ToastMessage';

export default class Login extends Component {

  static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    login: PropTypes.object
  };

  constructor(props){
    super(props);
    this.state ={
      eid: undefined,
      password:undefined ,
      isVisible: false
    }
  }

  onPressLoginButton = () => {
    const {eid, password} = this.state;
    if (eid && password) {
      if (validationOnEmail(eid)) {
        this.setState({isVisible: true});
        const {store: {dispatch}} = this.context;
        dispatch(login({eid, password}))
          .then(() => {
            this.setState({ isVisible:false});
            NavAction.tabbar();
          }).catch(() => {
            this.setState({isVisible: false});
            toast('Invalid Username and Password.');
          });

      } else {
        toast('Please Enter Valid Email Address.');
      }
    } else {
      toast('Please Enter Username/Password!');
    }

  };

  ForgotButton =() =>{
    NavAction.forgotPassword();
  };

  render() {
    return(
      <Container style={{backgroundColor:Colors.base }}>
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color: Colors.white}} />
        <Content>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>
              LOGIN
            </Text>
          </View>

          <View style={styles.loginFacebookContainer}>
            <FacebookLogin />
          </View>

          <View style={styles.loginGoogleContainer}>
            <GoogleLogin />
          </View>

          <View style={styles.optionalContainer}>
            <View>
              <Text style={styles.optional}>Not yet Registered?</Text>
            </View>
            <View>
              <TouchableOpacity onPress={NavAction.signUp}>
                <Text style={styles.signUpHyperlink}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <StyleProvider style={getTheme(material)}>
            <View style={styles.formContainer}>
              <Item>
                <Image source={Images.email} style={styles.formIcon}/>
                <Input placeholder="Email Address"
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(eid) => {
                    this.setState({eid});
                  }}

                />
              </Item>
              <Item>
                <Image source={Images.password} style={styles.formIcon}/>
                <Input placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(password) => {
                    this.setState({password});
                  }}

                />
              </Item>
              <View style={{alignSelf:'flex-end', marginTop:3}}>
                <TouchableOpacity onPress={this.ForgotButton}>
                  <Text style={styles.forgotPasswordButton}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </StyleProvider>

          <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.signupButton} onPress={this.onPressLoginButton}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}