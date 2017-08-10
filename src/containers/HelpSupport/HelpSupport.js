import React,{ Component } from 'react';
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './HelpSupportStyle';
import {HelpSupportCell} from '../../components';
import {Colors, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';

const items = [
  {index:0, heading:'Luggage'},
  {index:1, heading:'Reservations'},
  {index:2, heading:'Payment'},
  {index:3, heading:'General Questions'}];

export default class HelpSupport extends Component {

  onPressGoBack = () =>{
    Actions.pop();
  };
  render() {
    return(
      <Container style={{flex:1, backgroundColor:Colors.base}}>
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
              }}
              dataArray={items}
              renderRow={(item) =>{
                return(
                  <ListItem
                    style={{
                      marginTop: 3
                    }}>
                    <HelpSupportCell data={item} identifier={"HelpSupport"}/>
                  </ListItem>
                )}
              }>
            </List>
          </Card>
        </Content>
      </Container>
    )
  }
}