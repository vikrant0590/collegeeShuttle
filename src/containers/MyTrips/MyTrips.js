import React,{Component} from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Col,
  Row,
  Card,
  CardItem,
} from 'native-base';
import { Text, View } from 'react-native';
import SwipeMyTrip from 'react-native-swipe-a-lot';
import styles from './MyTripsStyles';
import { Colors } from '../../theme';


export default class MyTrips extends Component {

  render(){
    const swiperpage = [];
    for(let index = 0; index < 2; index ++){
      swiperpage.push(
        <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15, bottom : 0 }} key="swiperpage">
          <Col style={{ flex: 1, }}>
            <Row style={{ height: 40 }}>
              <CardItem
                style={{
                  flex: 1,
                  backgroundColor: Colors.weekHeaderColor,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={styles.cardTitleText}>THIS WEEK</Text>
              </CardItem>
            </Row>
            <Row style={{ flex: 1 }}>
              <Col style={{ flex: 1 }}>
                <CardItem>
                  <Body style={{ borderRightColor: Colors.thinLineColor, borderRightWidth: 1.5, alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>25</Text>
                    <Text style={styles.dayWeekText}>Friday</Text>
                    <Text style={styles.monthWeekText}>Feb, 2017</Text>
                    <Text style={styles.timeWeekText}>04:00 PM</Text>
                  </Body>
                </CardItem>
              </Col>
              <Col style={{ flex: 1 }}>
                <CardItem>
                  <Body style={{ alignItems: 'center' }}>
                    <Text style={styles.dateWeekText}>27</Text>
                    <Text style={styles.dayWeekText}>Friday</Text>
                    <Text style={styles.monthWeekText}>Feb, 2017</Text>
                    <Text style={styles.timeWeekText}>04:30 PM</Text>
                  </Body>
                </CardItem>
              </Col>
            </Row>
          </Col>
        </Card>
      );
    }

    return(
      <Container style={{flex:1}}>
        <Header style={{backgroundColor:'#fc214f',borderBottomWidth:0}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>My Trips</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Container style={{flex:1, margin:17, backgroundColor:'white'}}>
          <Content>
            <SwipeMyTrip
              ref={(c) => this.swiper = c}
              circleDefaultStyle = {{
                backgroundColor: Colors.thinLineColor,
                height: 10,
                width: 10,
                borderRadius: 5,
                marginTop: 60
              }}
              style = {{ backgroundColor: Colors.base }}
              circleActiveStyle = {{
                backgroundColor: Colors.timeColor,
                height: 10,
                width: 10,
                borderRadius: 5,
                marginTop: 60
              }}>
              {swiperpage}
            </SwipeMyTrip>
          </Content>
        </Container>
      </Container>
    )
  }
}
