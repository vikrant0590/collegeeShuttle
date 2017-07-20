import React,{ Component } from 'react';
import {View, Text, Image } from 'react-native';
import { Container, Header, Left, Body, Content,
  Right, Icon, Title, Button, List, ListItem, Card, CardItem } from 'native-base';
import { Colors, } from '../../theme';
import styles from './FriendListStyle';
import { PropTypes } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
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
      <View style={{flex:1,backgroundColor:Colors.base,}}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
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
              <Icon name="ios-person-add" style={{marginRight:10,color:'white'}}/>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <Card>
            <CardItem>
              <List dataArray={friends}
                renderRow={(item) =>
                  <ListItem bordered="true">
                    <View style={styles.listContainer}>
                      <View style={{flex:0.2}}>
                        <Image style={styles.profileImage}/>
                      </View>
                      <View style={styles.nameContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.university}>{item.university}</Text>
                      </View>
                      <View style={styles.tripDetails}>
                        <Text style={styles.trip}>{item.trips} Trips Done</Text>
                      </View>
                    </View>
                  </ListItem>
                }
              />
            </CardItem>
          </Card>
        </Content>
      </View>
    )
  }
}