import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Item, Input, StyleProvider } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import { Images,Colors } from '../../theme';

import styles from './LoginStyles';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Login extends Component {
  render() {
    return(
      <Container style={{ flex:1, backgroundColor:Colors.base }}>
        <Content>

          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>
              LOGIN
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

          <View style={styles.loginGoogleContainer}>
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
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>
              <Item>
                <Image source={Images.password} style={styles.formIcon}/>
                <Input placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>
            </View>
          </StyleProvider>

          <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.signupButton} onPress={NavAction.allTrips}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}