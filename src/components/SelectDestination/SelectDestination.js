import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Header, Item, Input, Icon, Button, List, ListItem, Row, Col, } from 'native-base';
import { Colors, Fonts, Images } from '../../theme';
import styles from './SelectDestinationStyle';
import SelectDestinationModalSuccess from 'react-native-simple-modal';
import { SelectedDestinationCell } from '../../components';

export default class SelectDestination extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
      placeholdertext: undefined,
      selectDestinationList: undefined
    }
  }

  selectDestinationBox = (data, placeholder) => {
    this.setState({
      open: true,
      placeholdertext: placeholder,
      selectDestinationList: data
    });
  };


  dismiss = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, selectDestinationList } = this.state;
    return(
      <SelectDestinationModalSuccess
        open={open}
        overlayBackground={Colors.selectDestinationColor}
        modalDidClose={() => this.setState({ open: false }) }
        containerStyle={styles.SelectDestinationConatiner}
        modalStyle={styles.SelectDestinationViewStyle}>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            height: 40,
          }}>
          <Row>
            <Col
              style={{
                flex: 1,
                borderWidth: 1.5,
                borderColor: Colors.percentageTextColor,
                borderRadius: 10,
              }}>
              <Row style={{ flex: 1 }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginLeft: 15,
                  }} source={Images.searchicon} />
                <TextInput
                  style={{
                    backgroundColor: Colors.white,
                    flex: 1,
                    borderRadius: 10,
                    marginLeft: 5,
                    justifyContent: 'center'
                  }}
                  placeholder={this.state.placeholdertext}
                  onChangeText={(text) => this.setState({text})}
                  placeholderTextColor =  {Colors.settingHeadingTextColor}
                  value={this.state.text}
                />
              </Row>
            </Col>
          </Row>
        </View>

        <List
          style={{
            marginLeft: -10,
            marginRight: -10,
            marginTop: 0,
            marginBottom: -10,
          }}
          dataArray={selectDestinationList}
          renderRow={(item) =>{
            return(
              <ListItem
                style={{
                  borderColor: Colors.thinLineColor,
                  marginRight: -19
                }}>
                <SelectedDestinationCell locationData={item} dismiss={this.dismiss} />
              </ListItem>
            )
          }}
        />
      </SelectDestinationModalSuccess>
    )
  }
}

