import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Item, Input, StyleProvider } from 'native-base';
import {Actions as NavAction} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { validationOnEmail} from '../../helpers/EmailValidation';
import styles from './SignupStyles';
import { Images, Colors } from '../../theme';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { GoogleLogin, FaceboolLogin } from '../../components';
import { register } from '../../redux/modules/register';
import { toast } from '../../helpers/ToastMessage';
import Facebooksignin from "../../components/Facebooksignin/Facebooksignin";
import Googlesignin from "../../components/Googlesignin/Googlesignin";


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

  validateEmail =(data) =>{
    return validationOnEmail(data);
  };


  handleSubmit = () => {

    const {fn, ln, eid, password, pn} = this.state;

    if (fn & ln, eid, password, pn) {
      if (this.validateEmail(eid)) {
        const {store: {dispatch}} = this.context;
        let data = {
          fn,
          ln,
          eid,
          password,
          pn
        };
        this.setState({isVisible: true});
        dispatch(register(data))
          .then(() => {
            this.setState({isVisible: false});
            toast('Successfully Register!');
            NavAction.login();
          })
          .catch(ex => {
            this.setState({isVisible: false});
            toast(ex.error.message);
          });
      } else {
        toast('Please Enter Valid Email Address.');
      }
    } else {
      toast('All fields required!');
    }
  };


  render() {
    return(
      <Container style={{backgroundColor:Colors.base}}>
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color: Colors.white}} />
        <Content>
          <View style={styles.container}>
            <View style={styles.loginMedium}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTextStyle}>
                  SIGN UP
                </Text>
              </View>
              <View style={styles.loginFacebookContainer}>
                <Facebooksignin/>
              </View>
              <View style={styles.loginGoogleContainer}>
                <Googlesignin/>
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
                    <Input
                      placeholder="First Name"
                      placeholderTextColor={Colors.placeholderTextColor}
                      autoCorrect={false}
                      returnKeyType="next"
                      autoFocus ={false}
                      onChangeText={(fn) => {
                        this.setState({fn});
                      }}
                    />
                  </Item>
                  <Item>
                    <Image source={Images.name} style={styles.formIcon}/>
                    <Input
                      placeholder="Last Name"
                      autoCorrect={false}
                      returnKeyType="next"
                      placeholderTextColor={Colors.placeholderTextColor}
                      onChangeText={(ln) => {
                        this.setState({ln});
                      }}
                    />
                  </Item>
                  <Item>
                    <Image source={Images.email} style={styles.formIcon}/>
                    <Input
                      placeholder="Email Address"
                      autoCorrect={false}
                      autoCapitalize={'none'}
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
                      onChangeText={(pn) => {
                        this.setState({pn});
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