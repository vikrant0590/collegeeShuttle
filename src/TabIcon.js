import React,{ Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Fonts } from './theme';
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

const styles = StyleSheet.create({
  tabIcon: {
    marginBottom: 2,
    marginTop: 2,
    width: 32,
    height: 32,
    resizeMode: 'contain'
  },
  tabText: {
    fontFamily:Fonts.lato.base,
    fontSize:Fonts.size.tab
  },
});


TabIcon.propTypes = propTypes;
