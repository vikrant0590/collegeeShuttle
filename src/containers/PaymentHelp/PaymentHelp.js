import React,{ Component } from 'react';
import { HelpSupportCell } from "../../components";
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './PaymentHelpStyle';
import {Colors, Fonts } from '../../theme/index';
import { Actions } from 'react-native-router-flux';

const items = [
  {index:0, heading:'Refunds'},
  {index:1, heading:'Purchasing Tickets'},
  {index:2, heading:'Payment Issues'}];

const questions =[
  {
    index: 0,
    question: "Can I cancel and get a refund?",
    answer: undefined,
  },

  { index:1,
    question:" How do I pay for my trip?",
    answer:{
      bold:false,
      ans:"All College Shuttle prices are shown in US$. Payment for reservations can be made using " +
        " most major credit cards, including Visa, MasterCard, and American Express."
    }},
  { index:2,
    question:" I had problems making my payment what should I do? ",
    answer:{
      bold:false,
      ans:"We accept all major credit cards, if you are having a problem with your card getting rejected " +
        " or denied check your account to make sure the card is working and funds are in the account."+
      "If your card continuously declines you should immediately call your bank, when a card is " +
      "declines banks usually put a hold on the account for a few days." +
      "Give us a call 877-789-1947 or send us and email Support@collegeshuttles.com and we can try the " +
      "card with another system. Do not send credit card information in the email."
    }

  }];

export default class PaymentHelp extends Component {

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
                    <HelpSupportCell data={item} identifier={"LuggageHelp"} query ={questions} />
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