import React,{Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, } from 'native-base';
import { Colors,Images } from '../../theme';
import {Actions} from 'react-native-router-flux';
import styles from './PackageStyle';
export default class Packages extends  Component {
  render(){
    return(
      <Container style={{flex: 1,backgroundColor:Colors.base}}>
        <Header style={{backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset:{height:0,width:0},shadowOpacity:0}}>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white}}>Packages</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <View style={styles.offerContainer}>
          <Image source={Images.offer}/>
        </View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Earn upto $100</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>You will get $1 when your friends</Text>
          <Text style={styles.instruction}>Sign Up and travel a ride</Text>
        </View>
        <View style={styles.offerContainer}>
          <Text style={styles.codelabel}>YOUR CODE</Text>
        </View>
        <View style={styles.secrets}>
          <Text style={styles.secretCode}>CHD3146</Text>
        </View>
        <View style={styles.linkLabel}>
          <Text style={styles.codelabel}>YOUR LINK</Text>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.linkk}>www.collegeshuttle.com/CHD3146</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={Images.whatsapp} style={{marginRight:50}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.fb} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.googlePlus}/>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}