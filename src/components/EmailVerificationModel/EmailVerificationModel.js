import React,{ Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Item, Input} from 'native-base';
import Modal from 'react-native-simple-modal';
import {Actions as NavActions} from 'react-native-router-flux';
import { Colors,  } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import styles from './EmailVerificationModelStyle'



export default class EmailVerificationModel extends  Component {

  constructor(props){
    super(props);
    this.state ={
      open:false
    }
  }

  showVerificationDialog = () => {
    console.log("Iam a model");
    this.setState({
      open: true,
    })
  };

  onPressSubmit = () => {
    this.setState({ open:false});
    NavActions.passwordreset();
  };

  closeModal =() =>{
    this.setState({ open:false });
  };
  resendCodeButton:{

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
                onChangeText={(email) => {this.setState({email});
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