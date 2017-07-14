import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, Header, Left, Title, Body, Right, Button, Icon, Row, Col } from 'native-base';
import { Colors, Fonts, Metrics, Images } from '../../theme';
import styles from './OffersStyle';
import { Actions } from 'react-native-router-flux';
export default class Offers extends Component{
  constructor(){
    super();
    this.state ={

    }
  }

  render(){
    return(
      <Container style={{ flex:1, backgroundColor: Colors.base }}>
        <Header style={{ backgroundColor:Colors.headerColor, borderBottomWidth:0 }}>
          <Left/>
          <Body>
            <Title style={{ color:Colors.white }}>Offers</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name='md-close' style={{ color: Colors.white, fontSize: Fonts.size.h5 }} />
            </Button>
          </Right>
        </Header>
        <Content>
          <View
            style={styles.offerContainer}>
            <View
              style={styles.collegeProView}>
              <Text
                style={styles.collegeProText}>College Shuttle Pro</Text>
            </View>
            <View
              style={styles.loremTextView}>
              <Text
                style={styles.loremText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Text>
            </View>
            <View
              style={styles.codeview}>
              <Row>
                <Col>
                  <Text
                    style={styles.codeText}>
                    CODE: CS9485
                  </Text>
                </Col>
                <Col style={{ left: 50 }}>
                  <Text
                    style={styles.copyCodeText}>
                    Copy code
                  </Text>
                </Col>
              </Row>

            </View>
            <View
              style={styles.thinLine} />
            <View
              style={styles.detailView}>
              <Text
                style={styles.detailText}>
                Details
              </Text>
            </View>
            <View
              style={styles.descriptionView}>
              <Text
                style={styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Text>
            </View>
            <View
              style={styles.subDescriptionView}>
              <Text
                style={styles.subDescriptionText}>
                Lorem Ipsum is simply dummy text and typesetting.
              </Text>
            </View>
            <View
              style={styles.validationView}>
              <Text
                style={styles.validationText}>
                Validity: April 14, 2017
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}