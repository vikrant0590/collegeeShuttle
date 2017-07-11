import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../../theme';
import styles from './RoundTripTabBarStyle';


class RoundTripTabBar extends Component {
  tabIcons: [];
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };
  contextTypes : {
    store: PropTypes.object,
  };

  // componentDidMount() {
  //   this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  // };

  // setAnimationValue({ value, }) {
  //    this.tabIcons.forEach((icon, i) => {
  //      const progress = Math.min(1, Math.abs(value - i));
  //      icon.setNativeProps({
  //        style: {
  //          color: this.iconColor(progress),
  //        },
  //      });
  //    });
  //   }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    const { activeTab, tabTitleText } = this.props;
    console.log('Active tab : ',this.props.activeTab);
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return(
          <TouchableOpacity
            key={tab}
            onPress={() => this.props.goToPage(i)}
            style={[styles.tab, {borderBottomWidth: 3, borderColor: i === activeTab ? Colors.white : Colors.transparent }]}
          >
            <Text
              style={[styles.tabTextStyle, {color: i === activeTab ? Colors.white :  Colors.base}]}
            >
              {tabTitleText[i]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>;
  }
}


export default RoundTripTabBar;

