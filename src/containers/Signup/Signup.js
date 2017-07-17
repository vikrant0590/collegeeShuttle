import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Item, Input, StyleProvider, Toast } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import PropTypes from 'prop-types';

import styles from './SignupStyles';
import { Images, Colors } from '../../theme';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { register } from '../../redux/modules/register';

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      showToast: false,
      firstName: undefined,
      lastName: undefined,
      eid: undefined,
      password: undefined,
      mobileNumber: undefined
    };
  }

  static contextTypes = {
    store: PropTypes.object
  };

  handleSubmit = () => {
    NavAction.tabbar();
    // const {firstName, lastName, eid, password, mobileNumber} = this.state;
    // if (firstName & lastName, eid, password, mobileNumber) {
    //   const {store: {dispatch}} = this.context;
    //   dispatch(register({
    //     firstName,
    //     lastName,
    //     eid,
    //     password,
    //     mobileNumber
    //   }));
    // } else {
    //   Toast.show({
    //     text: 'All fields required!',
    //     position: 'bottom',
    //     duration: 2000,
    //     buttonText: 'Ok'
    //   });
    //   //NavAction.tabbar
    // }
  };

  render() {
    return(
      <Container style={{backgroundColor:Colors.base}}>
        <Content>
          <View style={styles.container}>
            <View style={styles.loginMedium}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTextStyle}>
                  SIGN UP
                </Text>
              </View>
              <View style={styles.loginFacebookContainer}>
                <TouchableOpacity style={styles.loginFacebookButton}>
                  <View style={styles.facebookButtonImage}>
                    <Image style={styles.facebookImage} source= { Images.facebookIcon }/>
                  </View>
                  <View style={styles.buttonText}>
                    <Text style={styles.facebookButtonText}>Connect With Facebook</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.loginGoogleButton}>
                  <View style={styles.googleButtonImage}>
                    <Image style={styles.googleImage} source= { Images.googleIcon }/>
                  </View>
                  <View style={styles.buttonText}>
                    <Text style={styles.googleButtonText}>Connect With Google+</Text>
                  </View>
                </TouchableOpacity>
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
            </View>
            <View style={styles.formInputs}>
              <StyleProvider style={getTheme(material)}>
                <View style={styles.formContainer}>
                  <Item>
                    <Image source={Images.name} style={styles.formIcon}/>
                    <Input placeholder="First Name"
                      placeholderTextColor={Colors.placeholderTextColor}
                      autoCorrect={false}
                      returnKeyType="next"
                      autoFocus ={false}
                      onChangeText={(firstName) => {
                        this.setState({firstName});
                      }}
                    />
                  </Item>
                  <Item>
                    <Image source={Images.name} style={styles.formIcon}/>
                    <Input placeholder="Last Name"
                      autoCorrect={false}
                      returnKeyType="next"
                      placeholderTextColor={Colors.placeholderTextColor}
                      onChangeText={(lastName) => {
                        this.setState({lastName});
                      }}
                    />
                  </Item>
                  <Item>
                    <Image source={Images.email} style={styles.formIcon}/>
                    <Input placeholder="Email Address"
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
                    <Input placeholder="Password"
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
                    <Input placeholder="Mobile Number"
                      keyboardType = 'numeric'
                      placeholderTextColor={Colors.placeholderTextColor}
                      onChangeText={(mobileNumber) => {
                        this.setState({mobileNumber});
                      }}
                    />
                  </Item>

                </View>
              </StyleProvider>
            </View>

            <View style={styles.signupButtonContainer}>
              <TouchableOpacity
                style={styles.signupButton}
                onPress={this.handleSubmit}
              >
                <Text style={styles.signupText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}