import React,{ Component } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { PropTypes } from 'prop-types';
import { Colors, Images } from '../../theme';
import styles from './PackageStyle';

export default class Packages extends  Component {

  static get propTypes() {
    return {
      isActive:PropTypes.func
    };
  }
  back = () => {
    this.props.isActive();
  };

  render(){
    return(
      <Container style={{backgroundColor:Colors.base}}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
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
        </LinearGradient>

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
      </Container>
    )
  }
}