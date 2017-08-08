import React,{ Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import {
  Header,
  Container,
  Content,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  List,
  ListItem,
} from 'native-base';
import { Colors, Images, Fonts } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import InformationModal from '../../components/InformationModal';
import { Actions } from 'react-native-router-flux';
import styles from './AllTripsStyle';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AllTripCell } from '../../components';

class AllTrips extends Component {

  constructor(props){
    super(props);
    this.state ={
      open:false,
    }
  }

  static propTypes = {
    alltrip: PropTypes.any
  };

  luggageChecked =() =>{
    this.setState({
      luggageChecked:!this.state.luggageChecked,
    })
  };

  openModal =() =>{
    this.refs.informationmodal.showInformationDialog();
  };

  onPressGoBack = () =>{
    Actions.pop();
  };

  render(){
    let date = new Date();
    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "June", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    const busService =[
      {index:0, name:'College Shuttle Van',amount:'$72', seats:10, stop:1,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins', star:4.5, rating:25},
      {index:1, name:'College Shuttle Van',amount:'$66', seats: 0, stop:3,
        fsu:'04:30 PM',ssm:'09:30 PM', totalTime:'4 hrs 30 mins',star:3.0, rating:25},
      {index:2, name:'College Shuttle Van',amount:'$70', seats: 10, stop:2,
        fsu:'04:30 PM',ssm:'08:30 PM', totalTime:'4 hrs 00 mins',star:3.5,rating:25},
    ];
    const busInformation = [
      {index:0, boardingpoint:'University Campus', drop:'MetroStation'}
    ];
    let locationList, trips = undefined;

    const { alltrip } = this.props;
    if(alltrip){
      locationList = alltrip.weeklyTrip.rTrips[0].rLocations;
      trips = alltrip.weeklyTrip.rTrips[0];
    }


    return(

      <Container style={{backgroundColor:Colors.base, marginBottom: 60 }}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset:{height:0,width:0},shadowOpacity:0}}>
            <Left>
              <Button transparent onPress={this.onPressGoBack}>
                <Icon name="arrow-back" style={{color:Colors.white}}/>
              </Button>
            </Left>
            <Body style={{flexDirection:'column'}}>
              <View>
                <Title
                  style={{
                    color: Colors.white,
                    marginLeft:-40,
                    marginRight:-40,
                    ...Fonts.style.title
                  }}>University - Home</Title>
              </View>
              <View style={styles.dateRow}>
                <TouchableOpacity>
                  <Image source={Images.arrowBack} style={styles.backDate}/>
                </TouchableOpacity>
                <Text style={{color: Colors.white}}>{day + ' '+ monthNames[monthIndex]+ ','+' ' + year}</Text>
                <TouchableOpacity>
                  <Image source={Images.arrowForward} style={styles.nextDate}/>
                </TouchableOpacity>
              </View>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>

        <Content>
          <List
            style={{ flex: 1, borderBottomWidth: 0 }}
            dataArray={locationList}
            renderRow={(item) =>{
              return(
                <ListItem style={{ marginTop: -14, marginBottom: -14, borderBottomWidth: 0 }}>
                  <AllTripCell
                    allTripCellItem = {item}
                    busInformation={busInformation}
                    trips={trips}
                    staticdata={busService}
                    openModal = {this.openModal}/>
                </ListItem>
              )
            }}
          />
        </Content>
        <InformationModal ref="informationmodal" />
      </Container>
    )
  }
}
export default connect(state => ({
  alltrip: state.seachTrip
}))(AllTrips)