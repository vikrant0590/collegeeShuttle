import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Left, Title, Body, Right } from 'native-base';
import { Colors } from '../../theme';
import styles from './OffersStyle';

export default class Offers extends Component{
  constructor(){
    super();
    this.state ={

    }
  }

  render(){
    return(
      <Container style={{ flex:1 }}>
        <Header style={{ backgroundColor:Colors.headerColor, borderBottomWidth:0 }}>
          <Left/>
          <Body>
            <Title style={{ color:Colors.white }}>Offers</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Hello</Text>
        </Content>
      </Container>
    )
  }
}