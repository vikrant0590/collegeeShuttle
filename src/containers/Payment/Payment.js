import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Body,
  Right,
  Button,
  Icon, Row,
  Col,
  CardItem,
  Card,
  List,
  ListItem,
  Grid
} from 'native-base';
import { Colors, Fonts, Metrics, Images } from '../../theme';
import SwipePayment from 'react-native-swipe-a-lot';
import styles from './PaymentStyle';
import { Actions } from 'react-native-router-flux';

export default class Payment extends Component{
  constructor(){
    super();
    this.state ={

    }
  }


  onPressProcess = () =>{

  };


  render(){

    const paymentswiper = [];
    for(let index = 0; index < 2; index ++){
      paymentswiper.push(
        <Card
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            width: Metrics.screenWidth - 30
          }} >
          <Row style={{ flex: 1, width: Metrics.screenWidth - 30 }}>
            <Col style={{ flex: 0.75, width: Metrics.screenWidth/ 2 }}>
              <CardItem>
                <Body style={{ alignItems: 'center' }}>
                  <Text style={styles.myTripDateText}>25</Text>
                  <Text style={styles.myTripDayText}>Friday</Text>
                  <Text style={styles.monthWeekText}>Feb, 2017</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ marginTop: 20, marginBottom: 20, width: 1 }}>
              <View style={{ flex: 1, height: Metrics.screenHeight/ 7, backgroundColor: Colors.thinLineColor}} />
            </Col>
            <Col style={{ flex: 1.25, width: Metrics.screenWidth/ 2 }}>
              <Row style={{ flex: 0.65, width: Metrics.screenWidth/ 2 }}>
                <Col style={{ flex: 0.85 }}>
                  <CardItem>
                    <Body style={{ justifyContent: 'flex-start' }}>
                      <Row style={{ flex: 1, marginRight: 10}}>
                        <Text style={styles.myTripUpcomingText}>Upcoming Trip</Text>
                      </Row>
                      <Text style={styles.myTripUniversityText}>University - Home</Text>
                    </Body>
                  </CardItem>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      );
    }

    const BankCardSwiper = [];
    for(let index = 0; index < 2; index ++){
      BankCardSwiper.push(
        <Card
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            width: Metrics.screenWidth - 30,
            height: Metrics.screenHeight/ 6
          }} >
          <Col style={{ width: Metrics.screenWidth - 30 }}>
            <Row style={{ flex: 1, marginTop: 10, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <Image
                style={{
                  flex: 0.5,
                  backgroundColor: 'red',
                  alignSelf: 'baseline',
                  resizeMode: 'contain',
                }} source={Images.bankmastercardicon} />
            </Row>
            <Row style={{ flex: 1 , justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
              <Col style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    textAlign: 'left'
                  }}>Card Number</Text>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    textAlign: 'left',
                    justifyContent: 'center'
                  }}>6757 **** **** 8979</Text>
              </Col>
              <Col style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    textAlign: 'left',
                    justifyContent: 'center'
                  }}>Expiry Date</Text>
                <Text
                  style={{
                    fontSize: Fonts.size.medium,
                    fontFamily: Fonts.lato.base,
                    textAlign: 'left',
                    justifyContent: 'center'
                  }}>27-Feb-2019</Text>
              </Col>
            </Row>
          </Col>

        </Card>
      );
    }


    return(
      <Container style={{ flex:1, backgroundColor: Colors.base }}>
        <Header style={{ backgroundColor:Colors.headerColor, borderBottomWidth:0 }}>
          <Left>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color:Colors.white }}>Payment</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SwipePayment
            circleDefaultStyle = {{
              backgroundColor: Colors.thinLineColor,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginTop: Metrics.screenHeight/14
            }}
            style = {{ backgroundColor: Colors.base }}
            circleActiveStyle = {{
              backgroundColor: Colors.timeColor,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginTop: Metrics.screenHeight/14,
              marginHorizontal: 2.5,
              marginVertical: 3
            }}>
            {paymentswiper}
          </SwipePayment>

          <Card
            style={{
              marginTop: Metrics.screenHeight/ 15,
              marginLeft: 15,
              marginRight: 15,
              height: 60,
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Text
              style={{
                fontSize: Fonts.size.regular,
                fontFamily: Fonts.lato.base,
                alignSelf: 'center'
              }}>Total Payble Amount: $72</Text>
          </Card>

          <SwipePayment
            circleDefaultStyle = {{
              backgroundColor: Colors.thinLineColor,
              height: 0,
              width: 0,
              borderRadius: 0,

            }}
            style = {{ backgroundColor: Colors.base }}
            circleActiveStyle = {{
              backgroundColor: Colors.timeColor,
              height: 0,
              width: 0,
              borderRadius: 0,
            }}>
            {BankCardSwiper}
          </SwipePayment>

          <Card
            style={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              width: Metrics.screenWidth - 30,
              marginBottom: 10
            }}>
            <List>
              <ListItem
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  backgroundColor: Colors.profileInputHeadingColor
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    color: Colors.white,
                    fontSize: Fonts.size.regular
                  }}>Payment Options</Text>
              </ListItem>
              <ListItem >
                <Row style={{ flex: 1}}>
                  <Col style={{ flex: 0.1}}>
                    <Image style={{}} source={Images.packageicon} />
                  </Col>
                  <Col style={{ flex: 0.7}}>
                    <Text
                      style={{
                        fontSize: Fonts.size.medium,
                        fontFamily: Fonts.lato.base,
                        color: Colors.placeholderTextColor,
                        textAlign: 'left'
                      }}>College Shuttle Package</Text>
                  </Col>
                  <Col style={{ flex: 0.2 }}>
                    <TouchableOpacity
                      style={{flex: 1}}
                      onPress={()=> console.log('test')}>
                      <Text
                        style={{
                          fontSize: Fonts.size.medium,
                          fontFamily: Fonts.lato.base,
                          color: Colors.timeColor,
                          textAlign: 'right'
                        }}>Buy Now</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </ListItem>
              <ListItem>
                <Row style={{ flex: 1}}>
                  <Col style={{ flex: 0.1, justifyContent: 'center'}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.creditcardicon} />
                  </Col>
                  <Col style={{ flex: 0.9, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: Fonts.size.medium,
                        fontFamily: Fonts.lato.base,
                        color: Colors.black,
                        textAlign: 'left'
                      }}>Credit Card</Text>
                  </Col>
                </Row>
              </ListItem>
              <ListItem >
                <Row style={{ flex: 1}}>
                  <Col style={{ flex: 0.1, justifyContent: 'center'}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.collegecardicon} />
                  </Col>
                  <Col style={{ flex: 0.9, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: Fonts.size.medium,
                        fontFamily: Fonts.lato.base,
                        color: Colors.black,
                        textAlign: 'left'
                      }}>Debit Card</Text>
                  </Col>
                </Row>
              </ListItem>
            </List>
          </Card>
          <Card
            style={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              height: 60,
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Row style={{ flex: 1 }}>
              <Col style={{ flex: 0.7, justifyContent: 'center' }}>
                <Text
                  style={{
                    fontSize: Fonts.size.regular,
                    fontFamily: Fonts.lato.base,
                    alignSelf: 'center'
                  }}>Pacakage Code: CS0094</Text>
              </Col>
              <Col style={{ flex: 0.3, justifyContent: 'center' }}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: 'center'}}
                  onPress={()=>console.log('test')}>
                  <Text
                    style={{
                      fontSize: Fonts.size.medium,
                      fontFamily: Fonts.lato.base,
                      textAlign: 'center',
                      color: Colors.timeColor
                    }}>Apply</Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </Card>
          <View>
            <TouchableOpacity
              style={styles.ProcessBtn}
              onPress={this.onPressProcess}>
              <Text style={styles.ProcessBtnText}>Process</Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    )
  }
}