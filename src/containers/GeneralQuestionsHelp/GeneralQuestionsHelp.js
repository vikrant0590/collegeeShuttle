import React,{ Component } from 'react';
import { HelpSupportCell } from "../../components";
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './GeneralQuestionsHelpStyle';
import {Colors, Fonts } from '../../theme/index';
import { Actions } from 'react-native-router-flux';

const items = [
  {index:0, heading:'Pick Up Locations'},
  {index:1, heading:'Food Policy'},
  {index:2, heading:'Disabled Passengers'},
  {index:3, heading:'Assigned Seats'}];

const questions =[
  { index:0,
    question:"Can I cancel and get a refund?",
    answer:{
      bold: false,
      ans:"We pick up students from their Dorms or Off campus Locations. On some campuses we pick " +
        "up from a central location on Campus." +'\n' +"Your pick up location is on your confirmation email. "
    }},
  { index:1,
    question:" Can i bring food?",
    answer:{
      bold:true,
      ans:"Food and non-alcoholic beverages may be carried on board for personal consumption."
    }},
  { index:2,
    question:"Can you accommodate passengers with disabilities? ",
    answer:{
      bold:false,
      ans:"Please call to explain the necessary needs of the customer to a college shuttle representative" +
        " and after understanding we will let you know the best option."
    }
  },
  { index:3,
    question:"Do you assign seats on the bus?",
    answer:{
      bold:false,
      ans:"No, we operate on a first-come first-serve basis. If some seats are occupied,"+
        " the driver may ask the seated customer to move to a different seat to make place for a" +
      " disabled person. But, if that customer refuses, he/she cannot be forced to move."
    }
  },
];

export default class GeneralQuestionsHelp extends Component {

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