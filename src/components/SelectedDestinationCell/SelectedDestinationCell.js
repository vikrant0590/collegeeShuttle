import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Fonts } from '../../theme';
import { getSelectedDestination } from '../../redux/modules/location';
export default class  SelectedDestinationCell extends Component {

  static propTypes = {
    locationData: PropTypes.any,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  onPressSelectLocaton = () => {
    const {store: {dispatch}} = this.context;
    dispatch(getSelectedDestination(this.props.locationData.ct));
  };

  render() {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={this.onPressSelectLocaton}>
        <Text
          style={{
            fontSize: Fonts.size.regular,
            fontFamily: Fonts.lato.base,
            color: Colors.black
          }}>{this.props.locationData.ct}</Text>

        <Text
          style={{
            fontSize: Fonts.size.regular,
            fontFamily: Fonts.lato.base,
            color: Colors.timeColor
          }}> , </Text>

        <Text
          style={{
            fontSize: Fonts.size.regular,
            fontFamily: Fonts.lato.base,
            color: Colors.black
          }}>{this.props.locationData.desc}</Text>
      </TouchableOpacity>
    );
  }
}

