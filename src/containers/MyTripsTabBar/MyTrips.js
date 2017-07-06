import React,{Component} from 'react';
import { Container, Content,  Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
export default class MyTrips extends Component {

  render(){
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

          </Content>
        </Container>
      </Container>
    )
  }
}
