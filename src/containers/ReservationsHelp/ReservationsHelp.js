import React,{ Component } from 'react';
import { HelpSupportCell } from "../../components";
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './ReservationsHelpStyle';
import {Colors, Fonts } from '../../theme/index';
import { Actions } from 'react-native-router-flux';

const items = [
  {index:0, heading:'Changing Reservations'},
  {index:1, heading:'Guaranteed Seats'},
  {index:2, heading:'In Advance Reservations'},
  {index:3, heading:'Printing Tickets'},
  {index:4, heading:'Boarding Shuttles'}];

const questions =[
  { index:0,
    question:"Can I change a reservation?",
    answer:{
      bold:false,
      ans:"If you purchase a refundable ticket, you can change your reservation by" +
        " emailing support@collegeshuttles.com." +
      "One way reservations can not be changed to Round trip reservations. " + "\n" + "\n"+
      "If you purchased a nonrefundable ticket you can make changes to your" +
      "reservation before 48 hours of your trip with a fee of $15." +
      "If you need to make a change within 48 hours of your trip you can do so"+
      "with a fee of $36. One way reservations can not be changed to Round trip reservations."
    },
    heading: "All refund disputes must be put in place or brought to us with in 30 days after the scheduled trip."

  },
  { index:1,
    question:" I booked a reservation, is my seat guaranteed?",
    answer:{
      bold:true,
      ans:"All seats that have been booked and paid in advance either online" +
        " or by phone are guaranteed as long as the passenger shows up on time at the bus."
    }
  },
  { index:2,
    question:" How far in advance can I make a reservation?",
    answer:{
      bold:false,
      ans:"Reservations can be made for trips starting in the beginning of each semester." +
        "Due to operational constraints College Shuttle may choose to change this period."
    }
  },
  {index: 3,
    question:"Do I get a ticket to board the bus?",
    answer:{
      bold:false,
      ans:"College Shuttle is totally ticketless and reservation can be made online or over the phone."
    }
  },
  {index: 4,
    question:"What do i need to board the bus?",
    answer:{
      bold:false,
      ans:"You must provide the driver with a school id."+  "\n"+
        "Make sure you obtain a reservation confirmation for each trip you reserve." +
      "While not required, we do suggest you"+
      "bring a printed copy of your payment confirmation page or" +
      " reservation confirmation email." + "\n" + "As these will include "+
      "your reservation information."
    }
  }
];

export default class ReservationsHelp extends Component {

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