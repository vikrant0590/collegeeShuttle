import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Item, Input, StyleProvider } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import SnackBar from 'react-native-snackbar-dialog';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import styles from './SignupStyles';
import { Images, Colors } from '../../theme';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { GoogleLogin, FaceboolLogin } from '../../components';
import { register } from '../../redux/modules/register';

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      fn: undefined,
      ln: undefined,
      eid: undefined,
      password: undefined,
      pn: undefined,
      isVisible: false
    };
  }

  static contextTypes = {
    store: PropTypes.object,
    register: PropTypes.object
  };

  handleSubmit = () => {
    NavAction.tabbar();
    // const {fn, ln, eid, password, pn} = this.state;
    // if (fn & ln, eid, password, pn) {
    //   const {store: {dispatch}} = this.context;
    //   let data = {
    //     fn,
    //     ln,
    //     eid,
    //     password,
    //     pn
    //   };
    //   this.setState({isVisible: true});
    //   dispatch(register(data))
    //     .then(() => {
    //       this.setState({isVisible: false});
    //       NavAction.tabbar();
    //     })
    //     .catch(ex => {
    //       this.setState({isVisible: false});
    //       SnackBar.show(ex.error.message, {
    //         duration: 1000,
    //         confirmText: 'Ok',
    //         tapToClose: true,
    //         onConfirm: () => {
    //           SnackBar.dismiss()
    //         }
    //       });
    //     });
    // } else {
    //   SnackBar.show('All fields required!', {
    //     duration: 1000,
    //     confirmText: 'Ok',
    //     tapToClose: true,
    //     onConfirm: () => {
    //       SnackBar.dismiss()
    //     }
    //   });
    // }
  };

  render() {
    return(
      <Container style={{ flex:1, backgroundColor:Colors.base }}>
        <Content>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>
              SIGN UP
            </Text>
          </View>
          <View style={styles.loginFacebookContainer}>
            <FaceboolLogin />
          </View>
          <View style={styles.loginGoogleContainer}>
            <GoogleLogin />
          </View>
          <View style={styles.optionalContainer}>
            <View>
              <Text style={styles.optional}>Already have an Account?</Text>
            </View>
            <View>
              <TouchableOpacity onPress={NavAction.login}>
                <Text style={styles.LoginHyperlink}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <StyleProvider style={getTheme(material)}>
            <View style={styles.formContainer}>
              <Item>
                <Image source={Images.name} style={styles.formIcon}/>
                <Input
                  placeholder="First Name"
                  placeholderTextColor={Colors.placeholderTextColor}
                  autoCorrect={false}
                  autoFocus ={false}
                  onChangeText={(firstName) => {
                    this.setState({firstName});
                  }}
                />
              </Item>
              <Item>
                <Image source={Images.name} style={styles.formIcon}/>
                <Input
                  placeholder="Last Name"
                  autoCorrect={false}
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(lastName) => {
                    this.setState({lastName});
                  }}
                />
              </Item>
              <Item>
                <Image source={Images.email} style={styles.formIcon}/>
                <Input
                  placeholder="Email Address"
                  autoCorrect={false}
                  keyboardType = "email-address"
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(eid) => {
                    this.setState({eid});
                  }}
                />
              </Item>
              <Item>
                <Image source={Images.password} style={styles.formIcon}/>
                <Input
                  placeholder="Password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(password) => {
                    this.setState({password});
                  }}
                />
              </Item>
              <Item>
                <Image source={Images.mobile} style={styles.formIcon}/>
                <Input
                  placeholder="Mobile Number"
                  keyboardType = 'numeric'
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={(mobileNumber) => {
                    this.setState({mobileNumber});
                  }}
                />
              </Item>

            </View>
          </StyleProvider>

          <View style={styles.signupButtonContainer}>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={this.handleSubmit}
            >
              <Text style={styles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}