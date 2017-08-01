import React,{ Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient';
import styles from './PasswordResetStyle'



export default class PasswordReset extends  Component {

  constructor(props){
    super(props);
    this.state ={

    };
  }


  closeModal =() =>{
    this.setState({ open:false });
  };

  onPressBack = () => {
    NavActions.pop();
  };

  onPressSubmitButton =() =>{
    NavActions.login();

  };

  render(){
    return(
      <Container style={{flex:1, backgroundColor:Colors.base}}>
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
            <Image source={Images.password} style={styles.formIcon}/>
            <Input placeholder="New password"
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={'none'}
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={(email) => {this.setState({email});
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

              onChangeText={(email) => {this.setState({email});
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