import React, { Component, } from 'react';
import { View, } from 'react-native';
import styles from './TabBarStyles';
import { BottomTabBar, MyProfile, MyTrips, Setting, Home  } from '../../containers';
import { Images } from '../../theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const inactivetabImages = [Images.home,Images.travel,Images.profile,Images.setting];
const activeTabImages = [Images.homeActive, Images.travelActive,Images.profileActive, Images.settingActive];
const tabsTitles = [ 'HOME','MY TRIPS','PROFILE','SETTINGS'];

export default class TabBar extends Component {

  render() {
    let initial = 0;

    console.log('initial',initial);
    return (
      <ScrollableTabView
        initialPage={initial}
        locked= {true}
        tabBarPosition="bottom"
        renderTabBar={() =>
          <BottomTabBar
            activeTab={initial}
            tabImages={inactivetabImages}
            selectedTabImages={activeTabImages}
            tabTitleText={tabsTitles}
          />
        }
      >
        <View tabLabel="HOME" style={styles.tabView}>
          <Home />
        </View>

        <View tabLabel="MY TRIPS" style={styles.tabView}>
          <MyTrips />
        </View>

        <View tabLabel="PROFILE" style={styles.tabView}>
          <MyProfile />
        </View>

        <View tabLabel="SETTINGS" style={styles.tabView}>
          <Setting/>
        </View>

      </ScrollableTabView>
    );
  }
}

