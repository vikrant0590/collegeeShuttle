import React,{Component} from 'react';
import {View, Text, Image, } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title,Content, Button, Card, CardItem, } from 'native-base';
import { Colors, Fonts, Images, Metrics  } from '../../theme';
import styles from './BuyPackageStyle';
import { PropTypes } from 'prop-types';

export default class BuyPackage extends  Component {

  static get propTypes() {
    return {
      isActive:PropTypes.any
    };
  }
  back = () => {
    this.props.isActive();
  };
  render(){

    return(
      <Container style={{flex: 1,backgroundColor:Colors.base}}>
        <Header style={{backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset:{height:0,width:0},shadowOpacity:0}}>
          <Left>
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white}}>Packages</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <View style={styles.tripContainer}>
            <Card>
              <CardItem>
                <View style={styles.tripItem}>
                  <View style={styles.buyNowContainer}>
                    <Text style={styles.choice}>Triple Play</Text>
                    <Image source={Images.ellipse} style={styles.ellipse}/>
                    <Text style={styles.choice}>3 Trips</Text>
                    <Text style={styles.price}>$202</Text>
                  </View>
                  <View style={styles.tripDescription}>
                    <View>
                      <Text style={{color:Colors.black}}>3 Weekend Trip{"\n"}</Text>
                      <Text style={{color:Colors.black}}>1 Holiday Trip </Text>
                    </View>
                    <View>
                      <Button rounded
                        style={{backgroundColor:Colors.headingColor, marginLeft:Metrics.screenWidth - 300, width:131}}>
                        <Text style={{...Fonts.style.regularFont,color:Colors.white}}>Buy Now</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <View style={styles.tripItem}>
                  <View style={styles.buyNowContainer}>
                    <Text style={styles.choice}>Triple Play</Text>
                    <Image source={Images.ellipse} style={styles.ellipse}/>
                    <Text style={styles.choice}>4 Trips</Text>
                    <Text style={styles.price}>$260</Text>
                  </View>
                  <View style={styles.tripDescription}>
                    <View>
                      <Text style={{color:Colors.black}}>4 Weekend Trip{"\n"}</Text>
                      <Text style={{color:Colors.black}}>1 Holiday Trip </Text>
                    </View>
                    <View>
                      <Button rounded
                        style={{backgroundColor:Colors.headingColor, marginLeft:Metrics.screenWidth - 300, width:131}}>
                        <Text style={{...Fonts.style.regularFont,color:Colors.white}}>Buy Now</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <View style={styles.tripItem}>
                  <View style={styles.buyNowContainer}>
                    <Text style={styles.choice}>Triple Play</Text>
                    <Image source={Images.ellipse} style={styles.ellipse}/>
                    <Text style={styles.choice}>6 Trips</Text>
                    <Text style={styles.price}>$350</Text>
                  </View>
                  <View style={styles.tripDescription}>
                    <View>
                      <Text style={{color:Colors.black}}>6 Weekend Trip{"\n"}</Text>
                      <Text style={{color:Colors.black}}>1 Holiday Trip </Text>
                    </View>
                    <View>
                      <Button rounded
                        style={{backgroundColor:Colors.headingColor, marginLeft:Metrics.screenWidth - 300, width:131}}>
                        <Text style={{...Fonts.style.regularFont,color:Colors.white}}>Buy Now</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>

          </View>
        </Content>
      </Container>
    )
  }
}