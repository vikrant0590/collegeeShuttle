/**
 * Created by Admin on 25/07/17.
 */
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import DriverCall from 'react-native-simple-modal';
import { Actions } from 'react-native-router-flux';
import styles from './DriverContactModalBoxStyle';
import { Images, Fonts, Colors } from '../../theme';
import { Row, Col, Icon, Button } from 'native-base';

export default class DriverContactModalBox extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
    }
  }

  showDialogCall = () => {
    this.setState({
      open: true,
    })
  };

  onPressCoodinaterCall = () => {
    this.setState({open: false});
  };

  onPressDriverCall = () => {
    this.setState({open: false});
  };

  render(){
    const { open } = this.state;
    return(
      <DriverCall
        open={open}
        overlayBackground={Colors.modalBgColor}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.DriverConatiner}
        modalStyle={styles.DriverViewStyle}>
        <View style={styles.container}>
          <Row style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              fontSize: Fonts.size.h3,
              fontFamily: Fonts.lato.base,
              color: Colors.profileInputHeadingColor
            }}>CALL</Text>
          </Row>
          <View style={{ backgroundColor: Colors.sepratorLineColor, height: 0.5 }} />
          <Row style={{ flex: 0.4 }}>
            <Col>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }} onPress={this.onPressCoodinaterCall}>
                <Text style={{
                  fontSize: Fonts.size.input,
                  fontFamily: Fonts.lato.base,
                  color: Colors.black
                }}>Co-ordinater</Text>
              </TouchableOpacity>
            </Col>
            <View style={{ backgroundColor: Colors.sepratorLineColor, width: 0.5 }} />
            <Col>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }} onPress={this.onPressDriverCall}>
                <Text style={{
                  fontSize: Fonts.size.input,
                  fontFamily: Fonts.lato.base,
                  color: Colors.black
                }}>Driver</Text>
              </TouchableOpacity>
            </Col>
          </Row>

        </View>
      </DriverCall>
    )
  }
}