import React,{ Component } from 'react';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import styles from './SettingStyle';
import {Switch} from 'react-native-base-switch';
import {Colors, Images } from '../../theme';
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
  switchValue1 =() => {
    this.setState({
      showNotification: !this.state.showNotification,
    });
  };
    switchValue2 =() => {
      this.setState({
        parentsNotification: !this.state.parentsNotification,
      });
    };
      switchValue3 = () => {
        this.setState({
          locationService: !this.state.locationService,
        });
      };

      render(){
        return(
          <Container style={{flex:1}}>
            <Header style={{backgroundColor:Colors.headerColor,borderBottomWidth:0}}>
              <Left>
                <Button transparent onPress={NavAction.pop}>
                  <Icon name="arrow-back" style={{color:'white'}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:'white'}}>Settings</Title>
              </Body>
              <Right>
              </Right>
            </Header>
            <View style={styles.listContainer}>
              <Content>
                <View style={styles.listHeadingContainer}>
                  <Text style={styles.listHeadingText}>GENERAL SETTINGS</Text>
                </View>
                <List>
                  <ListItem>
                    <Left>
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
                          onChangeState={this.switchValue1}/>
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Left>
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
                          onChangeState={this.switchValue2}/>
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                  <ListItem >
                    <Left>
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
                          onChangeState={this.switchValue3}/>
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                      <Left>
                        <Text style={styles.listText}>
                          Default Payment
                        </Text>
                      </Left>
                      <Right>
                        <Image source={Images.rightArrow}  style={styles.rightArrow} />
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                      <Left>
                        <Text style={styles.listText}>
                        Package Code
                        </Text>
                      </Left>
                      <Right>
                        <Image source={Images.rightArrow}  style={styles.rightArrow} />
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                      <Left>
                        <Text style={styles.listText}>
                        About Us
                        </Text>
                      </Left>
                      <Right>
                        <Image source={Images.rightArrow}  style={styles.rightArrow}/>
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} style={{flexDirection:'row'}}>
                      <Left>
                        <Text style={styles.listText}>
                          Terms and Condition
                        </Text>
                      </Left>
                      <Right>
                        <Image source={Images.rightArrow} style={styles.rightArrow}/>
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                  <ListItem>
                    <TouchableOpacity hitSlop={{top:10,bottom:10,right:300}} onPress={NavAction.login}>
                      <Left>
                        <Text style={styles.listText}>
                          Logout
                        </Text>
                      </Left>
                      <Right>
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                </List>
              </Content>
            </View>
          </Container>
        )
      }
    }
