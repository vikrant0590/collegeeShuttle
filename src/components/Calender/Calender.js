import React, {Component} from 'react';
import {} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './CalenderStyle';
import { Colors } from '../../theme';
export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <Calendar
        onDayPress={this.onDayPress}
        style={styles.calendar}

        markedDates={
          { '2017-07-11': [{startingDay: true, color: Colors.selectedCalenderDateColor,  textColor: Colors.white}],
            '2017-07-12': [{color: Colors.selectedCalenderDateColor,textColor: Colors.white}],
            '2017-07-13': [{color: Colors.selectedCalenderDateColor, textColor: Colors.white}],
            '2017-07-14': [{endingDay: true, color: Colors.selectedCalenderDateColor, textColor: Colors.white}]
          }}
        markingType={'interactive'}
        theme={{
          calendarBackground: Colors.base,
          textSectionTitleColor: Colors.calenderheaderColor,
          selectedDayBackgroundColor: Colors.selectedCalenderDateColor,
          selectedDayTextColor: Colors.white,
          todayTextColor: Colors.black,
          dayTextColor: Colors.black,
          textDisabledColor: Colors.settingHeadingTextColor,
          dotColor: Colors.white,
          selectedDotColor: Colors.white,
          arrowColor: Colors.black,
          monthTextColor: Colors.black
        }}
      />
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}
