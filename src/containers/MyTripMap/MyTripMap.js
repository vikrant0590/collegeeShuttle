import React, { Component } from 'react';
import {
  Text,
  Image,
  View
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
  Col,
  Icon,
  Card,
  CardItem
} from 'native-base';
import { GoogleMap } from '../../components';
import styles from './MyTripMapStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Metrics, Images } from '../../theme';
import { Actions } from 'react-native-router-flux';
import { DriverContactModalBox } from '../../components';

export default class MyTripMap extends Component {

  onPressSearchList = () =>{
  };

  onPressContactDriver = () =>{
    this.refs.drivercall.showDialogCall();
  };

  render() {
    return(
      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent }}>
            <Left>
              <Button transparent onPress={()=> Actions.pop()}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>My Trips</Title>
            </Body>
            <Right />
          </Header>
        </LinearGradient>
        <Content>
          <View>
            <GoogleMap />
          </View>
          <View>
            <Card
              style={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
              }}>
              <Row
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                  marginBottom: 20,
                  marginRight: 10 }}>
                <Col style={{ flex: 0.58 }}>
                  <Text
                    style={{
                      fontSize: Fonts.size.h4,
                      fontFamily: Fonts.lato.light,
                      color: Colors.black
                    }}>College Shuttle</Text>
                </Col>
                <Col style={{ flex: 0.42 }}>
                  <Text
                    style={{
                      fontSize: Fonts.size.regular,
                      fontFamily: Fonts.lato.base,
                      color: Colors.black}}>Bus No. GN73839</Text>
                  <Text
                    style={{
                      fontSize: Fonts.size.regular,
                      fontFamily: Fonts.lato.base,
                      color: Colors.timeColor,
                      textAlign: 'center'}}>View Bus image</Text>
                </Col>
              </Row>
            </Card>
          </View>

          <View>
            <Row
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 20,
                justifyContent: 'center'
              }}>
              <Col style={{ flex: 0.2, justifyContent: 'center' }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    borderColor: Colors.userProfileBorderColor,
                    borderWidth: 1
                  }} source={Images.profileicon} />
              </Col>
              <Col style={{ flex: 0.4, justifyContent: 'center' }}>
                <Row style={{ marginTop: 5, marginBottom: -2 }}>
                  <Text
                    style={{
                      fontSize: Fonts.size.regular,
                      fontFamily: Fonts.lato.light,
                      color: Colors.black
                    }}>Bus Driver</Text>
                </Row>
                <Row style={{ marginTop: -2, marginBottom: 5 }}>
                  <Text
                    style={{
                      fontSize: Fonts.size.regular,
                      fontFamily: Fonts.lato.base,
                      color: Colors.black}}>Danial Mathew</Text>
                </Row>
              </Col>
              <Col style={{ flex: 0.4, justifyContent: 'center' }}>
                <Row style={{ marginTop: 5, marginBottom: -2 }}>
                  <Button
                    transparent
                    style={{
                      flex: 1,
                      backgroundColor: Colors.timeColor,
                      justifyContent: 'center',
                      borderRadius: 24,

                    }}
                    onPress={this.onPressContactDriver}>
                    <Text
                      style={{
                        fontFamily: Fonts.lato.base,
                        fontSize: Fonts.size.regular,
                        color: Colors.white
                      }}>Contact</Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </View>
        </Content>
        <DriverContactModalBox ref="drivercall"/>
      </Container>
    )
  }
}