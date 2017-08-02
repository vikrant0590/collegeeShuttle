import React,{ Component } from 'react';
import {View, Text, Image } from 'react-native';
import {
  Item,
  Input,
  Body,
  Title,
  Left,
  Right,
  Button,
  Header,
  Icon,
  Container,
  Content
} from 'native-base';
import {Actions as NavActions} from 'react-native-router-flux';
import { Colors, Fonts, Images, Metrics  } from '../../theme';
import { changepassword } from '../../redux/modules/auth';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import { toast } from '../../helpers/ToastMessage';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './PasswordResetStyle'


class PasswordReset extends  Component {


  static propTypes = {
    dispatch: PropTypes.func,
    auth: PropTypes.any
  };

  static contextTypes = {
    store: PropTypes.object
  };


  constructor(props){
    super(props);
    this.state ={
      isBusy:false,
      new_password: undefined,
      confirmPassword: undefined,
      user_Id: undefined,
      reset_Token: undefined,


    };
  }


  closeModal =() =>{
    this.setState({ open:false });
  };

  onPressBack = () => {
    NavActions.pop();
  };

  onPressSubmitButton =() =>{
    this.setState({isBusy:true});
    let data = {
      'user_id': this.props.auth.forgotUser._id,
      'reset_token': this.props.auth.forgotUser.reset_token,
      'new_password': this.state.new_password,
    };

    const {store: {dispatch}} = this.context;

    if(this.state.new_password && this.state.confirmPassword){
      if(this.state.new_password === this.state.confirmPassword){
        dispatch(changepassword(data))
          .then(()=>{
            this.setState({isBusy:false});
            toast("Password Changed Successfuly");
            NavActions.login();
          })
          .catch(() => {
          })
      } else {
        this.setState({isBusy:false});
        toast("Password Do Not Matched");
      }
    } else {
      this.setState({isBusy:false});
      toast('Please Enter Both Password Fields.');

    }
  };

  render(){
    return(
      <Container style={{flex:1, backgroundColor:Colors.base}}>
        <Spinner visible={this.state.isBusy} textContent={"Loading..."} textStyle={{color: Colors.white}} />
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left>
              <Button transparent onPress={this.onPressBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{
                color: Colors.white,
                marginLeft:-40,
                marginRight:-40,
                ...Fonts.style.title}}>Forgot Password</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <Item style={{marginTop:40, marginLeft:50,marginRight:50}}>
            <Image source={Images.password} style={styles.formIcon}/>
            <Input placeholder="New password"
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={'none'}
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={(new_password) => {this.setState({new_password});
              }}
            />
          </Item>
          <Item style={{marginTop:10, marginLeft:50,marginRight:50}}>
            <Image source={Images.password} style={styles.formIcon}/>
            <Input placeholder="Confirm New password"
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={'none'}
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={(confirmPassword) => {this.setState({confirmPassword});
              }}
            />
          </Item>
          <View style={styles.submitButtonContainer}>
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
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};
const  mapDispatchToProps = {

};

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(PasswordReset)