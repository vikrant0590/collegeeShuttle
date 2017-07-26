import React, { Component } from 'react';
import {
  Text,
  Image,
  TextInput
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Button,
  Left,
  Body,
  Title,
  Right,
  Row,
  Col
} from 'native-base';
import styles from './InviteFriendStyle';
import { Colors, Images, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class InviteFriend extends Component {

  constructor () {
    super();
    this.state = {
      text: undefined
    };
  }

  onPressSearchList = () =>{

  };

  render() {
    return(
      <Container style={{ backgroundColor: Colors.base }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left />
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title }}>Invite Friends</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=> Actions.pop()}>
                <Text style={styles.navRightCancelBtnText}>Cancel</Text>
              </Button>
            </Right>
          </Header>
        </LinearGradient>

        <Row
          style={{
            flex: 1,
            height: 40,
            marginLeft: 15,
            marginTop: 15,
            marginRight: 15
          }}>
          <Col style={{ flex: 0.85, height: 40 }}>
            <Row
              style={{
                height: 40,
                borderColor: Colors.settingHeadingTextColor,
                borderWidth: 1,
                flex: 1,
                borderRadius: 4,
                backgroundColor: Colors.white
              }}>
              <Col style={{ flex: 0.92 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: Colors.white }}
                  onChangeText={(text) => this.setState({text})}
                  placeholderTextColor =  {Colors.settingHeadingTextColor}
                  value={this.state.text}
                />
              </Col>
              <Col
                style={{
                  flex: 0.08,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10 }}>
                <Image style={{ resizeMode: 'contain' }} source={Images.searchicon} />
              </Col>
            </Row>
          </Col>
          <Col style={{ flex: 0.15, height: 40 }}>
            <Button transparent onPress={this.onPressSearchList()}>
              <Image style={{}} source={Images.inviteaddfriendicon} />
            </Button>
          </Col>
        </Row>
        <Content/>
      </Container>
    )
  }
}