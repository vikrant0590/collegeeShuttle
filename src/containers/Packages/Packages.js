import React,{ Component } from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images, Fonts, Metrics } from '../../theme';
import styles from './PackageStyle';
import { Actions } from 'react-native-router-flux';
export default class Packages extends  Component {

  onPressBack = () => {
    Actions.pop();
  };

  render(){
    return(
      <Container style={{ backgroundColor:Colors.base, marginBottom: Metrics.tabBarHeight }}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header
            style={{
              backgroundColor: Colors.transparent,
              borderBottomWidth: 0
            }}>
            <Left>
              <Button transparent onPress={this.onPressBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>Packages</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content>

          <View style={styles.container}>
            <View style={styles.imageField}>
              <Image source={Images.offer}/>
            </View>

            <View style={styles.noticeField}>
              <Text style={styles.headingText}>Earn upto $100</Text>
              <Text style={styles.instruction}>You will get $1 when your friends</Text>
              <Text style={styles.instruction}>Sign Up and travel a ride</Text>
            </View>

            <View style={styles.codeField}>
              <Text style={styles.codelabel}>YOUR CODE</Text>
              <Text style={styles.secretCode}>CHD3146</Text>
              <Text style={styles.codelabel}>YOUR LINK</Text>
              <TouchableOpacity>
                <Text style={styles.links}>www.collegeshuttle.com/CHD3146</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.iconField}>
              <TouchableOpacity>
                <Image source={Images.whatsapp} style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.fb} style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.googlePlus}/>
              </TouchableOpacity>
            </View>

          </View>
        </Content>
      </Container>
    )
  }
}