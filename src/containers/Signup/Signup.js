import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Item, Input, StyleProvider } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';

import styles from './SignupStyles';
import { Images, Colors } from '../../theme';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Signup extends Component {

  render() {
    return(
      <Container style={{backgroundColor:Colors.base }}>
        <Content>
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
                <Input placeholder="First Name"
                  placeholderTextColor={Colors.placeholderTextColor}
                  autoCorrect={false}
                  returnKeyType="next"
                  autoFocus ={false}
                />
              </Item>
              <Item>
                <Image source={Images.name} style={styles.formIcon}/>
                <Input placeholder="Last Name"
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>
              <Item>
                <Image source={Images.email} style={styles.formIcon}/>
                <Input placeholder="Email Address"
                  autoCorrect={false}
                  keyboardType = "email-address"
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>
              <Item>
                <Image source={Images.password} style={styles.formIcon}/>
                <Input placeholder="Password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>
              <Item>
                <Image source={Images.mobile} style={styles.formIcon}/>
                <Input placeholder="Mobile Number"
                  keyboardType = 'numeric'
                  placeholderTextColor={Colors.placeholderTextColor}/>
              </Item>

            </View>
          </StyleProvider>

          <View style={styles.signupButtonContainer}>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={NavAction.tabbar}
            >
              <Text style={styles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}