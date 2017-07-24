import React,{ Component } from 'react';
import { Text, View, TouchableOpacity,Image, AsyncStorage } from 'react-native';
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon, Card } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SettingStyle';
import {Switch} from 'react-native-base-switch';
import {Colors, Images, Metrics, Fonts } from '../../theme';
import { Platform} from 'react-native';
import { Actions as NavAction } from 'react-native-router-flux';

export default class Setting extends Component {
  constructor(props){
    super(props);
    this.state={
      showNotification:false,
      parentsNotification:false,
      locationService:false,
    }
  }
  showNotification =() => {
    this.setState({
      showNotification: !this.state.showNotification,
    });
  };
  parentsNotification =() => {
    this.setState({
      parentsNotification: !this.state.parentsNotification,
    });
  };

locationService = () => {
  this.setState({
    locationService: !this.state.locationService,
  });
};

onPressLogout =() => {
  AsyncStorage.removeItem('userCredentials');
  NavAction.login();
};

onPressPackageCode=() => {
  NavAction.buypackage();
};




render(){
  return(
    <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
      <LinearGradient colors={['#FC214F', '#D32735']}>
        <Header style={{backgroundColor:Colors.transparent,borderBottomWidth:0}}>
          <Left>
            <Button transparent onPress={NavAction.pop}>
              <Icon name="arrow-back" style={{color: Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white', ...Fonts.style.title }}>Settings</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </LinearGradient>
      <Content>
        <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
          <List style={{ width: Metrics.screenWidth-50, flex: 1 }}>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 0,
                marginRight: -19,
                backgroundColor: Colors.profileInputHeadingColor
              }}>
              <Text
                style={styles.listHeadingText}>GENERAL SETTINGS</Text>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <Left
                style={{
                  top: 6.5
                }}>
                <Text style={styles.listText}>
                    Show Notifications
                </Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <Switch active={this.state.showNotification}
                    activeButtonColor="#e2383f"
                    activeButtonPressedColor="#e2383f"
                    inactiveButtonColor="#9B9B9B"
                    inactiveButtonPressedColor="#9B9B9B"
                    activeBackgroundColor="#ffb6c1"
                    inactiveBackgroundColor="#D3D3D3"
                    switchHeight={Platform.OS === 'ios' ? 14 : 20}
                    switchWidth={Platform.OS === 'ios' ? 30 : 36}
                    buttonRadius={Platform.OS ==='ios' ? 10 : 11}
                    onChangeState={this.showNotification}/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <Left
                style={{
                  top: 6.5
                }}>
                <Text style={styles.listText}>
                  Parents Notifications
                </Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <Switch active={this.state.parentsNotification}
                    activeButtonColor="#e2383f"
                    activeButtonPressedColor="#e2383f"
                    inactiveButtonColor="#9B9B9B"
                    inactiveButtonPressedColor="#9B9B9B"
                    activeBackgroundColor="#ffb6c1"
                    inactiveBackgroundColor="#D3D3D3"
                    switchHeight={Platform.OS === 'ios' ? 14 : 20}
                    switchWidth={Platform.OS === 'ios' ? 30 : 36}
                    buttonRadius={Platform.OS ==='ios' ? 10 : 11}
                    onChangeState={this.parentsNotification}/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <Left
                style={{
                  top: 6.5
                }}>
                <Text style={styles.listText}>
                  Location Service
                </Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <Switch active={this.state.locationService}
                    activeButtonColor="#e2383f"
                    activeButtonPressedColor="#e2383f"
                    inactiveButtonColor="#9B9B9B"
                    inactiveButtonPressedColor="#9B9B9B"
                    activeBackgroundColor="#ffb6c1"
                    inactiveBackgroundColor="#D3D3D3"
                    switchHeight={Platform.OS === 'ios' ? 14 : 20}
                    switchWidth={Platform.OS === 'ios' ? 30 : 36}
                    buttonRadius={Platform.OS ==='ios' ? 10 : 11}
                    onChangeState={this.locationService}/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                <Left
                  style={{
                    top: 6.5
                  }}>
                  <Text style={styles.listText}>
                    Default Payment
                  </Text>
                </Left>
                <Right>
                  <Image source={Images.rightArrow}  style={styles.rightArrow} />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <TouchableOpacity
                hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}
                onPress ={this.onPressPackageCode}

              >
                <Left
                  style={{
                    top: 6.5
                  }}>
                  <Text style={styles.listText}>
                  Package Code
                  </Text>
                </Left>
                <Right>
                  <Image source={Images.rightArrow}  style={styles.rightArrow} />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                <Left style={{ top: 6.5 }}>
                  <Text style={styles.listText}>
                  About Us
                  </Text>
                </Left>
                <Right>
                  <Image source={Images.rightArrow}  style={styles.rightArrow}/>
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: -19,
                borderColor: Colors.thinLineColor
              }}>
              <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                <Left style={{ top: 6.5 }}>
                  <Text style={styles.listText}>
                    Terms and Condition
                  </Text>
                </Left>
                <Right>
                  <Image source={Images.rightArrow} style={styles.rightArrow}/>
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              style={{
                marginRight: -19,
                borderBottomWidth: 0
              }}>
              <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} onPress={this.onPressLogout}>
                <Left style={{ top: 3 }}>
                  <Text style={styles.listText}>
                    Logout
                  </Text>
                </Left>
                <Right />
              </TouchableOpacity>
            </ListItem>
          </List>
        </Card>
      </Content>
    </Container>
  )
}
}
