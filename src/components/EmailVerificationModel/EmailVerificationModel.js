import React,{ Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Item, Input} from 'native-base';
import Modal from 'react-native-simple-modal';
import { connect } from 'react-redux';
import { toast } from '../../helpers/ToastMessage';
import { forgotpassword } from '../../redux/modules/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions as NavActions} from 'react-native-router-flux';
import { Colors,  } from '../../theme';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './EmailVerificationModelStyle'



class EmailVerificationModel extends  Component {

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
      open:false,
      resetToken:undefined,
      isBusy:false,
    }
  }

  showVerificationDialog = () => {
    this.setState({
      open: true,
    })
  };

  onPressSubmit = () => {
    if(this.state.resetToken){
      if(this.props.auth.forgotUser.reset_token === this.state.resetToken) {
        NavActions.passwordreset();
        this.setState({open: false});
      } else {
        toast('Verification Code Mismatch! Try again.');
      }
    } else {
      toast('Please Enter Verification Code.');
    }

  };

  closeModal =() =>{
    this.setState({ open:false });
  };

  resendCodeButton = () => {
    this.setState({ isBusy:true});

    const {store: {dispatch}} = this.context;
    dispatch(forgotpassword({email: this.props.auth.forgotUser.eid}))
      .then(() => {
        this.setState({isBusy:false});
        toast('Verification Code Sent On Your Email, Please Check Your Mail.');
      })
      .catch(()=>{
        toast('Unable To Send, Please Try Again.');
      })

  };

  render(){

    return(

      <Modal
        open={this.state.open}
        modalDidClose={this.closeModal}
        overlayBackground={Colors.modalBgColor}
        modalStyle={{
          margin: 25,
          padding: 0,
        }}
        containerStyle={{
          justifyContent: 'center',
          marginBottom:0,
        }}>
        <Spinner visible={this.state.isBusy} textContent={"Loading..."} textStyle={{color: Colors.white}} />

        <View style={styles.modalScreen}>
          <View style={{alignItems:'center',justifyContent:'center',flex:0.2,}}>
            <Text style={styles.VerificationContainer}>Verification</Text>
          </View>
          <View style={{justifyContent:"flex-start", alignItems:'center',flex:0.3,}}>
            <Text style={styles.verificationMessage}>
              {'\t'}We have send the verification{'\n'}code to your email and Registered {'\n'}{'\t\t'}mobile number
            </Text>
          </View>
          <View style={{justifyContent:'center', alignItems:"center", flex:0.1}}>
            <Text style={styles.codeHeadingText}>
              Enter Code
            </Text>
          </View>
          <View style={{flex:0.2}}>
            <Item style={{ marginLeft:30,marginRight:30}}>
              <Input
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholderTextColor={Colors.placeholderTextColor}
                onChangeText={(resetToken) => {this.setState({resetToken});
                }}
              />
            </Item>
          </View>
          <View style={{justifyContent:'center', alignItems:"center", flex:0.2,}}>
            <TouchableOpacity onPress={this.resendCodeButton}>
              <Text style={styles.resendCodeText}>
             Resend Code
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <LinearGradient
              colors={['#FC214F', '#D32735']}
              style={styles.linearGradientColor}>
              <TouchableOpacity onPress={this.onPressSubmit}
                style={styles.proceedButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(EmailVerificationModel)
