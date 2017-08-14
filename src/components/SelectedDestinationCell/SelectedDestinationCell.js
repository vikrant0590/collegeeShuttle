import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Fonts } from '../../theme';
import { getSelectedDestination } from '../../redux/modules/location';
export default class  SelectedDestinationCell extends Component {

  static propTypes = {
    locationData: PropTypes.any,
    Dismiss: PropTypes.func,
    RequestFor: PropTypes.any
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  onPressSelectLocaton = () => {
    let data = {
      'data': this.props.locationData.nm,
      'tripId': this.props.locationData._id,
      'requestFor': this.props.RequestFor,
      'regionID': this.props.locationData.rid
    };
    const {store: {dispatch}} = this.context;
    dispatch(getSelectedDestination(data));
    this.props.Dismiss();
  };

  render() {
    console.log('this.props.locationData.ct', this.props.locationData.ct);
    return (
      <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={this.onPressSelectLocaton}>
        <Text
          style={{
            fontSize: Fonts.size.regular,
            fontFamily: Fonts.lato.base,
            color: Colors.black
          }}>{this.props.locationData.nm}</Text>
      </TouchableOpacity>
    );
  }
}

