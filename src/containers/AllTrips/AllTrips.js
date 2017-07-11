import React,{ Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Header, Container, Left, Right, Button, Icon, Body, Title, List} from 'native-base';
import { Colors, Images, Fonts  } from '../../theme';
import {styles} from './AllTripsStyle';
export default class AllTrips extends Component {

  nameColor =(seats)=>{
    if(seats > 0){
      return(
        {...Fonts.style.allTripInfo, color:Colors.black}
      )}else {
      return(
        {...Fonts.style.allTripInfo, color:Colors.availability}
      )
    }
  };
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

    var busService =[
      {index:0, name:'College Shuttle Van',amount:'$72', seats:10, stop:2,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins'},
      {index:0, name:'College Shuttle Van',amount:'$72', seats: 0, stop:4,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins'}];

    return(
      <Container style={{flex: 1,backgroundColor:Colors.base}}>
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
        <View style={{ margin:15}}>
          <List dataArray={busService}
            renderRow={(item) =>
              <View style={{height:200, marginBottom:15,backgroundColor:Colors.white}}>
                <View style={{marginTop:20,marginLeft:15 , flexDirection:'row'}}>
                  <Text  style = {this.nameColor(item.seats)}>{item.name}</Text>
                  <Text style={{marginLeft:120,...Fonts.style.universityFont}}>{item.seats} Seats</Text>
                </View>
                <View style={{marginTop:10,marginLeft:15, flexDirection:'row'}}>
                  <Text style={{...Fonts.style.distancePoint,color:Colors.profileForm,marginRight:280}}>FSU</Text>
                  <Text style={{...Fonts.style.distancePoint, color:Colors.profileForm}}>SSM</Text>
                </View>
                <View style={{marginTop:2,marginLeft:16,flexDirection:'row'}}>
                  <View style={{flexDirection:'row'}}>
                    <Image source={Images.ellipseOuter}/>
                    <Image source={Images.ellipse} style={{marginLeft:-10,marginTop:4}}/>
                  </View>
                  <View style={{height:0.9,width:290,backgroundColor:'red',marginTop:7,marginLeft:4}}></View>
                  <View>
                    <Image source={Images.inteligent}/>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:2}}>
                  <Text style={(item.seats > 0 ? {color:Colors.black} : {color:Colors.availability})}>{item.fsu}</Text>
                  <View style={{marginLeft:45,marginRight:55}}>
                    <Text style={{...Fonts.style.universityFont}}>{item.totalTime}</Text>
                  </View>
                  <Text>{item.ssm}</Text>

                </View>
              </View>
            }
          />
        </View>
      </Container>
    )
  }
}