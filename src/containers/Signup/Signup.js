import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './SignupStyles';
import { Images } from '../../theme';

export default class Signup extends Component {
  render() {
    return(
      <View style={styles.container}>
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
        <View style={{flexDirection:'row',marginTop:50,alignItems:'center',justifyContent:'center'}}>
          <View>
            <Text style={{color:'#333333',fontSize:15}}>Already have an Account?</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color:'#D32735',fontSize:15}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>

        </View>


      </View>
    );
  }
}