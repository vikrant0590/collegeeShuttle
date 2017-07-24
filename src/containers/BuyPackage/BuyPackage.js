import React,{Component} from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title,Content, Button, Card, CardItem, List, } from 'native-base';
import { Colors, Images, Metrics  } from '../../theme';
import styles from './BuyPackageStyle';
import { PropTypes } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {Actions as NavAction} from 'react-native-router-flux';
import {OfferBox } from '../../components';

export default class BuyPackage extends  Component {

  static get propTypes() {
    return {
      myProfile:PropTypes.func
    };
  }

  onPressBackButton = () => {
    if (this.props.myProfile === undefined) {
      NavAction.pop();
    } else {
      this.props.myProfile();
    }
  };
  onPressBuyNow = () =>{
    this.refs.offerbox.showDialog();
  };

  render(){
    const purchasePack = [
      {index:0, totalTrips:3, weekend:3, holiday:1, amount: '$202'},
      {index:1, totalTrips:4, weekend:3, holiday:1, amount: '$260'},
      {index:2, totalTrips:6, weekend:3, holiday:1, amount: '$350'},
    ];

    return(
      <Container style={{flex: 1,backgroundColor:Colors.base, marginBottom: Metrics.tabBarHeight}}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent}}>
            <Left>
              <Button transparent onPress={this.onPressBackButton}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white}}>Packages</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <View style={styles.tripContainer}>
            <List dataArray={purchasePack}
              renderRow={(item) =>
                <Card style={{ flex: 1}}>
                  <CardItem style={{ width: Metrics.screenWidth - 30}}>
                    <View style={styles.tripItem}>
                      <View style={styles.tripHeading}>
                        <View style={styles.tripHeadingItem}>
                          <Text style={styles.choice}>Triple Play</Text>
                          <Image source={Images.ellipse} style={styles.ellipse}/>
                          <Text style={styles.choice}>{item.totalTrips} Trips</Text>
                        </View>
                        <View style={{flex:1}}>
                          <Text style={styles.price}>{item.amount}</Text>
                        </View>
                      </View>
                      <View style={styles.tripDescription}>
                        <View style={styles.tripDetails}>
                          <Text style={{color: Colors.black}}>{item.weekend} Weekend Trip{"\n"}</Text>
                          <Text style={{color: Colors.black}}>{item.holiday} Holiday Trip </Text>
                        </View>
                        <View style={{flex:1}}>
                          <LinearGradient
                            colors={['#FC214F','#D32735']}
                            style={styles.bookButton}>
                            <TouchableOpacity onPress={this.onPressBuyNow}
                              style={styles.bookButtonDefaultColor}>
                              <Text style={styles.bookButtonText} >Buy Now</Text>
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              }/>
          </View>
        </Content>
        <OfferBox ref="offerbox"/>
      </Container>
    )
  }
}

