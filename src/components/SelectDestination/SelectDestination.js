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
      selectDestinationList: undefined,
      isLoading: true,
    }
  }

  static contextTypes = {
    store: PropTypes.object,
  };

  static propTypes = {
    locationResponse: PropTypes.any,
    selectDestination: PropTypes.any,
    locationDestination: PropTypes.any,
    searchDestination: PropTypes.any
  };

  selectDestinationBox = (data, placeholder) => {
    this.setState({
      open: true,
      placeholdertext: placeholder,
      selectDestinationList: data,
      isLoading: false,
    });
  };

  dismiss = () => {
    this.setState({ open: false });
  };

  onChangeText = (text) => {
    const {store: {dispatch}} = this.context;
    dispatch(searchSelectedDestination(text))
  };

  render() {
    const { open } = this.state;
    return(
      <SelectDestinationModalSuccess
        open={open}
        overlayBackground={Colors.selectDestinationColor}
        modalDidClose={() => this.setState({ open: false }) }
        containerStyle={styles.SelectDestinationConatiner}
        modalStyle={styles.SelectDestinationViewStyle}>
        { this.props.locationResponse === undefined ?
          <ActivityIndicator
            animating={this.state.isLoading}
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
                      onChangeText={(text) => this.onChangeText(text)}
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
                (this.props.searchDestination != undefined || this.props.searchDestination != null )
                  ? this.props.searchDestination : this.props.locationResponse}
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
    locationResponse: state.location.locationResponse,
    selectDestination: state.location.selectedDestination,
    searchDestination: state.location.searchDestination
  };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(SelectDestination)