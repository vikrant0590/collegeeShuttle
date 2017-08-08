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
import { weeklyTripSearch } from '../../redux/modules/searchTrip';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';

class AllTrips extends Component {

  constructor(props){
    super(props);
    this.state ={
      open:false,
      increase: 1,
      decrease: 1,
      nextDate: moment(new Date()).format("DD"),
      previousDate: undefined,
      todayDate: moment(new Date()).format("DD-MMM, YYYY"),
    }
  }
  static contextTypes = {
    store: PropTypes.object,
  };

  static propTypes = {
    alltrip: PropTypes.any,
    allTripData: PropTypes.any
  };

  componentWillMount(){
    if(this.props.allTripData){
      let data = {
        "pkId": this.props.allTripData.pkId,
        "dpId": this.props.allTripData.dpId,
        "rTrip": this.props.allTripData.rTrip,
        "date":  this.props.allTripData.date
      };
      const {store: {dispatch}} = this.context;
      dispatch(weeklyTripSearch(data));
    }
  }

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

  onPressPreviousDate = () => {
    let todayDay = this.props.allTripData.date;
    if(this.state.nextDate > moment(new Date()).format('DD')) {
      this.setState({ increase: this.state.increase - 1, nextDate: moment(this.state.todayDate).subtract(1, "days").format("DD")},() =>{
        this.setState({
          todayDate: moment(`${ moment(todayDay).format('YYYY')}-${moment(todayDay).format('MM')}-${this.state.nextDate}`)
            .format("DD-MMM, YYYY")});
      });

      let data = {
        "pkId": this.props.allTripData.pkId,
        "dpId": this.props.allTripData.dpId,
        "rTrip": this.props.allTripData.rTrip,
        "date":  moment(this.state.todayDate).format('YYYY-MM-DD')
      };
      console.log('data pervious ===>> ', data);
      const {store: {dispatch}} = this.context;
      dispatch(weeklyTripSearch(data));

    }
  };

  onPressNextDate = (increase) => {
    let todayDay = this.props.allTripData.date;
    if(this.state.nextDate < moment(this.props.allTripData.endDateOfWeek).format('DD')) {
      this.setState({ increase: this.state.increase + 1, nextDate: moment().add(increase, 'days').format('DD')},() =>{
        this.setState({
          todayDate: moment(`${ moment(todayDay).format('YYYY')}-${moment(todayDay).format('MM')}-${this.state.nextDate}`)
            .format("DD-MMM, YYYY")});
      });
      let data = {
        "pkId": this.props.allTripData.pkId,
        "dpId": this.props.allTripData.dpId,
        "rTrip": this.props.allTripData.rTrip,
        "date":  moment(this.state.todayDate).format('YYYY-MM-DD')
      };
      console.log('data next ===>> ', data);
      const {store: {dispatch}} = this.context;
      dispatch(weeklyTripSearch(data));
    }
  };

  render(){

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
    if(alltrip.weeklyTrip.rTrips[0]){
      locationList = alltrip.weeklyTrip.rTrips[0].rLocations;
    }
    if(alltrip.weeklyTrip.rTrips[0]){
      trips = alltrip.weeklyTrip.rTrips[0];
    }

    return(

      <Container style={{backgroundColor:Colors.base, marginBottom: 60 }}>
        <Spinner visible={this.props.alltrip.isBusy} textContent={"Loading..."} textStyle={{color: Colors.white}} />
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
                  }}>{this.props.allTripData.fromDestination} - {this.props.allTripData.toDestination}</Title>
              </View>
              <View style={styles.dateRow}>
                <TouchableOpacity onPress={this.onPressPreviousDate.bind((this))}>
                  <Image source={Images.arrowBack} style={styles.backDate}/>
                </TouchableOpacity>
                <Text style={{color: Colors.white}}>{this.state.todayDate}</Text>
                <TouchableOpacity onPress={this.onPressNextDate.bind(this, this.state.increase)}>
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