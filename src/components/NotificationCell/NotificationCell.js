/**
 * Created by Admin on 25/07/17.
 */

import React, { Component, } from 'react';
import { Image, View, Text, Platform } from 'react-native';
import { Col, Row } from 'native-base';
import { Images, Colors } from '../../theme';
import styles from './NotificationCellStyle';
import PropTypes from 'prop-types';
export default class NotificationCell extends Component {

  static propTypes = {
    userRequest: PropTypes.any,
  };

  render() {
    const { userRequest } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <Row>
          <Col style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{
                ...Platform.select({
                  ios: {
                    resizeMode:'contain',
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    borderColor: Colors.userProfileBorderColor,
                    borderWidth: 1.5,
                    marginLeft: -5
                  },
                  android:{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    borderColor: Colors.userProfileBorderColor,
                    borderWidth: 1.5,
                    marginLeft: -5
                  }
                })
              }}
              source={Images.profileicon} />
          </Col>
          <Col style={{ flex: 0.8 }}>
            <Row>
              <Text style={styles.requestTitleText}>{userRequest.request}</Text>
            </Row>
            <Row>
              <Text style={styles.requestDescriptionText}>{userRequest.message}</Text>
            </Row>
          </Col>
        </Row>
      </View>
    )
  }
}