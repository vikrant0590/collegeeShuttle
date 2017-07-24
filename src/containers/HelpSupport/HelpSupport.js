import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './HelpSupportStyle';
import {Colors, Metrics, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';

const items = ['What do I need to Board Shuttle',
  'Where Do I Get Picked Up from',
  'How much Luggage Can I Bring',
  'Cancelation Policy'];

export default class HelpSupport extends Component {

  onPressGoBack = () =>{
    Actions.pop();
  };

  render() {
    return(
      <Container style={{flex:1}}>
        <Header style={{backgroundColor:Colors.headerColor,borderBottomWidth:0}}>
          <Left>
            <Button transparent onPress={this.onPressGoBack}>
              <Icon name="arrow-back" style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: Colors.white, ...Fonts.style.title }}>Help Support</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.cardViewStyle}>
            <Card
              style={{
                flex: 1,
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <List
                style={{
                  flex: 1,
                  height:Metrics.screenHeight/2,
                }}
                dataArray={items}
                renderRow={(item) =>{
                  return(
                    <ListItem
                      style={{
                        marginTop: 3
                      }}>
                      <Text
                        style={{
                          fontSize: Fonts.size.regular,
                          fontFamily: Fonts.lato.base,
                        }}>{item}</Text>
                    </ListItem>
                  )}
                }>
              </List>
            </Card>
          </View>
        </Content>
      </Container>
    )
  }
}