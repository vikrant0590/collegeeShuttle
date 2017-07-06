import React, { Component, } from 'react';
import { View, } from 'react-native';
import styles from './HomeStyle';
import { BottomTabBar, MyProfileTabBar, MyTripsTabBar, SettingTabBar, HomeTab  } from '../../containers';
import { Images } from '../../theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const inactivetabImages = [Images.home,Images.travel,Images.profile,Images.setting];
const activeTabImages = [Images.homeActive, Images.travelActive,Images.profileActive, Images.settingActive];
const tabsTitles = [ 'HOME','MY TRIPS','PROFILE','SETTINGS'];

export default class Home extends Component {

  render() {
    return (
      <ScrollableTabView
        initialPage={2}
        tabBarPosition="bottom"
        renderTabBar={() =>
          <BottomTabBar
            tabImages={inactivetabImages}
            selectedTabImages={activeTabImages}
            tabTitleText={tabsTitles}
          />
        }
      >
        <View tabLabel="HOME" style={styles.tabView}>
          <HomeTab />
        </View>

        <View tabLabel="MY TRIPS" style={styles.tabView}>
          <MyTripsTabBar />
        </View>

        <View tabLabel="PROFILE" style={styles.tabView}>
          <MyProfileTabBar />
        </View>

        <View tabLabel="SETTINGS" style={styles.tabView}>
          <SettingTabBar/>
        </View>

      </ScrollableTabView>
    );
  }
}

