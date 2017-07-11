import React,{ Component } from 'react';
import {View, Text, Image, } from 'react-native';
import { Container, Header, Left, Body,
  Right, Icon, Title, Button, List, ListItem, } from 'native-base';
import { Colors, Images  } from '../../theme';
import styles from './FriendListStyle';
import { PropTypes } from 'prop-types'
export default class FriendList extends  Component {

  static get propTypes() {
    return {
      isActive:PropTypes.any
    };
  }
  back = () => {
    this.props.isActive();
  };

  render(){

    var friends = [
      {index: 0, name: 'Chris', university:'VN University',trips:3},
      {index: 1, name: 'Mark', university:'VN University', trips:3},
      {index: 2, name: 'Susan',university:'VN University', trips:3},
      {index: 3, name: 'Muru', university:'VN University', trips:3}];
    return(
      <Container style={{flex:1,backgroundColor:Colors.base,}}>
        <Header style={{backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset:{height:0,width:0},shadowOpacity:0}}>
          <Left>
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white}}>Friends</Title>
          </Body>
          <Right>
            <Image source={Images.edit}/>
          </Right>
        </Header>
        <View style={styles.listContainer}>
          <List dataArray={friends}
            renderRow={(item) =>
              <ListItem bordered="true">
                <View style={{flexDirection:'row'}}>
                  <View>
                    <Image style={styles.profileImage}/>
                  </View>
                  <View style={{flexDirection:'column'}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.university}>{item.university}</Text>
                  </View>
                  <View>
                    <Text style={styles.trip}>{item.trips}{'  '}Trips Done</Text>
                  </View>
                </View>
              </ListItem>
            }
          />
        </View>
      </Container>
    )
  }
}