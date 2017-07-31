import React,{ Component } from 'react';
import {
  View,
  Text,
  Image }
  from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Button,
  Content,
  Item,
  Input

} from 'native-base';
import { Colors, Fonts, Images, Metrics } from '../../theme';
import styles from './ForgotPasswordStyle';
import { validationOnEmail} from '../../helpers/EmailValidation';
import EmailVerificationModel from '../../components/EmailVerificationModel';
import { forgotpassword } from '../../redux/modules/auth';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { toast } from '../../helpers/ToastMessage';

export default class ForgotPassword extends  Component {

  static contextTypes = {
    store: PropTypes.object,
    forgotpassword: PropTypes.object
  };


  constructor(props){
    super(props);
    this.state = {
      email:undefined,
      isVisible: false
    }
  }

  onPressBack = () => {
    Actions.pop();
  };

  onPressSubmitButton = () => {
    /*    const {email} = this.state;
     if (email) {
     if (validationOnEmail(email)) {
     this.setState({isVisible: true});
     const {store: {dispatch}} = this.context;
     dispatch(forgotpassword({email: this.state.email}))
     .then(() => {
     this.setState({isVisible: false});*/
    this.refs.emailverificationmodel.showVerificationDialog();
    /*          }).catch(() => {
     this.setState({isVisible: false});
     toast('Email Not Registered.');
     });
     } else {
     toast('Please Enter Valid Email Address.');
     }
     } else {
     toast('Email Address Field Is Empty.');

     }
     };*/
  }

  render(){
    return(
      <Container style={{flex:1, backgroundColor:Colors.base}}>
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color: Colors.white}} />
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left>
              <Button transparent onPress={this.onPressBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>Forgot Password</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <Item style={{marginTop:40, marginLeft:50,marginRight:50}}>
            <Image source={Images.email} style={styles.formIcon}/>
            <Input placeholder="Email Address"
              autoCorrect={false}
              autoCapitalize={'none'}
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={(email) => {this.setState({email});
              }}
            />
          </Item>
          <View style={styles.submitButton}>
            <Button
              rounded
              bordered
              transparent
              style={{
                borderColor:Colors.reminderButtonColor,
                backgroundColor:Colors.transparent,
                width:Metrics.screenWidth/1.3,
              }}
              onPress={this.onPressSubmitButton}>
              <Text style={styles.submitButtonText}>SUBMIT</Text>
            </Button>
          </View>

        </Content>
        <EmailVerificationModel ref="emailverificationmodel"/>
      </Container>
    )

  }
}