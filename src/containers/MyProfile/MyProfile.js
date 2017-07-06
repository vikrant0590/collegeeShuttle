import React,{ Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, List, ListItem, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { ProfileEdit} from '../../containers'
import ImagePicker from 'react-native-image-picker';
import { Images, Colors, } from '../../theme';
import styles from './MyProfileStyles';
import { Actions as NavAction} from 'react-native-router-flux';

export default class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      editProfile: false,
    }
  }

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


  onPress = (item) => {
    switch (item.index) {
      case 0:
        this.setState({
          editProfile: !this.state.editProfile
        });
        break;
      case 1:

        break;
      case 2:

        break;
      case 3:
        NavAction.packages();
        break;
      case 4:


        break;
      case 5:

        break;
      default:

    }
  };
  saveData=()=>{
    this.setState({
      editProfile:!this.state.editProfile
    })
  };

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
        <Header style={{backgroundColor: Colors.headerColor, borderBottomWidth: 0,
          shadowOffset:{height:0,width:0},shadowOpacity:0}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{color:Colors.white}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white}}> My Profile</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.saveData}>
              <Text style={styles.saveButton}>SAVE</Text>
            </TouchableOpacity>
          </Right>
        </Header>
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
              <Text style={{color:Colors.white}}> Edit Profile Picture</Text>
            </View>
          </TouchableOpacity>
        </View>
        {!this.state.editProfile ?
          <View style={styles.listContainer}>
            <Content>
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
                }>
              </List>
            </Content>
          </View>
          :
          <ProfileEdit/>
        }
      </Container>
    )
  }

}
