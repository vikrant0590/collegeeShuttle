/**
 * Created by Admin on 24/07/17.
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
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
  Icon,
  Row,
  Card,
  Col,
  CardItem
} from 'native-base';
import styles from './MyPackageStyle';
import { Colors, Fonts, Metrics } from '../../theme';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class MyPackage extends Component {

  render() {
    return(
      <Container style={{ backgroundColor: Colors.base }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent }}>
            <Left>
              <Button transparent onPress={()=> Actions.pop()}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>My Package</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content style={{ }}>
          <Card
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              height: Metrics.screenHeight/4.4
            }}>
            <CardItem
              style={{
                flex: 0.2,
                justifyContent: 'center',
                marginTop: 5
              }}>
              <Text
                style={{
                  fontSize: Fonts.size.h5,
                  fontFamily: Fonts.lato.base,
                  color: Colors.black
                }}>
                My Package Balance
              </Text>
            </CardItem>
            <CardItem
              style={{
                flex: 0.6,
              }}>
              <Col
                style={{
                  alignSelf: 'center',
                  flex: 0.5,
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: Fonts.size.h4,
                    fontFamily: Fonts.lato.base,
                    color: Colors.timeColor
                  }}>
                  2
                </Text>
              </Col>
              <Col
                style={{
                  alignSelf: 'center',
                  flex: 0.5,
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: Fonts.size.h4,
                    fontFamily: Fonts.lato.base,
                    color: Colors.timeColor
                  }}>
                  0
                </Text>
              </Col>
            </CardItem>
            <CardItem style={{ flex: 0.2, marginBottom: 5 }}>
              <Col style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    color: Colors.black
                  }}>Weekend Trip Left</Text>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    color: Colors.black
                  }}>Holiday Trip Left</Text>
              </Col>
            </CardItem>
          </Card>

          <LinearGradient
            colors={['#FC214F', '#D32735']}
            style={{
              flex: 1,
              height: 52,
              width: Metrics.screenWidth/1.6,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
              borderRadius: 26
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.transparent
              }}
              onPress={this.onPressSearch}>
              <Text
                style={{
                  fontSize: Fonts.size.regular,
                  fontFamily: Fonts.lato.base,
                  color: Colors.white
                }}>Add a Package</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Content>
      </Container>
    )
  }
}