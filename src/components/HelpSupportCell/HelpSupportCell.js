
import React, { Component } from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import { Fonts , Colors} from '../../theme';
import styles from './HelpSupportCellStyle';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

export default class HelpSupportCell extends Component {


  static propTypes = {
    data: PropTypes.any,
    identifier: PropTypes.any,
    query: PropTypes.any
  };

  onPressHelpSupport =(index, identifier, query) => {
    if (identifier === "HelpSupport") {
      switch (index) {
        case 0: {
          Actions.luggagehelp();
          break;
        }
        case 1: {
          Actions.reservationshelp();
          break;
        }
        case 2: {
          Actions.paymenthelp();
          break;
        }
        case 3: {
          Actions.generalquestions();
          break;
        }
      }

    } else {
      Actions.commonquestions({data: query[index]});

    }
  };

  render() {
    const { data, identifier, query } = this.props;
    return(
      <TouchableOpacity
        onPress={this.onPressHelpSupport.bind(this, data.index, identifier, query)}
        hitSlop={{top: 12, bottom: 12, right: 300}}>
        <Text
          style={styles.listHeading}>{ data.heading }</Text>
      </TouchableOpacity>
    )
  }
}



