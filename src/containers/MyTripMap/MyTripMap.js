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
                  marginTop: (Metrics.screenWidth === 320 ) ? 15 : 20,
                  marginLeft: 10,
                  marginBottom: (Metrics.screenWidth === 320 ) ? 15 : 20,
                  marginRight: 10 }}>
                <Col style={(Metrics.screenWidth === 320 ) ? { flex: 0.54 } : { flex: 0.58 }}>
                  <Text style={styles.collegeShuttleText}>College Shuttle</Text>
                </Col>
                <Col style={(Metrics.screenWidth === 320 ) ? { flex: 0.46 } : { flex: 0.42 }}>
                  <Text style={styles.busnoText}>Bus No. GN73839</Text>
                  <Text style={styles.viewBusText}>View Bus image</Text>
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
              <Col
                style={(Metrics.screenWidth === 320 ) ? {
                  flex: 0.18, justifyContent: 'center' } : { flex: 0.2, justifyContent: 'center' }}>
                <Image style={styles.driverProfileImage} source={Images.profileicon} />
              </Col>
              <Col
                style={(Metrics.screenWidth === 320 ) ? {
                  flex: 0.3,
                  justifyContent: 'center'
                } : {
                  flex: 0.4,
                  justifyContent: 'center'
                }}>
                <Row style={{ marginTop: 5, marginBottom: -2 }}>
                  <Text style={styles.busDriverText}>Bus Driver</Text>
                </Row>
                <Row style={{ marginTop: -2, marginBottom: 5 }}>
                  <Text style={styles.busDriverNameText}>Danial Mathew</Text>
                </Row>
              </Col>
              <Col
                style={(Metrics.screenWidth === 320 ) ? {
                  flex: 0.3,
                  justifyContent: 'center'
                } : {
                  flex: 0.4,
                  justifyContent: 'center'
                }}>
                <Row style={{ marginTop: 5, marginBottom: -2 }}>
                  <Button
                    transparent
                    style={{
                      flex: 1,
                      backgroundColor: Colors.timeColor,
                      justifyContent: 'center',
                      borderRadius: 24
                    }}
                    onPress={this.onPressContactDriver}>
                    <Text style={styles.contactText}>Contact</Text>
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