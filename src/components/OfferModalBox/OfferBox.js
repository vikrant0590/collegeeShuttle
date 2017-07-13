import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import OfferModalBox from 'react-native-simple-modal';
import { Row, Col } from 'native-base';
import styles from './OfferBoxStyle';
import { Images, Fonts } from '../../theme';
export default class OfferBox extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
    }
  }

  showDialog = () => {
    this.setState({
      open: true,
    })
  };

  onPressValidation = () => {
    this.setState({open: false})
  };

  render(){
    const { open } = this.state;
    return(
      <OfferModalBox
        open={open}
        overlayBackground={'rgba(0, 0, 0, 0.3)'}
        modalDidOpen={() => console.log('open')}
        modalDidClose={() => this.setState({open: false }) }
        containerStyle={styles.boxViewConatiner}
        modalStyle={styles.boxViewStyle}
      >

        <View style={styles.container}>
          <Image style={styles.headerImage} source={Images.offerboxbgicon}/>
          <View
            style={styles.subView}>
            <View style={styles.marginTextHeaderView}>
              <Text
                style={styles.titleText}>College Shuttle Pro</Text>
            </View>

            <View style={styles.marginTextHeaderView}>
              <Text
                style={styles.describText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Text>
            </View>

            <View style={styles.marginView}>
              <Row style={{ height: Fonts.size.h1 }}>
                <Col style={{ justifyContent: 'center', flex: 0.6 }}>
                  <Text
                    style={styles.codeText}>
                    CODE: CS9485
                  </Text>
                </Col>
                <Col style={{ justifyContent: 'center', flex: 0.4 }}>
                  <Text
                    style={styles.codeCopyText}>
                    Copy Code
                  </Text>
                </Col>
              </Row>
            </View>

            <View style={styles.marginView}>
              <Text
                style={styles.detailText}>
                Details
              </Text>
            </View>

            <View style={styles.marginTextHeaderView}>
              <Text
                style={styles.detailsDescribText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Text>
            </View>
            <TouchableOpacity
              onPress={this.onPressValidation}
              style={styles.validationView}>
              <Text
                style={styles.validationText}>
                Validity: April 14, 2017
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </OfferModalBox>
    )
  }
}