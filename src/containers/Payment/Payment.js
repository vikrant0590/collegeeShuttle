import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
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
} from 'native-base';
import { PaymentFailed, PaymentSuccess } from '../../components';
import { Colors, Metrics, Images } from '../../theme';
import SwipePayment from 'react-native-swipe-a-lot';
import styles from './PaymentStyle';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
export default class Payment extends Component{


  onPressProceed = () => {
    const payment = Math.floor((Math.random() * 10) + 1);
    console.log("PAYMENT",payment);
    if(payment > 5){
      this.refs.paymentsuccess.showDialogPaymentSuccess();
    } else {
      this.refs.paymentfailed.showDialogPaymentFailed();
    }

  };
  onPressBuyNow = () =>{

  };

  onPressCard = () => {
    Actions.addCard();
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
            width: Metrics.screenWidth - 30,
            height: Metrics.screenHeight/ 3.5
          }} key={index}>
          <Row style={{ flex: 0.75, width: Metrics.screenWidth - 30 }}>
            <Col style={{ flex: 0.75, width: Metrics.screenWidth/ 2 }}>
              <CardItem>
                <Body style={{ alignItems: 'center' }}>
                  <Text style={styles.paymentDateText}>25</Text>
                  <Text style={styles.paymentDayText}>Friday</Text>
                  <Text style={styles.paymentmonthText}>Feb, 2017</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{ marginTop: Metrics.screenWidth/23, marginBottom: Metrics.screenWidth/23, width: 1 }}>
              <View style={styles.thinLine} />
            </Col>
            <Col style={{ flex: 1.25, width: Metrics.screenWidth/ 2 }}>
              <Row style={{ flex: 0.65, width: Metrics.screenWidth/ 2 }}>
                <CardItem>
                  <Body style={{ justifyContent: 'flex-start' }}>
                    <Text style={styles.paymentUpcomingText}>DESTINATION</Text>
                    <Text style={styles.paymentUniversityText}>University - Home</Text>
                    <Text style={[styles.paymentUpcomingText,{paddingTop: 10}]}>BUS NAME</Text>
                    <Text style={styles.paymentUniversityText}>College Shuttle Pro</Text>
                  </Body>
                </CardItem>
              </Row>
            </Col>
          </Row>
          <Row style={{ flex: 0.25, width: Metrics.screenWidth - 30, marginBottom: 10, marginTop: 10 }}>
            <Col style={{ flex: 0.5, width: Metrics.screenWidth/5 }}>
              <CardItem style={{ backgroundColor: Colors.transparent, marginTop: -10 }}>
                <Body style={{ alignItems: 'flex-start' }}>
                  <Text style={[styles.paymentPickupText]}>PICKUP POINT</Text>
                  <Text style={styles.paymentUniText}>Uni Circle</Text>
                </Body>
              </CardItem>
            </Col>
            <Col style={{flex: 0.6, marginRight: 5, width: Metrics.screenWidth/3 }}>
              <CardItem style={{ backgroundColor: Colors.transparent, marginTop: -10 }}>
                <Body style={{justifyContent: 'flex-start'}}>
                  <Text style={styles.paymentPickupText}>DROP</Text>
                  <Text style={styles.paymentUniText}>Metro Station</Text>
                </Body>
              </CardItem>
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
            height: Metrics.screenHeight/ 5
          }} key={index}>
          <Row
            style={{
              marginTop: 15,
              marginLeft: 15,
              alignItems: 'flex-start'
            }}>
            <Image style={styles.bankmastercardimage} source={Images.bankmastercardicon} />
          </Row>
          <Row style={{ marginLeft: Metrics.screenWidth/50, marginRight: Metrics.screenWidth/50 }}>
            <Col style={{ flex: 0.5 }}>
              <Text style={styles.cardnumberText}>CARD NUMBER</Text>
              <Text
                style={styles.cardDetails}>6757 **** **** 8979</Text>
            </Col>
            <Col style={{ flex: 0.5 }}>
              <Text
                style={styles.expiryDate}>EXPIRY DATE</Text>
              <Text
                style={styles.expiry}>07 / 01</Text>
            </Col>
          </Row>
        </Card>
      );
    }


    return(
      <Container style={{ flex:1, backgroundColor: Colors.base }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
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
        </LinearGradient>

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
              marginTop: Metrics.screenHeight/15,
              marginLeft: 15,
              marginRight: 15,
              height: Metrics.screenWidth/6,
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Text style={styles.totalamount}>Total Payble Amount: $72</Text>
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
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              width: Metrics.screenWidth - 30,
              height: Metrics.screenHeight/3,
            }}>
            <List
              style={{ height: Metrics.screenHeight/3, width: Metrics.screenWidth-30, flex: 1 }}>
              <ListItem
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  backgroundColor: Colors.profileInputHeadingColor
                }}>
                <Text
                  style={styles.paymnetOPtion}>Payment Options</Text>
              </ListItem>
              <ListItem >
                <Row style={{ flex: 1}}>
                  <Col style={{ flex: 0.1}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.packageicon} />
                  </Col>
                  <Col style={{ flex: 0.6}}>
                    <Text
                      style={styles.collegeText}>College Shuttle Package</Text>
                  </Col>
                  <Col style={{ flex: 0.3 }}>
                    <TouchableOpacity
                      style={{flex: 1}}
                      onPress={this.onPressBuyNow}>
                      <Text
                        style={styles.buyNow}>Buy Now</Text>
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
                    <Button style={{marginLeft:-15,height:25}} transparent onPress={this.onPressCard}>
                      <Text style={styles.creditcardText}>Credit Card</Text>
                    </Button>
                  </Col>
                </Row>
              </ListItem>

              <ListItem >
                <Row style={{ flex: 1}}>
                  <Col style={{ flex: 0.1, justifyContent: 'center'}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.creditcardicon} />
                  </Col>
                  <Col style={{ flex: 0.9, justifyContent: 'center'}}>
                    <Button style={{marginLeft:-15,height:25}} transparent onPress={this.onPressCard}>
                      <Text style={styles.creditcardText}>Debit Card</Text>
                    </Button>
                  </Col>
                </Row>
              </ListItem>

            </List>
          </Card>
          <Card
            style={{
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              height: Metrics.screenWidth/6,
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Row style={{ flex: 1 }}>
              <Col style={{ flex: 0.7, justifyContent: 'center' }}>
                <Text
                  style={styles.packagecode}>Pacakage Code: CS0094</Text>
              </Col>
              <Col style={{ flex: 0.3, justifyContent: 'center' }}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: 'center'}}
                  onPress={()=>console.log('test')}>
                  <Text
                    style={styles.Apply}>Apply</Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </Card>
          <View>
            <LinearGradient colors={['#FC214F', '#D32735']}  style={styles.ProcessBtn}>
              <TouchableOpacity
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}
                onPress={this.onPressProceed}>
                <Text style={styles.ProcessBtnText}>Proceed</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Content>
        <PaymentFailed ref="paymentfailed" />
        <PaymentSuccess ref="paymentsuccess" />
      </Container>
    )
  }
}