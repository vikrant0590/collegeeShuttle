import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './CalenderStyle';

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
                hideExtraDays
                markedDates={{[this.state.selected]: {selected: true}}}
            />
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}
