import React, {Component} from 'react';
import {} from 'react-native';
import styles from './CalenderStyle';
import { Colors } from '../../theme';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
let minkey, maxkey = undefined;
export default class Calender extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format('YYYY-MM-DD'),
      datesMarked: [],
      minDate: undefined,
      maxDate: undefined,
      lastDate:undefined,
      calenderlist: {}
    };
    this.onDayPress = this.selecionarData.bind(this);
  }

  selecionarData(date){
    const obj = {};
    let {year, month, day} = date;
    let datelist = [];
    let minDate, maxDate = undefined;
    let lastDate = this.state.lastDate;

    let style = [{ startingDay: true, color: Colors.selectedCalenderDateColor, textColor: Colors.white }];
    let midstyle = [{color: Colors.selectedCalenderDateColor, textColor: Colors.white }];
    let endstyle = [{endingDay: true, color: Colors.selectedCalenderDateColor, textColor: Colors.white}];
    let onlyOneStyle = [
      { startingDay: true, color: Colors.selectedCalenderDateColor, textColor: Colors.white },
      {endingDay: true, color: Colors.selectedCalenderDateColor, textColor: Colors.white}
    ];

    if ((this.state.minDate === undefined && this.state.minDate === undefined) || day === this.state.minDate || day === lastDate){
      minDate = maxDate = day;
      this.setState({
        minDate: day,
        maxDate: day
      });
    } else if (day > this.state.minDate && (day < this.state.maxDate || day > this.state.maxDate)){ 
      minDate = this.state.minDate;
      maxDate = day;
      this.setState({
        maxDate: day
      });
    } else if((this.state.minDate === this.state.maxDate || this.state.maxDate === this.state.maxDate) && day < this.state.minDate){
      minDate = day;
      maxDate = this.state.maxDate;
      this.setState({
        minDate: day
      });
    }

    if (minDate !== undefined && maxDate !== undefined) {
      minkey = `${ year }-${ month }-${ minDate }`;
      maxkey = `${ year }-${ month }-${ maxDate }`;
    }

    if (minkey !== undefined && maxkey !== undefined) {
      const a = moment(minkey,"YYYY-MM-DD");
      const b = moment(maxkey,"YYYY-MM-DD");
      if(a < b) {
        for (const m = moment(a); m.isAfter(b, 'days') <= 0; m.add(1, 'days')) {
          datelist.push(m.format("YYYY-MM-DD"));
        }
      } else {
        for (let m = moment(b); m.isSameOrBefore(a); m.add(1, 'day')) {
          datelist.push(m.format("YYYY-MM-DD"));
        }
      }
    }

    for (let i = 0; i < datelist.length; i++) {
      if (i === 0) {
        obj[datelist[0]] = style;
        if(datelist.length - 1 === 0){
          obj[datelist[0]] = onlyOneStyle;
        }
      } else if (i === datelist.length - 1) {
        obj[datelist[datelist.length - 1]] = endstyle;
      }
      else {
        obj[datelist[i]] = midstyle;
      }
    }

    this.setState({
      lastDate: day,
      calenderlist: obj
    });
    return false;
  }


  render() {
    return (
      <Calendar
        onDayPress={this.selecionarData.bind(this)}
        style={styles.calendar}
        markedDates={this.state.calenderlist}
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
}