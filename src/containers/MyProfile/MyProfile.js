import React,{ Component } from 'react';
import { Text, View, TouchableOpacity, Image, } from 'react-native';
import { Container, Content, List, Header, Left, Body, Right, Title, Button, Icon ,ListItem,} from 'native-base';
import { ProfileEdit} from '../../containers'
import ImagePicker from 'react-native-image-picker';
import { Images, Colors, } from '../../theme';
import styles from './MyProfileStyles';
import Packages from '../../containers/Packages';
import BuyPackage from "../BuyPackage/BuyPackage";
import FriendList from "../FriendList/FriendList";
import {Actions as NavAction}from 'react-native-router-flux';
export default class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      profileDetail:false,
      myprofile:true,
      refer:false,
      list:true,
      buyPackage:false,
      friendlist:false,
    }
  }

  onPress = (item) => {
    if(item.index === 0){
      this.setState({
        profileDetail:true,
        list:false
      })
    }
    else if(item.index === 2){
      this.setState({
        myprofile:false,
        list:false,
        friendlist:true
      })
    }
    else if(item.index === 3){
      this.setState({
        myprofile:false,
        list:false,
        buyPackage:true
      })
    }
    else if(item.index === 4){
      this.setState({
        myprofile:false,
        refer:true,
        list:false
      })
    }
  };

  saveData=()=>{
    this.setState({
      profileDetail:false,
      list:true
    })
  };

  friendList = () => {
    this.setState({
      friendlist: false,
      list:true,
      myprofile:true
    })
  };

  buyPackage =() => {
    this.setState({
      buyPackage:false,
      list:true,
      myprofile:true
    })
  };
  refer =() => {
    this.setState({
      refer:false,
      myprofile:true,
      list:true
    })
  };

  myprofile = () =>{
    if(this.state.profileDetail === true){
      this.setState({
        myprofile:true,
        list:true,
        profileDetail:false
      })
    }else {
      NavAction.pop();
    }
  };


  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = {uri: response.uri};
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  render() {
    var items = [
      {index: 0, title: 'Profile Detail'},
      {index: 1, title: 'Saved Cards'},
      {index: 2, title: 'Friends List'},
      {index: 3, title: 'Buy Package'},
      {index: 4, title: 'Refer & Earn'},
      {index: 5, title: 'My Offers'}];

    return (

      <Container style={{flex: 1}}>
        {(this.state.myprofile) &&
        <Header style={{
          backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset: {height: 0, width: 0}, shadowOpacity: 0
        }}>
          <Left>
            <Button transparent onPress={this.myprofile}>
              <Icon name="arrow-back" style={{color: Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white}}>My Profile</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.saveData}>
              <Text style={styles.saveButton}>SAVE</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        }
        { (this.state.myprofile) &&
          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={styles.avatar}>
                { this.state.avatarSource === null ? null :
                  <Image source={this.state.avatarSource}/>
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={Images.edit} style={styles.pencil}/>
                <Text style={{color: Colors.white}}> Edit Profile Picture</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
        {(this.state.list === true) &&
            <Content>
              <View style={styles.listContainer}>
                <List dataArray={items}
                  renderRow={(item) =>
                    <ListItem>
                      <TouchableOpacity
                        onPress={ () => this.onPress(item)}
                        hitSlop={{top: 10, bottom: 10, right: 300}}
                        style={{flexDirection: 'row'}}>
                        <Left>
                          <Text style={styles.itemList}>{item.title}</Text>
                        </Left>
                        <Right>
                          <Image source={Images.rightArrow} style={styles.rightArrow}/>
                        </Right>
                      </TouchableOpacity>
                    </ListItem>
                  }
                />
              </View>
            </Content>
        }
        {(this.state.profileDetail) &&
          <ProfileEdit/>
        }
        {(this.state.refer) &&
        <Packages isActive ={() => this.refer()}/>
        }
        {(this.state.friendlist) &&
        <FriendList isActive={() => this.friendList()}/>
        }
        {(this.state.buyPackage) &&
          <BuyPackage isActive={() => this.buyPackage()}/>
        }
      </Container>
    )
  }

}

