import React,{ Component } from 'react';
import { View,Text ,Image,TouchableOpacity} from 'react-native';
import { Header,Container,Left, Right, Button, Icon, Body, Title} from 'native-base';
import { Colors,Images  } from '../../theme';

export default class AllTrips extends Component {
  render(){
    var date = new Date();
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "June", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return(
      <Container>
        <Header style={{backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset:{height:0,width:0},shadowOpacity:0}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body style={{flexDirection:'column'}}>
            <View>
              <Title style={{color: Colors.white,marginLeft:-40,marginRight:-40,}}>University - Home</Title>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
                <Image source={Images.arrowBack} style={{marginRight:25, marginTop:4}}/>
              </TouchableOpacity>
              <Text style={{color: Colors.white}}>{day + ' '+ monthNames[monthIndex]+ ','+' ' + year}</Text>
              <TouchableOpacity>
                <Image source={Images.arrowForward} style={{marginLeft:25,marginTop:4}}/>
              </TouchableOpacity>
            </View>
          </Body>
          <Right>
          </Right>
        </Header>
      </Container>
    )
  }
}