import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import { Colors, Fonts } from './theme';
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  tabIcon: PropTypes.any,
  selectedTabIcon: PropTypes.any
};

const TabIcon = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
      style={{
        marginBottom: 2,
        marginTop: 2,
        width: 32,
        height: 32,
        resizeMode: 'contain'
      }}
      source={props.selected ? props.selectedTabIcon : props.tabIcon} />
    <Text
      style={{
        color: props.selected ? Colors.placeholderTextColor : Colors.profileInputHeadingColor,
        fontFamily:Fonts.lato.base,
        fontSize:Fonts.size.tab
      }}>
      {props.title}
    </Text>
  </View>
);

TabIcon.propTypes = propTypes;

export default TabIcon;