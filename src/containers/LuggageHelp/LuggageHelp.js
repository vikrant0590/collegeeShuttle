import React,{ Component } from 'react';
import { HelpSupportCell } from "../../components";
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './LuggageHelpStyle';
import {Colors, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';


const items = [
  {index:0, heading:'Luggage policy'},
  {index:1, heading:'Luggage insurance'},
  {index:2, heading:'Lost Luggage'}];

const questions =[
  { index:0,
    question:"What is your luggage policy ?",
    answer:{
      bold:false,
      ans:"College Shuttle does not check luggage or provide receipts for luggage transported on the"+
        " Shuttle by the passenger. Passengers are advised that College Shuttle will accept up to one piece" +
      " of luggage per passenger. For guidance this should be no more than the size of a small duffel or Gym bag."+
      " Passengers can also take on board one small piece of luggage that must fit either on your lap or under the"+
      " seat in front of you.  Please be advised that passengers wishing to travel with more luggage than "+
      "one small duffel or Gym bag and one small piece of luggage that can fit on your lap or under the seat"+
      " in front of you may have items refused, depending on the availability of space."
    }},
  { index:1,
    question:"Does collegeshuttles.com offer luggage insurance?",
    answer:{
      bold:false,
      ans:"No."
    }},
  { index:2,
    question:"Whom should i contact to locate items that have been lost on the bus?",
    answer:{
      bold:false,
      ans:"College Shuttle maintains a “Lost & Found” department to assist customers in locating items"+
        " lost on the shuttle. All inquiries should be requested through the form on the Contact Us page" +
      " on our website. College Shuttle is not responsible for any items that were lost by a passenger on our shuttles."
    }
  },
];

export default class LuggageHelp extends Component {

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