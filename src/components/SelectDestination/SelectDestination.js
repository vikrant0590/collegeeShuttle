import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TextInput, Image } from 'react-native';
import { Header, Item, Input, Icon, Button, List, ListItem, Row, Col, } from 'native-base';
import { Colors, Fonts, Images, Metrics } from '../../theme';
import { connect } from 'react-redux';
import styles from './SelectDestinationStyle';
import SelectDestinationModalSuccess from 'react-native-simple-modal';
import { SelectedDestinationCell } from '../../components';
import { searchSelectedDestination } from '../../redux/modules/location';
import PropTypes from 'prop-types';

class SelectDestination extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
      placeholdertext: undefined,
      selectDestinationList: undefined
    }
  }

  static contextTypes = {
    store: PropTypes.object,
  };

  static propTypes = {
    location: PropTypes.any
  };

  selectDestinationBox = (placeholder) => {
    this.setState({
      open: true,
      placeholdertext: placeholder,
    });
  };

  dismiss = () => {
    this.setState({ open: false });
  };

  onChangeText = (text, searchforText) => {
    const {store: {dispatch}} = this.context;
    dispatch(searchSelectedDestination(text, searchforText))
  };

  render() {
    const { open } = this.state;
    let locationSelectList = undefined;
    if(this.state.placeholdertext === 'To'){
      locationSelectList = this.props.location.toLocation
    }else {
      locationSelectList = this.props.location.fromLocation
    }
    return(
      <SelectDestinationModalSuccess
        open={open}
        overlayBackground={Colors.selectDestinationColor}
        modalDidClose={() => this.setState({ open: false }) }
        containerStyle={styles.SelectDestinationConatiner}
        modalStyle={styles.SelectDestinationViewStyle}>
        { this.props.location.locationResponse === undefined ?
          <ActivityIndicator
            animating={this.props.location.isBusy}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
          :
          <View>
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
                      }} source={Images.searchicon}/>
                    <TextInput
                      style={{
                        backgroundColor: Colors.white,
                        flex: 1,
                        borderRadius: 10,
                        marginLeft: 5,
                        justifyContent: 'center'
                      }}
                      autoCorrect = {false}
                      returnKeyType = 'search'
                      placeholder={this.state.placeholdertext}
                      onChangeText={(text) => this.onChangeText(text, this.state.placeholdertext)}
                      placeholderTextColor={Colors.settingHeadingTextColor}
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
                height: Metrics.screenHeight- Metrics.screenHeight/2.2,
                marginBottom: -10,
              }}
              dataArray={
                (this.props.location.searchLocation != undefined)
                  ? this.props.location.searchLocation : locationSelectList}
              renderRow={(item) => {
                return (
                  <ListItem
                    style={{
                      borderColor: Colors.thinLineColor,
                      marginRight: -19
                    }}>
                    <SelectedDestinationCell
                      locationData={item}
                      Dismiss={this.dismiss}
                      RequestFor={this.state.placeholdertext}/>
                  </ListItem>
                )
              }}
            />
          </View>
        }
      </SelectDestinationModalSuccess>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(SelectDestination)