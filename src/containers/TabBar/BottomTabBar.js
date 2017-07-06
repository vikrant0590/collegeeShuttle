import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Colors, Metrics } from '../../theme';
import Styles from './BottomTabBarStyle';

class BottomTabBar extends Component {
  tabIcons = [];
     propTypes = {
       goToPage: PropTypes.func,
       activeTab: PropTypes.number,
       tabs: PropTypes.array,
       selectedTabImages: PropTypes.any,
       tabTitleText:PropTypes.any,
       tabImages: PropTypes.any,
       style:PropTypes.any
     };

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
            style={[Styles.tabBarIconStyle,{color: i === activeTab ? Colors.activeTab :Colors.inactiveTab}]}
          />
          <Text
            style={[Styles.tabTextStyle, {color: i === activeTab ? Colors.activeTab : Colors.inactiveTab}]}
          >
            {tabTitleText[i]}
          </Text>
        </TouchableOpacity>;
      })}
    </View>;
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: 10,
    flexDirection: 'column'
  },
  tabs: {
    height: Metrics.tabBarHeight,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: Colors.white
  },
});

export default BottomTabBar;

