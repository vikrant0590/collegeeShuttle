/**
 * Created by Admin on 25/07/17.
 */
import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Button,
  List,
  ListItem,
  Card
} from 'native-base';
import { Colors, Fonts, Metrics, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import styles from './NotificatioStyle';
import { NotificationCell } from '../../components';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Notification extends Component {

  constructor() {
    super();
    this.state = {
      isVisible : false
    }
  }


  onPressNotificationButton = () => {
    this.setState({
      isVisible: true
    });
  };


  render() {

    const notification =  [
      { "request":"Request to Book tickets", "message":"Chris is travelling home on 3rd Mar, 2017" },
      { "request":"Request to Book tickets", "message":"VN University" },
      { "request":"Request to Book tickets", "message":"VN University" },
      { "request":"Request to Book tickets", "message":"VN University" },
    ];

    return(
      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
        <Spinner visible={this.state.isVisible} textContent={"Refresh..."} textStyle={{color: Colors.white}} />
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent }}>
            <Left>
              <Button transparent onPress={()=> Actions.pop()}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title}}>Notification</Title>
            </Body>
            <Right>
              <Button
                transparent
                style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={this.onPressNotificationButton}>
                <Image source={Images.notification} style={styles.notificationIcon} />
              </Button>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          <Card style={{ marginTop: 0, marginRight: 0, marginLeft: 0 }}>
            <List
              dataArray={notification}
              renderRow={(item) =>{
                return(
                  <ListItem
                    style={{
                      borderColor: Colors.thinLineColor,
                      marginRight: -19
                    }}>
                    <NotificationCell userRequest={item} />
                  </ListItem>
                )
              }}
            />
          </Card>
        </Content>
      </Container>
    )
  }
}