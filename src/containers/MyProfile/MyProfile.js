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
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  ListItem,
  Card,
  Row
} from 'native-base';
import { ProfileEdit} from '../../containers'
import ImagePicker from 'react-native-image-picker';
import { Images, Colors, Metrics, Fonts } from '../../theme';
import styles from './MyProfileStyles';
import {Actions as NavAction}from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class MyProfile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      profileDetail:false,
      myprofile:true,
      list:true,
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
      NavAction.friendlist();
    }
    else if(item.index === 3){
      NavAction.mypackage();
    }
    else if(item.index === 4){
      NavAction.packages();
    }
  };

  onPressSave=()=>{
    if(this.state.profileDetail) {

      this.setState({
        profileDetail: false,
        list: true
      });
    }
  };

  setMyProfile =() =>{
    this.setState({
      myprofile:true,
      list:true,
      profileDetail:false,
    });

  };

  selectPhotoTapped =()=> {
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
      }
      else if (response.error) {
      }
      else if (response.customButton) {
      }
      else {
        let source = { uri: response.uri };
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
      {index: 3, title: 'My Package'},
      {index: 4, title: 'Refer & Earn'},
      {index: 5, title: 'My Offers'}];

    return (

      <Container style={{ marginBottom: Metrics.tabBarHeight, backgroundColor: Colors.base }}>
        <Content>
          <LinearGradient colors={['#FC214F', '#D32735']} style={styles.avatarContainer}>
            <Row style={(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ?
              { marginTop: -30 } : { marginTop: -35 } : { marginTop: -45 }}>
              <Left style={{marginTop:15}}>
                <Button transparent onPress={this.setMyProfile}>
                  <Icon name="arrow-back" style={{color: Colors.white, marginLeft:1 , fontSize: Fonts.size.h2}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color: Colors.white, ...Fonts.style.title,marginTop:15}}>My Profile</Title>
              </Body>
              <Right>
                <TouchableOpacity onPress={this.onPressSave}>
                  <Text style={styles.saveButton}>SAVE</Text>
                </TouchableOpacity>
              </Right>
            </Row>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:(Metrics.screenWidth === 320) ? (Metrics.screenHeight === 480) ? -30  :  -35 :  -40 }}>
              <TouchableOpacity onPress={this.selectPhotoTapped}>

                { this.state.avatarSource === null ? <Image source={Images.profileicon}  style={styles.avatar}/> :
                  <Image source={this.state.avatarSource} style={styles.avatarImage}/>
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View style={styles.editPicture}>
                  <Image source={Images.edit} style={styles.pencil}/>
                  <Text style={{color: Colors.white}}> Edit Profile Picture</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          { (this.state.profileDetail && this.state.myprofile && this.state.list === false) &&
          <ProfileEdit/>
          }
          {(this.state.myprofile && this.state.list ) &&
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
          }
        </Content>
      </Container>
    )
  }

}

