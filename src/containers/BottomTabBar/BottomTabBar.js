import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../theme';
import styles from './BottomTabBarStyle';

export default class BottomTabBar extends Component {

  static get propTypes() {
    return {
      goToPage: PropTypes.func,
      activeTab: PropTypes.number,
      tabs: PropTypes.array,
      selectedTabImages: PropTypes.any,
      tabTitleText:PropTypes.any,
      tabImages: PropTypes.any,
      style:PropTypes.any
    };
  }

  render() {
    const { activeTab, selectedTabImages, tabImages, tabTitleText } = this.props;

    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity
          key={tab}
          onPress={() => this.props.goToPage(i)}
          style={[styles.tab, {borderBottomWidth: 3, borderColor: i === activeTab ? Colors.white :
            Colors.transparent }]}
        >
          <Image
            source={i === activeTab ? selectedTabImages[i] : tabImages[i]}
            style={styles.tabBarIconStyle}
          />
          <Text
            style={[styles.tabTextStyle, {color: i === activeTab ? Colors.activeTab : Colors.inactiveTab}]}
          >
            {tabTitleText[i]}
          </Text>
        </TouchableOpacity>;
      })}
    </View>;
  }
}



