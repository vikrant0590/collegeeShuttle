import React,{ Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  List,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  ListItem,
  Card,
} from 'native-base';
import { ProfileEdit} from '../../containers'
import ImagePicker from 'react-native-image-picker';
import { Images, Colors, Metrics, Fonts } from '../../theme';
import styles from './MyProfileStyles';
import Packages from '../../containers/Packages';
import BuyPackage from "../BuyPackage/BuyPackage";
import FriendList from "../FriendList/FriendList";
import {Actions as NavAction}from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

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
        list:false,
        myprofile:true
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
      // this.setState({
      //   myprofile:false,
      //   list:false,
      //   buyPackage:true
      // })
      NavAction.mypackage();
    }
    else if(item.index === 4){
      this.setState({
        myprofile:false,
        refer:true,
        list:false
      })
    }
  };

  myProfile = () =>{
    this.setState({
      myprofile:true,
      list:true,
      profileDetail:false,
      buyPackage:false,
      friendlist:false,
      refer: false,
    })
  };
  saveData=()=>{
    this.setState({
      profileDetail:false,
      list:true
    })
  };

  setMyProfile = () =>{
    this.setState({
      myprofile:true,
      list:true,
      profileDetail:false,
      friendlist:false,
      refer:false,
      buyPackage:false
    });

  };

  selectPhotoTapped = ()=> {
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
  };


  render() {
    const items = [
      {index: 0, title: 'Profile Detail'},
      {index: 1, title: 'Saved Cards'},
      {index: 2, title: 'Friends List'},
      {index: 3, title: 'Buy Package'},
      {index: 4, title: 'Refer & Earn'},
      {index: 5, title: 'My Offers'}];

    return (

      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
        {(this.state.myprofile) &&

        <Header style={{ backgroundColor: '#FC214F',borderBottomColor:Colors.transparent}}>

          <Left>
            <Button transparent onPress={this.setMyProfile}>
              <Icon name="arrow-back" style={{color: Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white, ...Fonts.style.title}}>My Profile</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.saveData}>
              <Text style={styles.saveButton}>SAVE</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        }

        { (this.state.profileDetail && this.state.myprofile && this.state.list === false) &&
          <Content>
            <LinearGradient colors={['#FC214F', '#D32735']}>
              <View style={styles.avatarContainer}>
                <TouchableOpacity onPress={this.selectPhotoTapped}>
                  <View style={styles.avatar}>
                    { this.state.avatarSource === null ? null :
                      <Image source={this.state.avatarSource}/>
                    }
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.selectPhotoTapped}>
                  <View style={styles.editPicture}>
                    <Image source={Images.edit} style={styles.pencil}/>
                    <Text style={{color: Colors.white}}> Edit Profile Picture</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <ProfileEdit/>
          </Content>
        }

        {(this.state.myprofile && this.state.list ) &&
            <Content>
              <LinearGradient colors={['#FC214F', '#D32735']}>
                <View style={styles.avatarContainer}>
                  <TouchableOpacity onPress={this.selectPhotoTapped}>
                    <View style={styles.avatar}>
                      { this.state.avatarSource === null ? null :
                        <Image source={this.state.avatarSource}/>
                      }
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.selectPhotoTapped}>
                    <View style={styles.editPicture}>
                      <Image source={Images.edit} style={styles.pencil}/>
                      <Text style={{color: Colors.white}}> Edit Profile Picture</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
              <View style={styles.listContainer}>
                <Card>
                  <List
                    dataArray={items}
                    renderRow={(item) =>
                      <ListItem
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: -19,
                          borderColor: Colors.thinLineColor
                        }}>
                        <TouchableOpacity
                          onPress={ () => this.onPress(item)}
                          hitSlop={{top: 10, bottom: 10, right: 300}}
                          style={{flexDirection: 'row', justifyContent: 'center'}}>
                          <Left
                            style={{
                              justifyContent: 'center',
                              top: 8
                            }}>
                            <Text style={styles.itemList}>{item.title}</Text>
                          </Left>
                          <Right
                            style={{
                              marginRight: 20,
                            }}>
                            <Image source={Images.rightArrow} style={styles.rightArrow}/>
                          </Right>
                        </TouchableOpacity>
                      </ListItem>
                    }
                  />
                </Card>
              </View>
            </Content>
        }

        {(this.state.refer) &&
        <Packages myProfile ={() => this.setMyProfile()}/>
        }
        {(this.state.friendlist) &&
        <FriendList myProfile={() => this.setMyProfile()}/>
        }
        {(this.state.buyPackage) &&
          <BuyPackage myProfile={() => this.setMyProfile()}/>
        }
      </Container>
    )
  }

}

