import React,{ Component } from 'react';
import {
  View,
  Text,
  Image }
  from 'react-native';
import {
  Header,
  Left,
  Body,
  Content,
  Right,
  Icon,
  Title,
  Button,
  List,
  ListItem,
  Card,
} from 'native-base';
import { Colors, Fonts, Images } from '../../theme';
import styles from './FriendListStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class FriendList extends  Component {

  onPressBack = () => {
    Actions.pop();
  };

  onPressInviteFriend = () =>{
    Actions.invitefriend();
  };

  render(){

    const friends = [
      {index: 0, name: 'Chris', university:'VN University',trips:3},
      {index: 1, name: 'Mark', university:'VN University', trips:3},
      {index: 2, name: 'Susan',university:'VN University', trips:3},
      {index: 3, name: 'Muru', university:'VN University', trips:3}];
    return(
      <View style={styles.container}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left>
              <Button transparent onPress={this.onPressBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title }}>Friends</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.onPressInviteFriend}>
                <Icon name="ios-person-add" style={{marginRight:10,color:'white'}}/>
              </Button>
            </Right>
          </Header>
        </LinearGradient>
        <Content style={{margin:10}}>
          <Card>
            <List
              dataArray={friends}
              renderRow={(item) =>
                <ListItem bordered="true" style={{borderColor: Colors.thinLineColor,marginRight:-19}}>
                  <View style={styles.listContainer}>
                    <View style={styles.profileImageContainer}>
                      <Image source={Images.profileicon} style={styles.profileImage}/>
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
          </Card>
        </Content>
      </View>
    )
  }
}