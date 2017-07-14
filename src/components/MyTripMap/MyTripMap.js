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
  Col,
  Icon
} from 'native-base';
import styles from './MyTripMapStyle';
import { Colors, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';


export default class MyTripMap extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  onPressSearchList = () =>{

  };

  render() {
    return(
      <Container style={{ backgroundColor: Colors.base }}>
        <Header style={{backgroundColor:'#fc214f',borderBottomWidth:0}}>
          <Left>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>My Trip</Title>
          </Body>
          <Right />
        </Header>
        <Content/>
      </Container>
    )
  }
}