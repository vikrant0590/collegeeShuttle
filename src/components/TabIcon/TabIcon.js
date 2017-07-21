import React,{ Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '../../theme';
import styles from './TabIconStyle';
import PropTypes from 'prop-types';
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  tabIcon: PropTypes.any,
  selectedTabIcon: PropTypes.any
};

export default class TabIcon extends Component{

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.tabIcon}
          source={this.props.selected ? this.props.selectedTabIcon : this.props.tabIcon} />
        <Text
          style={[styles.tabText,
            {color: this.props.selected ? Colors.placeholderTextColor : Colors.profileInputHeadingColor}]}>
          {this.props.title}
        </Text>
      </View>
    )
  }

}
TabIcon.propTypes = propTypes;
