import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
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
import { Colors, Metrics, Images, Fonts } from '../../theme';
import SwipePayment from 'react-native-swipe-a-lot';
import styles from './PaymentStyle';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
export default class Payment extends Component{


  onPressProceed = () => {
    const payment = Math.floor((Math.random() * 10) + 1);
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

    const BankCardSwiper = [];
    for(let index = 0; index < 2; index ++){
      BankCardSwiper.push(
        <Card
          style={{
            flex: 1,
            marginLeft: (index === 0) ? 15 : -40,
            marginRight: (index === 0) ? 50 : 15,
            marginTop: 15,
            width: Metrics.screenWidth - 60,
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
            <Col style={{ flex: 0.6 }}>
              <Text style={styles.cardnumberText}>CARD NUMBER</Text>
              <Text
                style={styles.cardDetails}>6757 **** **** 8979</Text>
            </Col>
            <Col style={{ flex: 0.4 }}>
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
              <Title style={{ color:Colors.white, ...Fonts.style.title }}>Payment</Title>
            </Body>
            <Right />
          </Header>
        </LinearGradient>

        <Content>
          <Card
            style={{
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              height: Metrics.screenWidth/2.2,
              justifyContent:'center',
              alignItems:'center'
            }}>

            <Button transparent style={{ marginTop: 15, alignSelf: 'center', flex: 1 }}>
              <Text
                style={{
                  fontSize: Fonts.size.paymentheader,
                  fontFamily: Fonts.lato.base,
                  color: Colors.timeColor
                }}>Triple Play</Text>
            </Button>
            <Button transparent style={{ alignSelf: 'center',  flex: 1 }}>
              <Text
                style={{
                  fontSize: Fonts.size.input,
                  fontFamily: Fonts.lato.base,
                  color: Colors.timeColor
                }}>3 Trips</Text>
            </Button>
            <Button transparent style={{ alignSelf: 'center',  flex: 1 }}>
              <Text
                style={{
                  fontSize: Fonts.size.regular,
                  fontFamily: Fonts.lato.base,
                  color: Colors.black
                }}>3 Weekend Trip</Text>
            </Button>
            <Button transparent style={{ marginBottom: 15, alignSelf: 'center',  flex: 1 }}>
              <Text
                style={{
                  fontSize: Fonts.size.regular,
                  fontFamily: Fonts.lato.base,
                  color: Colors.black
                }}>1 Holiday Trip</Text>
            </Button>
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
            <Text style={styles.totalamount}>Total Payble Amount: $72</Text>
          </Card>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator= {false}>
            {BankCardSwiper}
          </ScrollView>

          <Card
            style={{
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              width: Metrics.screenWidth - 30,
              height: Metrics.screenHeight/3,
            }}>
            <List
              style={{
                height: Metrics.screenHeight/4,
                width: Metrics.screenWidth-30,
                flex: 1
              }}>
              <ListItem
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 0,
                  height: (Metrics.screenHeight/4)/3,
                  backgroundColor: Colors.profileInputHeadingColor
                }}>
                <Text
                  style={styles.paymnetOPtion}>Payment Options</Text>
              </ListItem>
              <ListItem style={{height: (Metrics.screenHeight/4)/3}}>
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
                      onPress={this.onPressCard}>
                      <Text
                        style={styles.buyNow}>Buy Now</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </ListItem>

              <ListItem style={{ height: (Metrics.screenHeight/4)/3 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: (Metrics.screenHeight/4)/3 - 5
                  }}
                  onPress={this.onPressCard}>
                  <Col style={{ flex: 0.1, justifyContent: 'center'}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.creditcardicon} />
                  </Col>
                  <Col style={{ flex: 0.9, justifyContent: 'center'}}>
                    <Text style={styles.creditcardText}>Credit Card</Text>
                  </Col>
                </TouchableOpacity>
              </ListItem>

              <ListItem style={{ borderBottomWidth: 0, height: (Metrics.screenHeight/4)/3 - 5 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: (Metrics.screenHeight/4)/3 - 5
                  }}
                  onPress={this.onPressCard}>
                  <Col style={{ flex: 0.1, justifyContent: 'center'}}>
                    <Image style={{ resizeMode: 'contain' }} source={Images.creditcardicon} />
                  </Col>
                  <Col style={{ flex: 0.9, justifyContent: 'center'}}>
                    <Text style={styles.creditcardText}>Debit Card</Text>
                  </Col>
                </TouchableOpacity>
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
                  onPress={()=>{}}>
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